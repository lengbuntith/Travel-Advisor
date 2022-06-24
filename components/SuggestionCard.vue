<template>
  <BaseLayout>
    <!-- message alert -->
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center" :class="colorMessage">{{ text }}</div>
    </v-snackbar>
    <div class="d-flex align-center">
      <v-tabs
        v-model="tabs"
        align-with-title
        class="d-flex align-center justify-center ma-0 pa-0"
      >
        <v-tab class="ma-0" href="#all" @click="handlerSort(1)"> Oldest </v-tab>
        <v-tab href="#newest" @click="handlerSort(-1)"> Newest </v-tab>
        <v-tab href="#owner" v-show="$auth.loggedIn" @click="handlerOwn()">
          Your posts
        </v-tab>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs>
      <div class="text-center" v-show="this.$auth.loggedIn">
        <v-dialog v-model="dialog" width="500" close-delay="1.2">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="blue lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
              v-show="dialog == false"
            >
              POST
            </v-btn>
          </template>

          <v-card class="pa-2 pa-md-4">
            <center><h3 class="mb-5">Create Suggestion</h3></center>
            <form @submit.prevent="createSuggestion">
              <v-autocomplete
                :item-text="'title'"
                :items="items"
                return-object
                @change="placeData"
                dense
                type="text"
                name="place"
                required
                label="Select place"
              ></v-autocomplete>
              <v-textarea
                outlined
                clearable
                counter=""
                v-model="input.message"
                label="Message"
                name="message"
                required
                type="text"
                @keyup.enter="createSuggestion()"
              ></v-textarea>
              <v-btn
                class="mr-4 blue darken-1 white--text"
                type="submit"
                :loading="loading"
              >
                Post
              </v-btn>
              <v-btn type="reset" @click="clear" class="red--text">
                Close
              </v-btn>
            </form>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <v-row class="mt-2">
      <v-col
        v-for="suggestion in suggestions"
        :key="suggestion._id"
        height="300"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card height="600" outlined style="border-radius: 6px">
          <v-card-text>
            <v-skeleton-loader
              v-show="suggestion == ''"
              elevation="0"
              class="mx-auto"
              max-width="300"
              max-height="349"
              type="card-avatar, list-item-two-line, list-item"
            ></v-skeleton-loader>
            <div class="d-flex align-center">
              <div
                v-if="suggestion.user"
                style="font-size: 10px; color: rgba(0, 0, 0, 0.6); width: 90%"
              >
                Posted: {{ convertDate(suggestion.createdAt) }}
              </div>
              <!-- delete & edit suggestion -->
              <div class="suggest mb-3" v-show="tabs == 'owner'">
                <div class="d-flex" v-if="suggestion.user">
                  <v-btn v-if="checkUserOwnComment(suggestion.user._id)" icon>
                    <editSuggest :suggestionId="suggestion._id" />
                  </v-btn>
                  <v-btn v-if="checkUserOwnComment(suggestion.user._id)" icon>
                    <deleteSuggestion :suggestionId="suggestion._id" />
                  </v-btn>
                </div>
              </div>
            </div>

            <div class="d-flex justify-center pb-2">
              <div style="border-radius: 4px">
                <v-card elevation="0" :to="`/suggestion/${suggestion._id}`">
                  <v-img
                    gradient="to top right, rgba(0,0,0,.01), rgba(25,32,72,.7)"
                    class="white--text align-end"
                    width="320"
                    height="250"
                    v-if="suggestion.place"
                    :src="suggestion.place.thumbnail"
                  >
                    <div
                      class="d-flex justify-center align-center"
                      style="height: 262px; font-size: 20px; font-weight: 700"
                    >
                      {{ suggestion.place.title }}
                    </div>
                  </v-img>
                </v-card>
                <hr />
                <div
                  class="mt-2 d-flex flex-column justify-center align-center"
                  v-if="suggestion.user"
                >
                  <v-avatar>
                    <v-img
                      :src="
                        suggestion.user.imageUrl
                          ? suggestion.user.imageUrl
                          : '/images/profile.png'
                      "
                    >
                    </v-img>
                  </v-avatar>

                  <div style="font-weight: 700" class="ml-2">
                    <div>
                      {{
                        suggestion.user.firstName +
                        ' ' +
                        suggestion.user.lastName
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="line-clamp mt-1" style="height: 80px">
              {{ suggestion.message }}
            </div>
          </v-card-text>
          <div class="ml-4">
            <v-btn icon @click="addLiked(suggestion._id)">
              <v-icon class="mr-1" medium :color="liked"> mdi-thumb-up </v-icon>
            </v-btn>
            <span class="subheading mr-1">{{ suggestion.totalLike }}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-comment-processing </v-icon>
            <span class="subheading">{{ suggestion.totalComment }}</span>
          </div>
          <YourIdea :suggestionId="suggestion._id" />
        </v-card>
      </v-col>
    </v-row>

    <div @click="pageNum" class="text-center pt-2 pt-md-4">
      <div
        class="d-flex align-center justify-center red--text"
        v-if="suggestions.length == 0"
      >
        No data
      </div>

      <v-container class="max-width">
        <v-pagination
          v-model="page"
          :length="length"
          :total-visible="7"
          @input="handlerPage"
        ></v-pagination>
      </v-container>
    </div>
  </BaseLayout>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      length: 1,
      items: [{ _id: 1, title: 'test' }],
      input: {
        place: '',
        message: '',
      },
      dialog: false,
      tabs: 'newest',
      page: 1,
      suggestions: [],
      snackbar: false,
      text: 'Create successful!',
      timeout: 2000,
      by_user: '',

      //delete loading
      loading: false,

      //color button like
      colorMessage: ' green--text',
      liked: 'rgba(0,0,0,.6)',
    }
  },
  methods: {
    //date formatter
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    //paginate
    pageNum() {
      this.$vuetify.goTo(0)
    },

    //close post suggestion
    clear() {
      this.dialog = false
    },

    //get place_id from user input
    placeData(place_id) {
      this.input.place = place_id._id
    },

    //create suggestion
    createSuggestion() {
      this.loading = true
      this.$axios
        .post('/suggestion/create', {
          place_id: this.input.place,
          message: this.input.message,
        })
        .then((res) => {
          console.log(res.data.data)
          let page = this.$route.query.page
          let sort = this.$route.query.sort
          if (this.$route.query.each_user) {
            this.by_user = this.$route.query.each_user
          }
          this.getSuggestion(page, sort)
        })
      setTimeout(() => {
        this.loading = false
        this.dialog = false
        this.snackbar = true
        this.input.message = ''
        this.input.place = ''
      }, 2000)
    },
    //add like
    addLiked(suggestionId) {
      this.$axios
        .post('/like/add', {
          suggestionID: suggestionId,
        })
        .then((res) => {
          let page = this.$route.query.page
          let sort = this.$route.query.sort
          this.getSuggestion(page, sort)
        })
        .catch((error) => {
          this.text = error.response.data.error
          this.colorMessage = ' red--text'

          this.isLoading = false
          this.snackbar = true
        })
    },

    //get all suggestion
    getSuggestion(page, sort) {
      this.$axios
        .get(
          `/suggestion/all?page=${page}&sort=${sort}&num_per_page=12&each_user=${this.by_user}`
        )
        .then((res) => {
          this.suggestions = res.data.data.docs
          this.by_user = ''
          //pagination
          this.length = res.data.data.totalPages
        })
    },
    //check owner if owner can delete their comment
    checkUserOwnComment(userId) {
      let status = false
      let user_id = ''
      if (this.$auth.loggedIn) user_id = this.$auth.user.data._id
      if (userId == user_id) status = true
      return status
    },
    async deleteSuggestion(suggestionId) {
      this.loading = true
      const res = await this.$axios.delete(`/suggestion/delete/${suggestionId}`)
      // console.log('delete comment', res.data)
      let page = this.$route.query.page
      let sort = this.$route.query.sort
      this.by_user = 1
      this.getSuggestion(page, sort)
      this.tabs = 'owner'
      this.colorMessage = ' green--text'
      this.loading = false
      this.text = 'Delete comment successful'
      this.snackbar = true
    },

    //sort by tabs
    handlerPage(page) {
      let sort = this.$route.query.sort
      this.$router.push(`/suggestion?page=${page}&sort=${sort}`)
    },

    handlerSort(sort) {
      let page = 1
      this.$router.push(`/suggestion?page=${page}&sort=${sort}`)
    },

    handlerOwn() {
      this.$router.push(`/suggestion?page=1&sort=-1&each_user=1`)
    },
  },

  watch: {
    '$route.query': {
      handler(query) {
        // console.log(query)
        let page = query.page
        let sort = query.sort
        if (query.each_user) {
          this.by_user = query.each_user
          if (this.tabs == 'newest') {
            this.by_user = ''
          }
        }
        if (page) this.page = parseInt(page)

        this.suggestions = ['', '', '', '', '', '']
        this.getSuggestion(page, sort)

        //get place to let user choice for post
        this.$axios.get('/place/all?item_per_page=100').then((res) => {
          // console.log('place', res.data.data.docs)
          this.items = res.data.data.docs
          // console.log('item', res.data.data.totalDocs)
        })
      },
      immediate: true,
      deep: true,
    },
  },

  created() {
    this.$nuxt.$on('getSuggestion', () => {
      let page = this.$route.query.page
      let sort = this.$route.query.sort
      if (this.$route.query.each_user) {
        this.by_user = this.$route.query.each_user
      }
      this.getSuggestion(page, sort)
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('getSuggestion')
  },
}
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.v-snack__content {
  color: green;
  display: flex;
  justify-content: center;
}
.v-tab {
  font-weight: 600;
  background-color: #fafafa;
}
.suggest .theme--light.v-btn.v-btn--icon {
  width: 20px;
  height: 20px;
}
</style>

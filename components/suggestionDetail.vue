<template>
  <div>
    <!-- Sheet notify show info user have to log in -->
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <v-sheet class="text-center" height="100px">
          <div class="py-3">This action require login first!</div>
          <v-btn color="blue" to="/login">Login</v-btn>
          <v-btn text color="error" @click="sheet = !sheet"> close </v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <div>
      <v-parallax
        dark
        height="400"
        jumbotron
        v-if="suggestion.place"
        :src="suggestion.place.images[0]"
      >
        <v-row class="bg-color" align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1
              class="white--text text-h1 font-weight-bold mb-4 text-h5 text-sm-h3 text-md-h2 text-lg-h1"
            >
              {{ suggestion.place.title }}
            </h1>
            <!-- <h4 class="subheading">
          Build your application today!
        </h4> -->
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <BaseLayout>
      <v-row class="mt-10">
        <v-col height="1000" cols="12" md="6" lg="6">
          <v-card outlined>
            <div>
              <div>
                <div>
                  <div class="mb-2 mt-2 ml-3 d-flex flex-row">
                    <v-avatar>
                      <v-img
                        v-if="suggestion.user"
                        :src="
                          suggestion.user.imageUrl
                            ? suggestion.user.imageUrl
                            : '/images/profile.png'
                        "
                      >
                      </v-img>
                    </v-avatar>
                    <div
                      class="d-flex justify-center flex-column ml-2"
                      style="width: 70%"
                    >
                      <div style="font-weight: 700" v-if="suggestion.user">
                        {{
                          suggestion.user.firstName +
                          ' ' +
                          suggestion.user.lastName
                        }}
                      </div>
                      <div style="font-size: 10px; color: rgba(0, 0, 0, 0.6)">
                        Posted:{{ convertDate(suggestion.createdAt) }}
                      </div>
                    </div>

                    <div
                      style="font-size: 14px"
                      class="d-flex flex-row justify-center"
                    >
                      <div class="mr-2 mt-2">
                        {{ suggestion.totalLike + ' likes' }}
                      </div>
                      <v-btn
                        icon
                        :loading="isLoading"
                        :to="`/suggestion/${suggestionId}`"
                        @click="addLiked(suggestionId)"
                      >
                        <v-icon class="mr-1" medium :color="liked">
                          mdi-thumb-up
                        </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <v-card-text>
                  <div>
                    {{ suggestion.message }}
                  </div>
                </v-card-text>
              </div>
            </div>
            <YourIdea :suggestionId="suggestionId" />
          </v-card>
          <v-card
            style="position: sticky; top: 0; z-index: 998"
            class="mt-8 d-flex align-center"
            elevation="1"
            height="50px"
            width="100%"
            ><h3 class="pa-3 text-sm-h5">
              Comments ({{ suggestion.totalComment }})
            </h3></v-card
          >

          <v-card
            elevation="0"
            v-for="comment in suggestion.commentsuggests"
            :key="comment._id"
            class="pa-5"
          >
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center">
                <v-avatar>
                  <v-img :src="comment.user.imageUrl"> </v-img>
                </v-avatar>
                <div>
                  <div style="font-weight: 700" class="ml-3">
                    {{ comment.user.firstName + ' ' + comment.user.lastName }}
                  </div>
                  <div
                    class="d-flex space-between align-right ml-3"
                    style="color: rgba(0, 0, 0, 0.5); font-size: 14px"
                  >
                    date: {{ convertDate(comment.createdAt) }}
                  </div>
                </div>
              </div>
              <div>
                <v-btn v-if="checkUserOwnComment(comment.user._id)" icon>
                  <deleteCommentSuggest :commentId="comment._id" />
                </v-btn>
              </div>
            </div>

            <div class="line-clamp mt-5 text-justify">
              {{ comment.comment }}
            </div>
            <hr />
          </v-card>
          <div class="text-center mt-1">
            <v-container class="max-width">
              <div class="text-center" @click="pageNum">
                <v-pagination
                  v-model="page"
                  :length="length_page"
                  :total-visible="7"
                  @input="handlerPage"
                ></v-pagination>
              </div>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6"
          ><div style="height: 720px; position: sticky; z-index: 888">
            <div id="map-wrap" style="height: 470px">
              <client-only>
                <l-map
                  :zoom="9"
                  v-if="suggestion.place"
                  :center="[suggestion.place.lat, suggestion.place.lng]"
                >
                  <l-tile-layer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                  <l-marker
                    :lat-lng="[suggestion.place.lat, suggestion.place.lng]"
                  >
                    <l-tooltip :content="suggestion.place.title" />
                  </l-marker>
                </l-map>
              </client-only>
            </div>
            <div>
              <h3 class="ma-2">Details</h3>
              <ul>
                <li v-if="suggestion.place">
                  Address:
                  {{
                    suggestion.place.title + ', ' + suggestion.place.city.name
                  }}, Cambodia
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </BaseLayout>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      //sheet
      sheet: false,

      suggestionId: this.$route.params.id,

      //color like button
      liked: 'rgba(0, 0, 0, 0.6)',
      isLoading: false,
      loading: false,
      page: 1,
      length_page: 0,
      suggestion: [],
    }
  },
  methods: {
    //date formatter
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    //pagination
    pageNum() {
      this.$vuetify.goTo(380)
    },
    handlerPage(page) {
      this.getSuggestionById(this.suggestionId, (parseInt(page) - 1) * 5)
      // console.log('pageNum: ', (parseInt(page) - 1) * 5)
    },
    //add like
    addLiked(suggestionId) {
      console.log(suggestionId)
      this.isLoading = true
      this.$axios
        .post('/like/add', {
          suggestionID: suggestionId,
        })
        .then((res) => {
          this.isLoading = false
          this.getSuggestionById(suggestionId, 0)
        })
        .catch((error) => {
          console.log(error.response.data)
          this.text = error.response.data.error
          this.colorMessage = ' red--text'

          this.isLoading = false
          this.snackbar = true
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
    //check liked by suggestion
    getSuggestionById(id, skip) {
      this.$axios
        .get(`/suggestion/get/${id}?skip=${skip}&sort=1`)
        .then((res) => {
          this.suggestion = res.data.data
          console.log(res.data.data)
          this.length_page = Math.floor(
            parseInt(res.data.data.totalComment) / 5
          )
          this.length_page++
          console.log(res.data.data.likesuggests)
          if (res.data.data.likesuggests[0]) {
            this.liked = 'blue'
            // this.text = 'save'
          } else {
            this.liked = 'rgba(0, 0, 0, 0.6)'
            // this.text = 'click to save'
          }
        })
    },
  },
  mounted() {
    this.getSuggestionById(this.suggestionId, 0)
  },
  created() {
    this.$nuxt.$on('getSuggestionById', () => {
      this.getSuggestionById(this.suggestionId, 0)
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('getSuggestionById')
  },
}
</script>

<style scoped>
.bg-color {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

<template>
  <BaseLayout>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      class="d-flex justify-center"
      color="white"
    >
      {{ text }}
    </v-snackbar>
    <div class="d-flex align-center">
      <v-tabs
        v-model="tabs"
        align-with-title
        class="d-flex align-center justify-center ma-0 pa-0"
      >
        <v-tab class="ma-0" href="#all" @click="handlerSort(1)"> Oldest </v-tab>
        <v-tab href="#newest" @click="handlerSort(-1)"> Newest </v-tab>
        <v-tab href="#popular"> Popular </v-tab>
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
            <form @submit.prevent="createEvent">
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
              ></v-textarea>
              <v-btn class="mr-4 blue darken-1 white--text" type="submit">
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
        <v-card outlined height="550">
          <v-card-text>
            <div class="d-flex justify-center pa-2">
              <div style="border-radius: 4px">
                <v-lazy transition="fade-transition">
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
                      style="height: 250px; font-size: 20px; font-weight: 700"
                    >
                      {{ suggestion.place.title }}
                    </div>
                  </v-img>
                </v-lazy>
                <!-- <v-card-title class="d-flex justify-center">{{
                suggestion.title
              }}</v-card-title> -->
                <hr />
                <div
                  class="mt-2 d-flex justify-center align-center"
                  v-if="suggestion.user"
                >
                  <v-avatar>
                    <v-img
                      :src="
                        suggestion.user.imageUrl
                          ? suggestion.user.imageUrl
                          : '/images/logoTravel.png'
                      "
                    >
                    </v-img>
                  </v-avatar>

                  <div style="font-weight: 700" class="ml-2">
                    {{ suggestion.user.firstName }}
                    {{ suggestion.user.lastName }}
                  </div>
                </div>
              </div>
            </div>
            <div class="line-clamp mt-1" style="height: 80px">
              {{ suggestion.message }}
            </div>
          </v-card-text>
          <div class="ml-4">
            <v-icon class="mr-1"> mdi-thumb-up-outline </v-icon>
            <span class="subheading mr-1">{{ suggestion.like }}K</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-comment-processing </v-icon>
            <span class="subheading">{{ suggestion.comment }}K</span>
          </div>
          <YourIdea />
        </v-card>
      </v-col>
    </v-row>

    <!-- <div class="text-center">
      <v-pagination v-model="page" :length="4" circle></v-pagination>
    </div> -->

    <div @click="pageNum" class="text-center pt-2 pt-md-4">
      <!-- <div
        class="d-flex align-center justify-center red--text"
        v-if="suggestions.length == 0"
      >
        No data
      </div> -->

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
      sort: '',
    }
  },
  methods: {
    pageNum() {
      // alert(this.page)
      //this.getSuggestion(this.page)
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

    //create event
    createEvent() {
      this.tabs = 'newest'
      console.log(this.input.place, this.input.message)
      this.$axios
        .post('/suggestion/create', {
          place_id: this.input.place,
          message: this.input.message,
        })
        .then((res) => {
          console.log(res.data.data)
          this.getSuggestion(1, -1)
        })
      this.dialog = false
      this.snackbar = true
      this.input.message = ''
      this.input.place = ''
    },

    //get all suggestion
    getSuggestion(page, sort) {
      this.$axios
        .get(`/suggestion/all?page=${page}&sort=${sort}`)
        .then((res) => {
          this.suggestions = res.data.data.docs

          //pagination
          this.length = res.data.data.totalPages
        })
    },

    handlerPage(page) {
      let sort = this.$route.query.sort
      this.$router.push(`/suggestion?page=${page}&sort=${sort}`)
    },

    handlerSort(sort) {
      let page = 1
      this.$router.push(`/suggestion?page=${page}&sort=${sort}`)
    },
  },

  watch: {
    '$route.query': {
      handler(query) {
        console.log(query)
        let page = query.page
        let sort = query.sort
        if (page) this.page = parseInt(page)

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
</style>

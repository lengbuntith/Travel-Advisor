<template>
  <BaseLayout>
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="green--text d-flex justify-center">{{ text }}</div>
    </v-snackbar>

    <div class="d-flex align-center">
      <v-tabs
        v-model="tabs"
        align-with-title
        class="d-flex align-center justify-center ma-0 pa-0"
      >
        <v-tab class="ma-0" href="#all" @click="handlerSort(1)"> Oldest </v-tab>
        <v-tab href="#newest" @click="handlerSort(-1)"> Newest </v-tab>
        <v-tab href="#owner" @click="handlerOwn()"> Your Posts </v-tab>
        <v-tabs-slider color="DarkCyan"></v-tabs-slider>
      </v-tabs>
      <div class="text-center" v-show="this.$auth.loggedIn">
        <v-dialog v-model="dialog" width="500" close-delay="1.2">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="lighten-2"
              class="blue"
              dark
              v-bind="attrs"
              v-on="on"
              v-show="dialog == false"
            >
              Post
            </v-btn>
          </template>

          <v-card class="pa-2 pa-md-4">
            <center><h3 class="mb-5">Create Event</h3></center>
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
              <v-text-field
                v-model="input.describe"
                label="Describe"
                type="text"
                required
                name="describe"
              ></v-text-field>
              <v-textarea
                outlined
                clearable
                counter=""
                v-model="input.requirement"
                label="Requirement"
                type="text"
                name="requirement"
              ></v-textarea>
              <v-btn class="mr-4 blue lighten-2 white--text" type="submit">
                Post
              </v-btn>
              <v-btn
                type="reset"
                :loading="isLoading"
                @click="clear"
                class="red--text"
              >
                Close
              </v-btn>
            </form>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <v-row class="mt-4">
      <v-col
        v-for="event in events"
        :key="event._id"
        height="300"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card outlined style="border-radius: 6px">
          <div class="px-2">
            <div>
              <div>
                <div
                  class="my-1 ml-3 d-flex flex-row align-center"
                  v-if="event.user"
                >
                  <v-avatar>
                    <v-img
                      :src="
                        event.user.imageUrl
                          ? event.user.imageUrl
                          : '/images/profile.png'
                      "
                    >
                    </v-img>
                  </v-avatar>
                  <div style="font-weight: 700" class="d-flex pl-3 flex-row">
                    <div class="d-flex flex-column" style="width: 100%">
                      <div>
                        {{ event.user.firstName }} {{ event.user.lastName }}
                      </div>
                      <div style="font-size: 10px; color: rgba(0, 0, 0, 0.6)">
                        Posted: {{ convertDate(event.createdAt) }}
                      </div>
                    </div>
                    <div class="suggest mb-3" v-show="tabs == 'owner'">
                      <v-btn v-if="checkUserOwnComment(event.user._id)" icon>
                        <deleteEvent :eventId="event._id" />
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-center ma-2" v-if="event.place">
                  <v-card :to="`/event/${event._id}`">
                    <v-img
                      gradient="to top right, rgba(0,0,0,.01), rgba(25,32,72,.7)"
                      style="border-radius: 5px"
                      height="250"
                      :src="event.place.thumbnail"
                    >
                      <div
                        class="d-flex justify-center align-center white--text"
                        style="height: 250px; font-size: 20px; font-weight: 700"
                      >
                        {{ event.place.title }}
                      </div>
                    </v-img>
                  </v-card>
                </div>
              </div>
              <v-card-text>
                <div class="line-camp" style="height: 90px">
                  {{ event.desc }}
                </div>
              </v-card-text>
            </div>
          </div>
          <div class="d-flex justify-center mb-2 pb-4">
            <v-btn
              color="success"
              style="border-radius: 4px"
              to="/event"
              @click="snackbar = true"
            >
              Join
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-7" @click="pageNum">
      <div
        class="d-flex align-center justify-center red--text"
        v-if="events.length == 0"
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
    <div class="text-center">
      <v-snackbar
        :timeout="3500"
        v-model="snackbar"
        :vertical="vertical"
        color="light-blue darken-1
"
        class="white--text ma-0"
        height="80"
      >
        <v-alert
          height="40"
          class="ma-0"
          type="info"
          color="light-blue darken-1
"
        >
          {{ text }}
        </v-alert>
      </v-snackbar>
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
        describe: '',
        requirement: '',
      },
      dialog: false,
      page: 1,
      events: [],
      snackbar: false,
      timeout: 2000,
      tabs: 'newest',
      by_user: '',
      isLoading: false,

      //snackbar
      snackbar: false,
      text: 'Allow to use in the future. Stay tuned!',
      vertical: true,
    }
  },
  methods: {
    //date formatter
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    //pagination
    pageNum() {
      this.$vuetify.goTo(0)
    },

    //close dialog
    clear() {
      this.dialog = false
    },

    //get place_id from user input
    placeData(place_id) {
      this.input.place = place_id._id
    },

    //create event
    createEvent() {
      this.isLoading = true
      this.$axios
        .post('/event/create', {
          place_id: this.input.place,
          describe: this.input.describe,
          requirement: this.input.requirement,
        })
        .then((res) => {
          let page = this.$route.query.page
          let sort = this.$route.query.sort
          if (this.$route.query.each_user)
            this.by_user = this.$route.query.each_user
          this.getEvent(page, sort)
          this.isLoading = false
        })
      this.dialog = false
      this.input.place = ''
      this.input.describe = ''
      this.input.requirement = ''
    },
    //check owner if owner can delete their comment
    checkUserOwnComment(userId) {
      let status = false
      let user_id = ''
      if (this.$auth.loggedIn) user_id = this.$auth.user.data._id
      if (userId == user_id) status = true
      return status
    },

    //get All event data
    getEvent(page, sort) {
      this.$axios
        .get(
          `/event/all?page=${page}&sort=${sort}&num_per_page=12&each_user=${this.by_user}`
        )
        .then((res) => {
          this.events = res.data.data.docs
          this.by_user = ''
          // console.log('event', res.data.data)

          //pagination
          this.length = res.data.data.totalPages
        })
    },

    handlerPage(page) {
      let sort = this.$route.query.sort
      this.$router.push(`/event?page=${page}&sort=${sort}`)
    },

    handlerSort(sort) {
      let page = 1
      this.$router.push(`/event?page=${page}&sort=${sort}`)
    },
    handlerOwn() {
      this.$router.push(`/event?page=1&sort=-1&each_user=1`)
    },
  },

  watch: {
    '$route.query': {
      handler(query) {
        let page = query.page
        let sort = query.sort
        if (query.each_user) {
          this.by_user = query.each_user
          if (this.tabs == 'newest') {
            this.by_user = ''
          }
        }
        if (page) this.page = parseInt(page)

        this.getEvent(page, sort)

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
  //event bus allow child contack parent
  created() {
    this.$nuxt.$on('getEvent', () => {
      let page = this.$route.query.page
      let sort = this.$route.query.sort
      if (this.$route.query.each_user)
        this.by_user = this.$route.query.each_user
      this.getEvent(page, sort)
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('getEvent')
  },
}
</script>

<style scoped>
.line-camp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.v-tab {
  background-color: #fafafa;
  font-weight: 600;
}
</style>

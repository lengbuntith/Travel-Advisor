<template>
  <div>
    <div class="mt-16">
      <h3>Contribute</h3>
      <v-row>
        <v-dialog v-model="dialog" persistent max-width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-4" color="primary" v-bind="attrs" v-on="on">
              Write a Review
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 d-flex justify-center align-center">
              Rate Your Experience
            </v-card-title>
            <v-rating
              class="d-flex justify-center align-center"
              v-model="rating"
              icon-label="custom icon label text {0} of {1}"
            >
            </v-rating>
            <div class="d-flex justify-center align-center">
              <p>Click to rate</p>
            </div>
            <v-card-title class="text-h5 d-flex justify-center align-center">
              Do you have any comments?
            </v-card-title>
            <v-textarea
              class="pa-4 text-no-wrap d-flex justify-center align-center"
              v-model="Text"
              auto-grow
              label="Text"
              rows="2"
              outlined
            ></v-textarea>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="createPost"
                :loading="loading"
              >
                COMMENT
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                CLOSE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <div class="mt-5">
      <v-snackbar
        v-model="snackbar"
        class="d-flex justify-center"
        color="white"
        :timeout="4000"
      >
        <div class="d-flex justify-center" :class="colorMessage">
          {{ text }}
        </div>
      </v-snackbar>
      <v-row>
        <v-col cols="12" sm="12" md="3">
          <h3>Trips & Reviews</h3>
          <Review :ratings="ratings" />
        </v-col>
        <v-col cols="12" sm="12" md="9" class="mt-0 mt-lg-15">
          <v-card elevation="1">
            <div>
              <v-combobox
                v-model="chips"
                :items="items"
                @change="getChipItem"
                cache-items
                return-object
                chips
                type="button"
                prepend-icon="mdi-filter-variant"
                solo
                flat
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    outlined
                    v-bind="attrs"
                    :input-value="selected"
                    @click="select"
                  >
                    <strong>{{ item }}</strong
                    >&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
            </div>
            <hr />
            <v-card
              elevation="0"
              v-for="comment in comments"
              :key="comment._id"
              class="pa-5"
            >
              <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                  <v-avatar>
                    <v-img :src="comment.userImageUrl"> </v-img>
                  </v-avatar>
                  <div>
                    <div style="font-weight: 700" class="ml-3">
                      {{ comment.userFirstName + ' ' + comment.userLastName }}
                    </div>
                    <div
                      class="d-flex space-between align-right ml-3"
                      style="color: rgba(0, 0, 0, 0.5); font-size: 14px"
                    >
                      {{ convertDate(comment.createdAt) }}
                    </div>
                  </div>
                </div>
                <div>
                  <v-btn v-if="checkUserOwnComment(comment.userId)" icon>
                    <v-btn
                      icon
                      color="teaf"
                      @click="deleteComment(comment._id)"
                      :loading="loading"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-btn>
                </div>
              </div>

              <div class="line-clamp mt-5 text-justify">
                {{ comment.message }}
              </div>
              <v-rating
                v-model="comment.rating"
                :length="length"
                size="14"
                color="teal"
                half-increments
                readonly
                dense
                background-color="yellow"
              ></v-rating>
              <hr />
            </v-card>
          </v-card>
          <div class="text-center mt-7" @click="pageNum">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="length_page"
                :total-visible="7"
                @input="handlerPage"
              ></v-pagination>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['placeId'],
  data() {
    return {
      //pagination default value
      length_page: 1,
      page: 1,
      sort: -1,

      dialog: false,
      rating: 0,
      Text: '',

      page: 1,
      loading: false,
      length: 5,
      comments: [],
      ratings: [],
      snackbar: false,
      text: '',

      //filter
      chips: 'Newest',
      items: ['Newest', 'Oldest'],

      //default color message
      colorMessage: ' green--text',
    }
  },
  methods: {
    //pagination
    pageNum() {
      this.$vuetify.goTo(1200)
    },
    handlerPage(page) {
      this.getComment((parseInt(page) - 1) * 5)
      // console.log('pageNum: ', (parseInt(page) - 1) * 5)
    },

    //get v-chip select
    getChipItem(item) {
      console.log(item)
      if (item == 'Oldest') {
        this.sort = 1
        this.getComment(0)
      }
      if (item == 'Newest') {
        this.sort = -1
        this.getComment(0)
      }
    },
    //create comment
    createPost() {
      this.loading = true
      console.log(this.Text, this.rating, this.placeId)
      this.$axios
        .post('/comment/create', {
          place_id: this.placeId,
          message: this.Text,
          rating: this.rating,
        })
        .then((res) => {
          console.log(res)
          this.sort = -1
          if (res.data.data) {
            this.getComment(0)
            this.getAllComment()
          }

          this.text = 'Create comment successful'
          this.colorMessage = ' green--text'
          this.loading = false
          this.dialog = false
          this.snackbar = true
        })
        .catch((error) => {
          console.log(error.response.data)
          this.text = error.response.data.error
          this.colorMessage = ' red--text'

          this.dialog = false
          this.loading = false
          this.snackbar = true
        })
    },

    //convert date
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    //check owner if owner can delete their comment
    checkUserOwnComment(userId) {
      let status = false
      let user_id = ''
      if (this.$auth.loggedIn) user_id = this.$auth.user.data._id
      if (userId == user_id) status = true
      return status
    },

    async deleteComment(comment_id) {
      this.loading = true
      const res = await this.$axios.post(`/comment/delete/${comment_id}`)
      console.log('delete comment', res.data)
      this.getComment(0)
      this.getAllComment()
      this.colorMessage = ' green--text'
      this.loading = false
      this.snackbar = true
      this.text = 'Delete comment successful'
    },

    getAllComment() {
      this.$axios
        .get(`/comment/detail/${this.placeId}?limit=100`)
        .then((res) => {
          this.ratings = res.data.rating
        })
    },

    getComment(skip) {
      this.$axios
        .get(`/comment/detail/${this.placeId}?skip=${skip}&sort=${this.sort}`)
        .then((res) => {
          console.log('dataHah', res)
          this.comments = res.data.data.docs[0].comments
          this.length_page = Math.floor(
            parseInt(res.data.data.docs[0].totalComment) / 6
          )
          this.length_page++
          console.log(this.length_page)
        })
    },
  },
  created() {
    this.getComment(0)
    this.getAllComment()
  },
  // watch: {
  //   placeDetail: {
  //     handler(place) {
  //       console.log('review place', place, this.placeId)
  //       this.$axios
  //         .get(`/comment/detail/${this.placeId}?page=1&sort=-1`)
  //         .then((res) => {
  //           this.comments = res.data.data.docs[0].comments
  //           //num of paginate
  //           this.length_page = res.data.data.totalPages
  //           this.ratings = res.data.rating
  //         })
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
}
</script>
<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.v-snack__content {
  border-left: 6px solid green !important;
}
</style>

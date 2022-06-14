<template>
  <div class="mt-5">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <h3>Trips & Reviews</h3>
        <Review :ratings="ratings" />
      </v-col>
      <v-col cols="12" sm="12" md="9" class="mt-0 mt-lg-15">
        <v-card elevation="1">
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
                  <v-btn icon color="teaf" @click="deleteComment(comment._id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-btn>
              </div>
            </div>

            <div class="line-clamp mt-5 mb-3 text-justify">
              {{ comment.message }}
            </div>
            <hr />
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['placeDetail'],
  data() {
    return {
      page: 1,
      comments: [],
      ratings: [],
    }
  },

  watch: {
    placeDetail: {
      handler(place) {
        console.log('review place', place)
        this.$axios.get(`/comment/detail/${place._id}`).then((res) => {
          this.comments = res.data.data
          this.ratings = res.data.rating
        })
      },
      immediate: true,
    },
  },

  methods: {
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    checkUserOwnComment(userId) {
      let status = false
      let user_id = ''
      if (this.$auth.loggedIn) this.$auth.user.data._id
      if (userId == user_id) status = true
      return status
    },

    deleteComment(comment_id) {
      this.$axios.post(`/comment/delete/${comment_id}`).then((res) => {
        console.log('delete comment', res.data)

        this.$axios
          .get(`/comment/detail/${this.placeDetail._id}`)
          .then((res) => {
            this.comments = res.data.data
            this.ratings = res.data.rating
          })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

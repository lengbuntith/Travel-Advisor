<template>
  <div class="mt-16">
    <h3>Contribute</h3>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="300">
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
            class="pa-4 text-no-wrap rounded-pill d-flex justify-center align-center"
            v-model="Text"
            auto-grow
            label="Text"
            rows="1"
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
</template>
<script>
export default {
  props: ['placeId'],
  data() {
    return {
      dialog: false,
      rating: 0,
      Text: '',
      loading: false,
    }
  },
  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },

  methods: {
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
          this.placeDetail = res.data.data
          this.dialog = false
          this.loading = false
        })
    },
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++
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

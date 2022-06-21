<template>
  <div >
    <div class="d-flex align-center flex-row">
      <h1 style="width: 96%">{{ placeDetail.title }}</h1>

      <!-- Favorite cart -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <div>
            <v-btn
             v-show="$auth.loggedIn"
              :loading="isloading"
              icon
              :to="`/place/${placeDetail._id}`"
              @click="addToFavorite"
              v-on="{ ...tooltip }"
            >
              <v-icon :color="saved" medium x-large>mdi-heart</v-icon>
            </v-btn>
          </div>
        </template>
        <span>{{ text }}</span>
      </v-tooltip>
    </div>

    <div
      class="py-2 text-no-wrap rounded-pill d-flex justify-between align-center"
    >
      <v-rating
        v-model="placeDetail.averageRating"
        :length="length"
        size="14"
        color="teal"
        half-increments
        readonly
        dense
        background-color="yellow"
        class="ml-n1"
      ></v-rating>

      <div class="ml-1">{{ placeDetail.totalComment }} reviews</div>
    </div>

    <h3 style="font-size: 20px">About</h3>
    <p>
      <b>Best time to visit:</b> {{ placeDetail.date }} <br /><b>Story:</b>
      {{ placeDetail.story }}
    </p>
  </div>
</template>
<script>
export default {
  props: ['placeDetail'],
  data: () => ({
    length: 5,

    //color favorite cart
    saved: 'rgba(0, 0, 0, 0.6)',
    isloading: false,
    text: 'click to save',
  }),
  methods: {
    //create add and remove favorite
    addToFavorite() {
      this.isloading = true
      this.$axios
        .post('/saved/add', {
          placeID: this.placeDetail._id,
        })
        .then((res) => {
          this.getSavedData()
        })
        .catch((error) => {
          console.log(error.response.data)
          if (!error.response.data.success) this.sheet = true
        })
    },

    //get data from api check heart color
    getSavedData() {
      this.$axios.post(`/saved/place/${this.placeDetail._id}`).then((res) => {
        this.isloading = false
        if (res.data.data[0]) {
          this.saved = 'red'
          this.text = 'saved'
        } else {
          this.saved = 'rgba(0, 0, 0, 0.6)'
          this.text = 'click to save'
        }
      })
    },

    //check favorited when starting
    checkFavorited() {
      console.log('Data', this.placeDetail)
      if (this.placeDetail.saved) {
        if (this.placeDetail.saved[0])
          if (this.placeDetail.saved[0].saved) {
            this.saved = 'red'
            this.text = 'saved'
          }
      }
    },
  },

  //find place that user added to favorite then chnages color to red
  watch: {
    placeDetail: {
      handler(place) {
        console.log(this.$auth.loggedIn);
        if (place) this.checkFavorited()
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>

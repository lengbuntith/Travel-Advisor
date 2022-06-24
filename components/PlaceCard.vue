<template>
  <div>
    <!-- Sheet notify show info user have to log in -->
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <v-sheet class="text-center" height="100px">
          <div class="py-3">This action require login first!</div>
          <v-btn color="blue" to="/login">Login</v-btn>
          <v-btn
            text
            color="error"
            @click=";(sheet = !sheet), (loading = !loading)"
          >
            close
          </v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div>

    <!-- Card all places -->
    <v-card
      v-show="place == ''"
      max-height="300"
      elevation="0"
      class="pointer image-slide"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        max-height="200"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card
      v-show="place"
      class="pointer image-slide"
      elevation="0"
      :to="`/place/${place._id}`"
      max-width="300"
    >
      <v-img
        aspect-ratio="1"
        :src="place.thumbnail"
        class="white--text swiper-lazy"
        gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
      >
        <!-- <slot name="icon"></slot> -->
        <v-card-title class="d-flex justify-space-between" style="padding: 0">
          <div></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <div>
                <v-btn
                  :loading="loading"
                  icon
                  to="/"
                  @click="addToFavorite"
                  v-on="{ ...tooltip }"
                >
                  <v-icon :color="saved">mdi-heart</v-icon>
                </v-btn>
              </div>
            </template>
            <span>{{ text }}</span>
          </v-tooltip>
        </v-card-title>
        <v-card-actions style="height: 65%" class="justify-center align-center">
          <div class="ma-0 text-capitalize text-lg-h6">
            {{ place.title }}
          </div>
        </v-card-actions>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['place'],
  data() {
    return {
      //color favorite cart
      saved: 'rgba(250, 250, 250, 0.6)',
      loading: false,
      text: 'click to save',

      //sheet
      sheet: false,
    }
  },
  methods: {
    //add favorite place
    addToFavorite() {
      this.loading = true
      this.$axios
        .post('/saved/add', {
          placeID: this.place._id,
        })
        .then((res) => {
          this.getSavedData()
        })
        .catch((error) => {
          console.log(error.response.data)
          if (!error.response.data.success) this.sheet = true
        })
    },

    //get data
    getSavedData() {
      this.$axios.post(`/saved/place/${this.place._id}`).then((res) => {
        this.loading = false
        if (res.data.data[0]) {
          this.saved = 'red'
          this.text = 'save'
        } else {
          this.saved = 'rgba(250, 250, 250, 0.6)'
          this.text = 'click to save'
        }

        // console.log('DetailPlace', this.place)
      })
    },
  },

  //find place that user added to favorite
  created() {
    if (this.place.saved) {
      if (this.place.saved[0])
        if (this.place.saved[0].saved) {
          this.saved = 'red'
          this.text = 'saved'
        }
    }
  },
}
</script>
<style scoped>
.image-slide:hover {
  transform: scale(1.04);
}
</style>

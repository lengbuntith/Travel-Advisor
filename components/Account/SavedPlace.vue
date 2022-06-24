<template>
  <div>
    <!-- Show no data when no favorite place -->
    <div class="pa-3 pl-12 red--text" v-if="favorites == ''">No Data</div>

    <!-- Favorite cart -->
    <div class="pa-3 pl-12" v-for="favorite in favorites" :key="favorite._id">
      <v-card flat elevation="1" :to="`/place/${favorite.place._id}`">
        <div class="d-flex pa-3">
          <v-img
            max-height="100"
            max-width="100"
            style="border-radius: 4px"
            :src="favorite.place.thumbnail"
          ></v-img>
          <div style="width: 100%" class="ml-2">
            <h4>{{ favorite.place.title }}</h4>
            <v-rating
              v-model="favorite.place.averageRating"
              length="5"
              size="14"
              color="teal"
              readonly
              dense
              background-color="yellow"
              class="ml-n1"
            ></v-rating>
            <div class="line-clamp">Story: {{ favorite.place.story }}</div>
          </div>
          <div class="d-flex align-center">
            <v-btn icon to="/account">
              <removeSaved :saveId="favorite.place._id" />
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      averageRating: null,
      favorites: [
        {
          place: {
            thumbnail: null,
          },
        },
      ],
    }
  },

  methods: {
    //get all save by user
    getSave() {
      this.$axios.get('/saved/me').then((res) => {
        console.log('saved', res.data.data)
        this.favorites = res.data.data
      })
    },
  },
  mounted() {
    this.getSave()
  },
  created() {
    this.$nuxt.$on('getSave', () => {
      this.getSave()
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('getSave')
  },
}
</script>

<style lang="scss" scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

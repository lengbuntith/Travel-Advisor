<template>
  <div style="background-color: #fafafa">
    <v-parallax
      src="https://images7.alphacoders.com/437/thumb-1920-437264.jpg"
      height="450"
    >
      <div style="background-color: rgba(0, 0, 0, 0.2)">
        <BaseLayout>
          <map-svg />
        </BaseLayout>
      </div>
    </v-parallax>
    <!-- <TheBanner v-else /> -->

    <BaseLayout>
      <PlaceSlide :places="places"></PlaceSlide>
      <rating-slide :places="popularPlaces"></rating-slide>
      <local-slide :places="localPlaces"></local-slide>
      <trends-slide
        v-for="(place, index) in trendPlaces"
        :key="'trend' + index"
        :category="place.category"
        :places="place.places"
      ></trends-slide>
    </BaseLayout>
    <JoinUs />
    <div class="mb-5">
      <BaseLayout>
        <our-team />
      </BaseLayout>
    </div>
  </div>
</template>

<script>
import LocalSlide from '~/components/LocalSlide.vue'
import MapSvg from '~/components/MapSvg.vue'
import RatingSlide from '~/components/RatingSlide.vue'
import TrendsSlide from '~/components/TrendsSlide.vue'
export default {
  components: {
    RatingSlide,
    LocalSlide,
    TrendsSlide,
    MapSvg,
  },
  name: 'Home',
  data() {
    return {
      show: true,
      windowWidth: window.innerWidth,
      places: [],
      popularPlaces: [],
      localPlaces: [],
      trendPlaces: [
        {
          category: 'Latest Trend Places',
          places: [],
        },
      ],
    }
  },
  methods: {
    //get all places
    getPlace() {
      this.$axios
        .get('place/all?item_per_page=200&select=saved')
        .then((res) => {
          // console.log(res.data.data.docs)
          this.places = res.data.data.docs
          console.log(this.places)
        })
    },
    //get popular place
    getPopular() {
      this.$axios
        .get(
          '/place/all?item_per_page=5&most_comment=true&select=story,averageRating,city'
        )
        .then((res) => {
          // console.log(res.data.data.docs)
          this.popularPlaces = res.data.data.docs
        })
    },
    //get popular place
    getLocalPlace() {
      this.$axios.get('/city/all').then((res) => {
        // console.log(res.data.data.docs)
        this.localPlaces = res.data.data
      })
    },
    handleResize() {
      console.log('called')
      if (window.innerWidth < 1281 && this.show == true) {
        this.show = false
      } else if (window.innerWidth >= 1281) {
        this.show = true
      }
    },
  },
  created() {
    // this.getPlace()
    this.getPopular()
    this.getLocalPlace()
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to, from)
        console.log('RELOAD')
        this.getPlace()
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>
<style>
.v-parallax__content {
  padding: 0px !important;
}
</style>

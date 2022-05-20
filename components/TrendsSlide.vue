<template>
  <div class="my-10">
    <v-layout
      style="margin: 2vh 0 0 1vw"
      class="d-flex flex-column d-sm-none justify-center align-center"
    >
      <h2 style="color: #40b3a2">{{ category }}</h2>
      <p class="text-justify pr-md-10 pr-sm-0">
        Top trends places in Cambodia, nowadays. Keep place with the latest
        travel trends and enjoy your day in Cambodia.<nuxt-link to="/"
          >view more</nuxt-link
        >
      </p>
    </v-layout>
    <swiper
      class="swiper"
      :style="`height: ${height[1]}`"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="(place, index) in places"
        :key="index"
        class="swiper-slide"
      >
        <trends-card
          :place="place"
          :height="height[parseInt(index)]"
          :margin="margin"
        ></trends-card>
      </swiper-slide>

      <v-layout
        style="margin: 2vh 0 0 1vw"
        class="d-none d-sm-flex flex-column"
      >
        <h2 style="color: #40b3a2">{{ category }}</h2>
        <p>
          Top trends places in Cambodia, nowadays. Keep place with the latest
          travel trends and enjoy your day in Cambodia.
        </p>
        <v-btn
          color="#40b3a2"
          elevation="0"
          class="text-uppercase white--text font-weight-bold"
          max-width="100"
          to="/#"
          >View more</v-btn
        >
      </v-layout>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TrendsCard from './TrendsCard.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    TrendsCard,
  },

  props: ['category', 'places'],

  data() {
    return {
      height: [180, 220, 180],
      margin: 175,
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1904: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  //render width
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 960) {
        this.margin = 205
        this.height = [210, 250, 210]
      } else if (window.innerWidth >= 600) {
        this.margin = 175
        this.height = [180, 220, 180]
      } else if (window.innerWidth < 600) {
        this.height = [110, 150, 110]
        this.margin = 105
      }
    },
  },
}
</script>

<style scoped>
.swiper-button-next {
  color: rgba(64, 179, 162);
}
.swiper-button-prev {
  color: rgba(64, 179, 162);
}
/* .swiper-wrapper {
  height: 300px;
} */
</style>

<template>
  <div class="my-10">
    <div>
      <!-- <v-btn
        to="/perfect-places"
        elevation="0"
        dark
        plain
        color="rgba(64, 179, 162)"
        class="mb-2 pl-0"
        ><h2>{{ category }}</h2>
        <i class="fas fa-caret-right fa-xl pl-1"></i>
      </v-btn> -->
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(place, index) in places"
        :key="index"
        class="swiper-slide"
      >
        <trends-card
          :place="place"
          :height="height[parseInt(index)]"
        ></trends-card>
      </swiper-slide>
      <!-- <v-btn
        to="/perfect-places"
        elevation="0"
        dark
        plain
        color="rgba(64, 179, 162)"
        class="mb-2 pl-0 pt-10"
        ><h2>{{ category }}</h2>
        <i class="fas fa-caret-right fa-xl pl-1"></i>
      </v-btn> -->
      <v-layout style="margin: 2vh 0 0 1vw" class="d-flex flex-column">
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
      <!-- <div
        class="d-none d-sm-flex swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="d-none d-sm-flex swiper-button-next swiper-button-white"
        slot="button-next"
      ></div> -->
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
      height: [210, 250, 210],
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
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
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
}
</script>

<style scoped>
.swiper-button-next {
  color: rgba(64, 179, 162);
}
.swiper-button-prev {
  color: rgba(64, 179, 162);
}
</style>

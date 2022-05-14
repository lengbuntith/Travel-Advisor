<template>
  <div class="my-10">
    <div>
      <v-sheet elevation="0" class="mb-2 pl-0 d-flex justify-center"
        ><h2 style="color: rgba(64, 179, 162)">{{ category }}</h2>
      </v-sheet>
    </div>
    <swiper class="swiper justify-center" :options="swiperOption">
      <swiper-slide
        v-for="(place, index) in places"
        :key="index"
        class="swiper-slide align-center"
      >
        <rating-card :place="place"></rating-card>
      </swiper-slide>
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
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: ['category', 'places'],

  data() {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
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

<template>
  <div class="my-10">
    <div>
      <v-sheet
        plain
        style="color: rgba(64, 179, 162, 0.7); background-color: #fafafa"
        class="mb-1 pl-0"
        ><h2>Local Attractive Places</h2>
      </v-sheet>
    </div>
    <h4 class="mb-3" style="color: rgba(0, 0, 0, 0.3)">
      Pick up a city, any province in Cambodia.
    </h4>
    <swiper
      class="swiper"
      :options="swiperOption"
      :grabCursor="true"
      :effect="'faded'"
    >
      <swiper-slide
        v-for="place in places"
        :key="place._id"
        class="swiper-slide"
      >
        <LocalCardNew :place="place"></LocalCardNew>
      </swiper-slide>
      <div
        class="d-none d-sm-flex swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="d-none d-sm-flex swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
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

  props: ['places'],

  data() {
    return {
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

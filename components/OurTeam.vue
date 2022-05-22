<template>
  <div class="mt-16">
    <div>
      <v-sheet elevation="0" style="background-color: #fafafa"
        ><h2 style="color: rgba(64, 179, 162)">Our Team</h2>
        <h4 class="mb-3" style="color: rgba(0, 0, 0, 0.3)">
          Pick up a city, any province in Cambodia.
        </h4>
      </v-sheet>
    </div>
    <swiper class="swiper justify-center px-2" :options="swiperOption">
      <swiper-slide
        v-for="item in members"
        :key="item._id"
        class="swiper-slide align-center"
      >
        <OurTeamCard :member="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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

  data() {
    return {
      members: [
        {
          _id: 1,
          profile: '',
          name: 'PHAL SreyKhouch',
          role: 'Front-end',
        },
        {
          _id: 2,
          profile: '',
          name: 'KONG Sopheap',
          role: 'Front-end',
        },
        {
          _id: 3,
          profile: '',
          name: 'LY Chanthorn',
          role: 'Front-end',
        },
        {
          _id: 4,
          profile: '',
          name: 'LENG Butith',
          role: 'Front-end & Back-end',
        },
        {
          _id: 5,
          profile: '',
          name: 'OURN Dalin',
          role: 'Front-end & Report',
        },
        {
          _id: 6,
          profile: '',

          name: 'KHENG Piseth',
          role: 'Front-end',
        },
        {
          _id: 7,
          profile: '',
          name: 'KOENG Gana',
          role: 'Front-end',
        },
        {
          _id: 8,
          profile: '',
          name: 'KHOEUNG Sokhai',
          role: 'Front-end & Back-end',
        },
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        slidesPerView: 2,
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-pagination {
    --swiper-pagination-color: #f2af15;
}
</style>

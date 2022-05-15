<template>
  <div>
    <swiper class="swiper banner rounded-lg" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(i, index) in images"
        :key="index"
      >
        <v-img :src="i" class="banner">
          {{ index }}
        </v-img>
      </swiper-slide>

      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
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
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/1200px-Ankor_Wat_temple.jpg',
        'https://th.bing.com/th/id/R.bff31d097410d3bb33758dcf6338f002?rik=7%2bMIIeySloWz2w&pid=ImgRaw&r=0',
        'https://tripily.co/wp-content/uploads/2020/03/Discover-Bokor-Scooter.jpg',
        'https://th.bing.com/th/id/R.02ad1ae6ede74d76cd0bcbf12087fbf8?rik=8DSCTf6yvR%2feJw&pid=ImgRaw&r=0',
      ],
      swiperOption: {
        slidesPerView: 1,
        effect: 'fade',
        // loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true,
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    }
  },
}
</script>
<style lang="scss">
.swiper.banner {
  max-height: 320px;
}
@media (max-width: 768px) {
  .swiper.banner {
    max-height: 200px;
  }
}
</style>

//banner 1200x480

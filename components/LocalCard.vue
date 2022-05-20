<template>
  <div>
    <swiper class="swiper banner rounded-lg" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(image, index) in place.image"
        :key="index"
        ><v-card
          class="pointer image-slide ma-0"
          elevation="0"
          :to="`/place/${place.name}`"
          max-width="221"
          max-height="300"
        >
          <v-img
            aspect-ratio="1"
            :src="image.src"
            gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
            class="banner white--text ma-0"
          >
            <v-card-actions
              style="height: 100%"
              class="justify-center align-center"
            >
              <div class="ma-0 text-capitalize text-lg-h6">
                {{ place.name }}
              </div>
            </v-card-actions>
          </v-img>
        </v-card>
      </swiper-slide>
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

  props: ['place'],
  data() {
    return {
      rating: 4,
      swiperOption: {
        slidesPerView: 1,
        effect: 'cards',
        // loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>
<style scoped>
.image-slide:hover {
  transform: scale(1.04);
}
</style>

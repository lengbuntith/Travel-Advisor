<template>
  <div class="mt-16">
    <div>
      <v-sheet elevation="0" style="background-color: #fafafa"
        ><h2 style="color: rgba(64, 179, 162)">Our Team</h2>
        <h4 class="mb-3" style="color: rgba(0, 0, 0, 0.3)">
          Welcome to our amazing teams! United as one.
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
          role: 'Developer',
          message:
            'If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.',
        },
        {
          _id: 2,
          profile: '',
          name: 'KONG Sopheap',
          role: 'Developer',
          message:
            'Do not give up no matter what, always try just one more time, and eventually you will be successful.',
        },
        {
          _id: 3,
          profile:
            'https://res.cloudinary.com/dik7npkoo/image/upload/v1655223719/ablizkrsfjif7ikdqvzu.jpg',
          name: 'LY Chanthorn',
          role: 'Developer',
          message:
            'Don’t be sad about what you couldn’t achieve yesterday and think of the great things today has for you. No one perfect!',
        },
        {
          _id: 4,
          profile: '',
          name: 'LENG Butith',
          role: 'Developer',
          message:
            'Man can live about forty days without food, about three days without water, about eight minutes without air, but only for one second without you><.',
        },
        {
          _id: 5,
          profile: '',
          name: 'OURN Dalin',
          role: 'Developer',
          message:
            'Succeeding in life is easy as long as you believe in yourself. Trust yourself, and success will come along.',
        },
        {
          _id: 6,
          profile: '',

          name: 'KHENG Piseth',
          role: 'Developer',
          message:
            'Try to learn from every little thing, and no one would be wiser than you. Help yourself; others will come forward to help you as well. Best wishes.',
        },
        {
          _id: 7,
          profile: '',
          name: 'KOENG Gana',
          role: 'Developer',
          message:
            'Your future journey will be designed based on the path you choose at present. Best wishes for a successful and flourishing future!',
        },
        {
          _id: 8,
          profile: '',
          name: 'KHOEUNG Sokhai',
          role: 'Developer',
          message:
            'Success is not something easily achieved. So, work hard for it and later on enjoy the rewards. Always remember giving up is a weakness. All the best.',
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

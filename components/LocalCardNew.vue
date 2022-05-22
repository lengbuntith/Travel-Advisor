<template>
  <v-card
    class="pointer image-slide ma-0"
    elevation="0"
    :to="`/place/${name}`"
    max-width="221"
    max-height="300"
  >
    <v-img
      aspect-ratio="1"
      :src="currentImage"
      gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
      class="banner white--text ma-0"
      style="transition: 2 ease-in-out swiper-lazy"
    >
      <v-card-actions style="height: 100%" class="justify-center align-center">
        <div class="ma-0 text-capitalize text-lg-h6">
          {{ name }}
        </div>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: ['place'],
  data() {
    return {
      rating: 4,
      images: [],
      name: '',
      currentImage: '',
      currentIndex: 0,
      totalIndex: 1,
    }
  },

  watch: {
    place: {
      handler(place) {
        this.images = place.image
        this.name = place.name

        this.currentImage = place.image[0].src
        this.totalIndex = place.image.length - 1

        setInterval(() => {
          if (this.currentIndex == this.totalIndex) {
            this.currentIndex = -1
          }

          this.currentImage = place.image[++this.currentIndex].src
        }, 6000)
      },
      immediate: true,
    },
  },
}
</script>
<style scoped>
.image-slide:hover {
  transform: scale(1.04);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

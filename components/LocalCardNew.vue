<template>
  <v-card
    class="pointer image-slide ma-0"
    elevation="0"
    :to="`/attractive place/${place._id}`"
    max-width="221"
    max-height="300"
  >
    <v-lazy transition="fade-transition">
      <v-img
        aspect-ratio="1"
        :src="currentImage"
        gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
        class="banner white--text ma-0"
        style="transition: 2 ease-in-out swiper-lazy"
      >
        <v-card-actions
          style="height: 100%"
          class="justify-center align-center"
        >
          <div class="ma-0 text-capitalize text-lg-h6">
            {{ name }}
          </div>
        </v-card-actions>
      </v-img>
    </v-lazy>
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
        this.images = place.thumbnail
        this.name = place.name

        // console.log(place.thumbnail[0])
        console.log(this.thumbnail)

        // this.currentImage = place.images[0]
        this.currentImage = place.thumbnail[0]
        // this.totalIndex = place.images.length - 1
        this.totalIndex = place.thumbnail.length - 1

        setInterval(() => {
          if (this.currentIndex == this.totalIndex) {
            this.currentIndex = -1
          }

          this.currentImage = place.thumbnail[++this.currentIndex]
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

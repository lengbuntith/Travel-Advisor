<template>
  <v-card
    class="pointer pt-md-10"
    elevation="0"
    :to="`/place/${place.name}`"
    max-width="220"
    style="background-color: #fafafa"
  >
    <v-img
      :height="`${height}`"
      aspect-ratio="1"
      :src="place.image"
      class="white--text image-slide swiper-lazy"
      :class="`mt-${parseInt(height) - margin}`"
      gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
    >
      <v-card-title class="d-flex justify-space-between" style="padding: 0">
        <div></div>
        <div>
          <v-btn icon> </v-btn>
        </div>
      </v-card-title>
      <v-card-actions class="justify-center align-center">
        <div class="ma-0 text-capitalize text-lg-h6">
          {{ place.name }}
        </div>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: ['place', 'height', 'margin'],
  data() {
    return {
      rating: 4,
    }
  },
}
</script>
<style scoped>
.image-slide:hover {
  transform: scale(1.04);
}
</style>

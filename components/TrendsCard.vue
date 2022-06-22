<template>
  <v-card
    class="pointer pt-md-10"
    elevation="0"
    v-if="city.city"
    :to="`/attractive place/${city.city._id}`"
    max-width="220"
    style="background-color: #fafafa"
  >
    <v-img
      aspect-ratio="1"
      v-if="city.city"
      :src="city.city.image"
      class="white--text image-slide swiper-lazy"
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
          {{ city.city.name }}
        </div>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: ['city'],
  data() {
    return {}
  },
}
</script>
<style scoped>
.image-slide:hover {
  transform: scale(1.04);
}
</style>

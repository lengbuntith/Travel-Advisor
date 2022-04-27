<template>
  <v-card
    class="pointer image-slide"
    elevation="0"
    :to="`/place/${place.name}`"
    max-width="300"
  >
    <v-img
      aspect-ratio="1"
      :src="place.image"
      class="white--text"
      gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
    >
      <!-- <slot name="icon"></slot> -->
      <v-card-title class="d-flex justify-space-between" style="padding: 0">
        <div></div>
        <div>
          <v-btn icon>
            <v-icon color="rgba(250,250,250,0.6)">mdi-heart</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-actions style="height: 65%" class="justify-center align-center">
        <div class="ma-0 text-capitalize text-lg-h5">
          {{ place.name }}
        </div>
        <!-- <span class="grey--text text--lighten-2 text-caption mr-2">
          ({{ rating }})
        </span>
        <v-rating
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          icon-label="custom icon label text {0} of {1}"
          size="13"
        ></v-rating> -->
      </v-card-actions>
    </v-img>
    <div
      style="height: 68px; overflow: hidden; background-color: #eee"
      class="ma-0 text-capitalize pl-1 pr-1"
    >
      <v-rating
        v-model="rating"
        background-color="black"
        color="rgba(62,179,162,1)"
        dense
        half-increments
        icon-label="custom icon label text {0} of {1}"
        size="13"
      ></v-rating>
      <div style="font-size: 10px" class="d-flex justify-space-between">
        <div>Located: Seam Reap</div>
        <div><i class="fa-light fa-comment"></i> 230 Reviews</div>
      </div>
      <hr />
      <i class="fal fa-map-marker-alt fa-sm"></i>
      <span style="font-size: 10px">113 st seam reap, Cambodia</span>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['place'],
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

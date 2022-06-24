<template>
  <div>
    <v-card
      v-show="place == ''"
      max-height="300"
      elevation="0"
      class="pointer image-slide"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        max-height="200"
        type="card"
      ></v-skeleton-loader>
    </v-card>
    <v-card
      v-show="place"
      class="pointer image-slide"
      elevation="0"
      :to="`/place/${place._id}`"
      max-width="300"
    >
      <v-img
        aspect-ratio="1"
        :src="place.thumbnail"
        class="white--text swiper-lazy"
        gradient="to top right, rgba(188,188,188,.33), rgba(0,0,0,.5)"
      >
        <v-card-actions
          style="height: 100%"
          class="justify-center align-center"
        >
          <div class="ma-0 text-capitalize text-lg-h5">
            {{ place.title }}
          </div>
        </v-card-actions>
      </v-img>
      <div
        style="height: 72px; overflow: hidden; background-color: white"
        class="ma-0 text-capitalize pl-1 pr-1"
      >
        <v-rating
          v-model="place.averageRating"
          background-color="black"
          color="rgba(62,179,162,1)"
          dense
          half-increments
          icon-label="custom icon label text {0} of {1}"
          size="13"
        ></v-rating>
        <div
          style="font-size: 10px"
          class="d-flex justify-space-between"
          v-if="place.city"
        >
          <div class="d-flex align-center" v-if="place.city">
            <span class="d-none d-lg-flex ma-0 pr-1">Located:</span>
            {{ place.city.name }}
          </div>
          <div class="d-flex align-center">
            <i class="fa-light fa-comment pr-1"></i>
            {{ place.totalComment }}
            <span class="d-none d-lg-flex pa-1">Reviews</span>
          </div>
        </div>
        <hr />
        <i class="fal fa-map-marker-alt fa-sm"></i>
        <span style="font-size: 10px" v-if="place.city">
          {{ place.city.name }} , Cambodia</span
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['place'],
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

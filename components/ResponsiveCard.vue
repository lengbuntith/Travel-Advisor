<template>
  <v-container>
    <v-row>
      <v-col
        v-for="place in allPlaces"
        :key="place._id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card class="pa-2" outlined tile :to="`place/${place._id}`">
          <template>
            <div class="mx-auto" max-width="344">
              <v-img
                gradient="to top right, rgba(0,0,0,.01), rgba(25,32,72,.7)"
                :src="place.thumbnail"
                height="200px"
              >
                <v-card-title
                  style="height: 100%; width: 100%; font-weight: 700"
                  class="d-flex justify-center align-center white--text"
                >
                  {{ place.title }}
                </v-card-title>
              </v-img>
              <v-card-subtitle align="left">
                <div class="d-flex align-center">
                  Rating:
                  <v-rating
                    v-model="place.averageRating"
                    size="14"
                    color="teal"
                    readonly
                    dense
                    class="ml-1"
                    icon-label="custom icon label text {0} of {1}"
                  ></v-rating>
                </div>
                <div>{{ place.totalComment }} reviews</div>
              </v-card-subtitle>

              <p class="text-justify px-2 line-clamp">
                {{ place.story }}
              </p>
              <nuxt-link
                style="text-decoration: none"
                :to="`/place/${place._id}`"
              >
                View detail
              </nuxt-link>
            </div>
          </template></v-card
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
export default {
  props: ['allPlaces'],
}
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

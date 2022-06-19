<template>
  <div style="height: 720px" class="scroll pb-3">
    <v-row>
      <v-card
        style="position: sticky; top: 0; z-index: 998"
        class="mx-3 mb-3 d-flex align-center"
        elevation="2"
        height="50px"
        width="100%"
        ><h3 class="pa-3 text-sm-h5">
          {{ city.name }} ({{ places.length }})
        </h3></v-card
      >
      <v-col v-for="place in places" :key="place._id" cols="12">
        <v-card elevation="0" width="100%">
          <div class="d-flex flex-no-wrap justify-start">
            <div class="d-flex flex-column">
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="place.thumbnail"></v-img>
              </v-avatar>
              <v-rating
                v-model="place.averageRating"
                length="5"
                size="14"
                color="teal"
                readonly
                dense
                background-color="yellow"
                class="ml-3"
              ></v-rating>
              <div class="ml-3" style="font-size: 14px">
                {{ place.totalComment + ' reviews' }}
              </div>
            </div>
            <div>
              <v-card-title class="text-h5" v-text="place.title"></v-card-title>

              <v-card-subtitle
                class="line-clamp text-justify pb-0"
                v-text="place.story"
              ></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  :to="`/place/${place._id}`"
                  class="ml-2 mt-4"
                  outlined
                  rounded
                  small
                >
                  see more
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['places', 'city'],
  data() {
    return {
      dialog: true,
    }
  },
}
</script>

<style scoped>
.scroll {
  overflow: hidden;
  overflow-y: auto;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

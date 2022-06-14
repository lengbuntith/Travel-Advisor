<template>
  <div style="height: 720px" class="scroll pa-1">
    <v-row>
      <v-col v-for="place in places" :key="place._id" cols="12">
        <v-card elevation="5" width="100%">
          <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="place.thumbnail"></v-img>
            </v-avatar>
            <div>
              <v-card-title class="text-h5" v-text="place.title"></v-card-title>

              <v-card-subtitle v-text="place.story"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  :to="`/place/${place._id}`"
                  class="ml-2 mt-5"
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
  props: ['places'],
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
</style>

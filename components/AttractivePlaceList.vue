<template>
  <div style="height: 720px" class="scroll pa-1">
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card elevation="5" width="100%" :color="item.color">
          <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
            <div>
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn class="ml-2 mt-5" outlined rounded small>
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
  data: () => ({
    dialog: true,
    items: [
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: 'white',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
    ],
  }),
}
</script>

<style scoped>
.scroll {
  overflow: hidden;
  overflow-y: auto;
}
</style>

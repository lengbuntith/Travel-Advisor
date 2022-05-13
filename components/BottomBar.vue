<template>
  <div class="d-none d-md-block">
    <v-toolbar height="36px" elevation="0" color="#eee">
      <v-container>
        <v-tabs v-model="tab" class="ma-0" height="35" background-color="#eee">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab
            to="/"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            home
          </v-tab>
          <v-tab
            to="/suggestion"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            suggestion
          </v-tab>
          <v-tab
            to="/event"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            event
          </v-tab>
        </v-tabs>
        <!-- <nuxt-link
          to="/suggestion"
          class="text-uppercase mr-5 text-decoration-none font-weight-bold"
          >suggestion</nuxt-link
        >
        <nuxt-link
          to="/events"
          class="text-uppercase mr-5 text-decoration-none font-weight-bold"
          >events</nuxt-link
        > -->
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['suggestion', 'event'],
    }
  },
}
</script>

<style></style>

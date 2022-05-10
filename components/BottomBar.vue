<template>
  <div class="d-none d-md-block">
    <v-toolbar height="36px" elevation="0" color="#eee">
      <v-container class="px-5">
        <nuxt-link
          to="/suggestion"
          class="text-uppercase mr-5 text-decoration-none font-weight-bold"
          >suggestion</nuxt-link
        >
        <nuxt-link
          to="/events"
          class="text-uppercase mr-5 text-decoration-none font-weight-bold"
          >events</nuxt-link
        >
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>

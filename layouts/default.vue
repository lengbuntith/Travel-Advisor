<template>
  <v-app>
    <div style="position: sticky; top: 0; z-index: 999">
      <TopBar />
      <BottomBar />
    </div>
    <v-main>
<<<<<<< HEAD
      <v-container class="px-5">
        <ScrolltoTop />
        <Nuxt />
      </v-container>
=======
      <Nuxt />
>>>>>>> 01e94a54fa54bfa1d5b40d1101a25bdab3b9acbd
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/components/VStepper/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  #app {
    font-size: 12px;
  }
  h2 {
    font-size: 14px;
  }
  a {
    font-size: 12px;
  }
}
</style>

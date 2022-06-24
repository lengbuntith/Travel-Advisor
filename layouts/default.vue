<template>
  <v-app>
    <div style="position: sticky; top: 0; z-index: 999">
      <TopBar />
      <BottomBar />
    </div>
    <v-main>
      <ScrolltoTop style="position: sticky; top: 0; z-index: 999" />
      <Nuxt />
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
html {
  scroll-behavior: smooth !important;
}
@import '~vuetify/src/components/VStepper/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  background-color: #fafafa;
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
.nuxt-progress {
  background-color: rgba(64, 172, 87);
}
</style>

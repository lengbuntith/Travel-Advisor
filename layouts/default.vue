<template>
  <v-app>
    <div style="position: sticky; top: 0; z-index: 999">
      <TopBar />
      <BottomBar />
      <v-progress-linear
        height="5"
        v-show="show"
        :value="percent"
        background-color="#aaa"
        color="yellow darken-2"
      ></v-progress-linear>
    </div>
    <v-main>
      <ScrolltoTop />
      <Nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      percent: 0,
      show: false,
    }
  },
  //render width
  // mounted() {
  //   window.addEventListener('scroll', () => {
  //     let clientHeight = scrollY
  //     if (clientHeight == 0) {
  //       this.show = false
  //     } else {
  // console.log(
  //   clientHeight,
  //   document.body.offsetHeight - window.innerHeight
  // )
  //   this.show = true
  //   this.percent =
  //     (clientHeight * 100) /
  //     (document.body.offsetHeight - window.innerHeight)
  // }
  // console.log(this.percent)
  //   })
  // },

  // beforeDestroy() {
  //   window.removeEventListener('scroll')
  // },
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
</style>

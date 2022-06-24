<template>
  <div class="d-none d-md-block" v-if="show">
    <v-toolbar height="36px" elevation="0" color="#eee" class="drop">
      <v-container>
        <v-tabs class="ma-0" height="35" background-color="#eee">
          <v-tabs-slider class="mt-1" color="#fafafa"></v-tabs-slider>
          <v-tab
            to="/"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            home
          </v-tab>
          <v-tab
            to="/suggestion?page=1&sort=-1"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            suggestion
          </v-tab>
          <v-tab
            to="/event?page=1&sort=-1"
            class="text-uppercase text-decoration-none font-weight-bold"
          >
            event
          </v-tab>
        </v-tabs>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      items: ['suggestion', 'event'],
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let clientHeight = scrollY
      if (clientHeight == 0) {
        this.show = true
      } else {
        this.show = false
      }
      // console.log('client', clientHeight)
    })
  },
}
</script>

<style lang="scss" scoped>
.v-tab:hover:not(.v-tab--active) {
  border-top: 4px solid rgba(251, 193, 46, 0.4) !important;
  background-color: rgba(64, 179, 162, 0.2) !important;
}
.v-tab--active {
  transition: 0.1s ease-in-out;
  border-top: 2px solid #fbc02d !important;
  background-color: rgba(64, 179, 162) !important;
  border-left: 2px solid rgba(251, 193, 46, 1) !important;
  color: white !important;
}
.drop {
  animation: drop 0.4s forwards;
}

@keyframes drop {
  0% {
    transform-origin: center;
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

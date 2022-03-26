<template>
  <v-card flat tile elevation="1">
    <v-toolbar class="align-center" height="60px" flat dense>
      <v-container class="navbar py-0 fill-height" style="width: 100%">
        <span
          class="font-weight-bold d-md-none pr-4"
          style="cursor: pointer"
          @click.stop="drawer = !drawer"
        >
          <v-icon color="white">mdi-menu</v-icon>
        </span>

        <nuxt-link to="/">
          <div style="width: 45px; height: 45px">
            <img
              class="rounded-circle"
              width="100%"
              height="100%"
              src="logo.png"
              alt=""
            />
          </div>
        </nuxt-link>
        <nuxt-link
          style="font-size: 20px"
          to="/"
          class="d-none d-sm-block font-weight-bold text-decoration-none px-4"
          >Cambo Travel</nuxt-link
        >
        <v-spacer></v-spacer>
        <TheLanguage />
        <v-btn
          color="orange"
          elevation="0"
          class="text-uppercase white--text font-weight-bold mr-2"
          to="/login"
          >login</v-btn
        >
        <v-btn
          color="red"
          elevation="0"
          class="text-uppercase white--text font-weight-bold"
          to="/register"
          >register</v-btn
        >
      </v-container>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style lang="scss" scope>
@import '~vuetify/src/components/VStepper/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@media (min-width: 960px) {
  .navbar {
    padding-left: 20px !important;
  }
}

@media (max-width: 959px) {
  .navbar {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

.navicon .v-btn__content {
  justify-content: left !important;
}

@media (min-width: 768px) {
  .navbar {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>

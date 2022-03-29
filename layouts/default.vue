<template>
  <v-app>
    <TopBar />
    <!-- <BottomBar /> -->
    <v-main>
      <v-container class="px-5">
        <Nuxt />
      </v-container>
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
//font awesome https://fontawesome.com/v6/search
@import url('https://kit-pro.fontawesome.com/releases/v6.1.1/css/pro.min.css');
#app {
  font-family: 'Montserrat', sans-serif;
}
.v-application--wrap {
  min-height: auto;
}
.v-application .px-5 {
  margin: 0;
}

//input search
.theme--light.v-text-field--solo-inverted.v-input--is-focused
  > .v-input__control
  > .v-input__slot
  input {
  color: grey;
}
//height search
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 38px;
  padding: 0;
}

//background search
.theme--light.v-text-field--solo-inverted.v-input--is-focused
  > .v-input__control
  > .v-input__slot {
  background: rgba(0, 0, 0, 0.06);
}
//search icon
.mdi:before,
.mdi-set {
  color: rgba(64, 179, 162);
}
//component
.container {
  max-width: 100vw;
}
</style>

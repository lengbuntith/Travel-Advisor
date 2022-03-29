<template>
  <div>
    <v-card tile flat>
      <v-toolbar class="align-center" height="60px" flat dense elevation="1">
        <v-container class="navbar py-0 fill-height" style="width: 100%">
          <span
            class="font-weight-bold d-md-none pr-4"
            style="cursor: pointer"
            @click.stop="drawer = !drawer"
          >
            <v-icon color="white">mdi-menu</v-icon>
          </span>

<<<<<<< Updated upstream
        <nuxt-link to="/">
          <div style="width: 45px; height: 45px">
            <img
              width="100%"
              height="100%"
              src="logoTravel.png"
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
=======
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
          <v-autocomplete
            prepend-inner-icon="mdi-magnify"
            append-icon=""
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="Which places are you want to visit?"
            solo-inverted
            clearable
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <TheLanguage />
          <a href="/login" style="text-decoration: none; font-weight: 900">
            <div style="margin-right: 20px">
              <i
                class="fa-solid fa-circle-user fa-lg"
                style="color: #40b3a2"
              ></i>
              LOGIN
            </div></a
          >
          <v-btn
            color="#40b3a2"
            elevation="0"
            class="text-uppercase white--text font-weight-bold"
            to="/register"
            >register</v-btn
          >
        </v-container>
      </v-toolbar>
    </v-card>
    <div class="nav-down">
      <ul>
        <li><a href="#1">SUGGESTIONS</a></li>
        <li><a href="#2">EVENTS</a></li>
      </ul>
    </div>
  </div>
>>>>>>> Stashed changes
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
      ],
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/components/VStepper/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.v-application a {
  color: rgba(64, 179, 162);
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 38px;
  padding: 0;
}

.mdi-magnify::before {
  content: '\F0349';
  padding: 0.7vw;
}
label {
  cursor: default;
  margin-left: 10px;
}

.nav-down {
  height: 37px;
  display: flex;
  align-items: center;
  background-color: #eeeeee;
}
ul {
  list-style-type: none;
  display: flex;
}
ul li > a {
  text-decoration: none;
  padding: 0.4vw 1vw;
  font-weight: 600;
}

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

//responsive
@media (min-width: 768px) {
  .navbar {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>

<template>
  <div>
    <v-card tile flat class="d-flex">
      <v-toolbar
        class="align-center"
        height="60px"
        flat
        dense
        elevation="1"
        color="tranparent"
      >
        <div
          style="width: 100vw"
          class="d-flex justify-space-between align-center d-md-none"
        >
          <div class="d-flex justify-center align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Cambo Travel</v-toolbar-title>
          </div>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="rgba(64, 179, 162)" v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <template v-slot:extension>
              <v-tabs align-with-title>
                <v-tab>Tab 1</v-tab>
                <v-tab>Tab 2</v-tab>
                <v-tab>Tab 3</v-tab>
              </v-tabs>
            </template>
          </v-btn>
        </div>

        <v-container
          class="navbar py-0 fill-height d-none d-md-flex"
          style="width: 100%"
        >
          <span
            class="font-weight-bold d-md-none pr-4"
            style="cursor: pointer"
            @click.stop="drawer = !drawer"
          >
            <v-icon color="white">mdi-menu</v-icon>
          </span>

          <nuxt-link to="/">
            <div style="width: 34px">
              <img
                width="100%"
                height="100%"
                src="/images/logoTravel.png"
                alt=""
              />
            </div>
          </nuxt-link>
          <nuxt-link
            style="font-size: 20px"
            to="/"
            class="d-none d-sm-block font-weight-bold text-decoration-none px-4"
            >CAMBO TRAVEL</nuxt-link
          >
          <v-autocomplete
            prepend-inner-icon="mdi-magnify"
            append-icon=""
            v-model="select"
            :loading="loading"
            :item-text="'title'"
            :items="places"
            :search-input.sync="search"
            @change="placeData"
            cache-items
            return-object
            class="mx-4 search"
            flat
            hide-details
            label="Which places do you want to visit?"
            solo-inverted
            clearable
            dense
            no-data-text="No data"
            color="teal lighten-2"
            solo
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <!-- <TheLanguage /> -->

          <!-- user loggedIn -->
          <nuxt-link
            to="/account"
            style="text-decoration: none; font-weight: 900"
            v-if="$auth.loggedIn"
          >
            <div style="margin-right: 20px">
              <v-avatar class="mr-1" v-if="$auth.user.data.imageUrl" size="35">
                <v-img :src="$auth.user.data.imageUrl"></v-img>
              </v-avatar>
              <v-icon v-else size="30" color="primary"
                >mdi-account-circle</v-icon
              >
              My Account
            </div>
          </nuxt-link>
          <!-- end user loggedIn -->

          <!-- Guest -->
          <div v-else class="d-flex align-center">
            <nuxt-link
              to="/login"
              style="text-decoration: none; font-weight: 900"
            >
              <div style="margin-right: 20px">
                <i
                  class="fa-solid fa-circle-user fa-lg"
                  style="color: #40b3a2"
                ></i>
                LOGIN
              </div>
            </nuxt-link>

            <v-btn
              color="#40b3a2"
              elevation="0"
              class="text-uppercase white--text font-weight-bold"
              to="/register"
              >register</v-btn
            >
          </div>
          <!-- end Guest -->
        </v-container>
      </v-toolbar>
    </v-card>

    <!-- mobile navigation drawer -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/images/logoTravel.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>CAMBO TRAVEL</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: false,
      drawer: false,
      loading: false,
      search: null,
      select: null,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      places: [],
    }
  },
  methods: {
    //get place_id from user input
    placeData(place_id) {
      if (place_id) this.$router.push(`/place/${place_id._id}`)
    },

    navBar() {
      alert('test')
    },
  },
  created() {
    //get places data
    this.$axios.get('/place/all?item_per_page=200').then((res) => {
      this.places = res.data.data.docs
    })
  },
}
</script>
<style>
.search .v-input__slot {
  background-color: rgba(50, 51, 50, 0.1) !important;
}
.search #input-23 {
  color: black !important;
}
</style>

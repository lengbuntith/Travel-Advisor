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
            dense
            no-data-text=""
            color="teal lighten-2"
            solo
          ></v-autocomplete>
          <v-spacer></v-spacer>
          <TheLanguage />
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
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
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
    navBar() {
      alert('test')
    },
  },
}
</script>

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
  </div>
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

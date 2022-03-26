<template>
  <v-menu
    transition="expand-transition"
    tile
    open-on-hover
    bottom
    offset-y
    min-width="100%"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
        class="text-uppercase menu-item pr-8 white--text font-weight-medium"
        >{{ name }}
      </v-btn>
    </template>

    <v-sheet height="180">
      <v-container class="px-5 align-center">
        <div class="d-flex justify-center flex-wrap">
          <div v-for="(s, i) in sub" :key="i">
            <img height="100" :src="s.image" :alt="s.name" />
            <div class="text-center"> {{ s.name }} </div>
          </div>
        </div>
      </v-container>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    sub: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
span.menu-item {
  cursor: pointer;
}
span.menu-item:hover {
  color: orangered !important;
  font-weight: bold !important;
}
</style>

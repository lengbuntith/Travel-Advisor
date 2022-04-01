<template>
  <div>
    <v-row 
    class="mt-16"
    :class=" show ? 'd-flex' : 'd-none'"
    >
      <v-col cols="6" sm="4" md="3" lg="2" v-for="i in 5" :key="i">
        <v-card color="primary" height="200" elevation="0" outlined tile>
          {{ i }}
        </v-card>
      </v-col>
    </v-row>

    <v-btn @click="handler">hide/show</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },

  methods: {
    handler() {
      this.show = !this.show
    },
  },
}
</script>

<style scoped></style>

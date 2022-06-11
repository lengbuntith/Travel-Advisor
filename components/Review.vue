<template>
  <div class ="mt-6">
    <h3>Review</h3>
    <div class="d-flex flex-row" v-for="rate in ratings" :key="rate._id">
      <div style="width: 100px">{{ rate.title }}</div>
      <v-sheet width="40%" class="d-flex flex-row align-center">
        <v-progress-linear height="15" :value="rate.value"></v-progress-linear>
        <div class="ml-1" style="width: 30px">{{ rate.count }}</div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: [
        {
          _id: 1,
          title: 'Exellent',
          value: 70,
          count: 108,
        },
        {
          _id: 2,
          title: 'Very Good',
          value: 30,
          count: 48,
        },
        {
          _id: 3,
          title: 'Average',
          value: 15,
          count: 29,
        },
        {
          _id: 4,
          title: 'Poor',
          value: 5,
          count: 18,
        },
        {
          _id: 5,
          title: 'Terible',
          value: 1,
          count: 6,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

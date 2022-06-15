<template>
  <div class="mt-6">
    <h3>Review</h3>
    <div class="d-flex flex-row" v-for="rate in ratings" :key="rate._id">
      <div style="width: 100px">{{ rate.title }}</div>
      <v-sheet
        width="40%"
        class="d-flex flex-row align-center"
        style="background-color: #fafafa"
      >
        <v-progress-linear height="15" :value="rate.value"></v-progress-linear>
        <div class="ml-1" style="width: 30px">{{ rate.count }}</div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ratings'],
}
</script>

<style lang="scss" scoped></style>

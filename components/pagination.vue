<template>
  <div class="text-center">
  <h1 class="card-header">Find The Perfect Place</h1>
  <h2 class="card-header">A list of the top 75 Best Tourist Places to See in Cambodia for a perfect holiday or a trip!</h2>

  <div class="card-body">
  <ResponsiveCard />
  </div>
  
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
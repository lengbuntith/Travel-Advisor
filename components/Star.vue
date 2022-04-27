<template>
  <v-rating
    v-model="rating"
    color="yellow darken-3"
    background-color="grey darken-1"
    empty-icon="$ratingFull"
    half-increments
    hover
    large
  ></v-rating>
</template>

<script>
export default {
  data: () => ({
    rating: 4.5,
  }),
}
</script>

<style lang="scss" scoped></style>

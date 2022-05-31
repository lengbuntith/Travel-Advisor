<template>
  <BaseLayout>
    <AttractivePlaceCover />
    <v-row class="mt-5">
      <v-col cols="12" md="6">
        <AttractivePlaceList />
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined tile>
          <AttractivePlaceLocation />
        </v-card>
      </v-col>
    </v-row>
  </BaseLayout>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

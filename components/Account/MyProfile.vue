<template>
  <v-card flat class="pa-3 pl-12">
    <v-form>
      <div class="d-flex justify-center">
        <v-avatar size="100">
          <img src="/images/logoTravel.png" alt="" />
        </v-avatar>
      </div>

      <v-text-field value="lengbuntith" label="Name"></v-text-field>
      <v-text-field
        value="lengbuntith@gmail.com"
        readonly
        disabled
        label="Email"
      ></v-text-field>
      <v-text-field value="012345678" label="Phone"></v-text-field>
      <v-btn elevation="0" color="primary" type="submit">update profile</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

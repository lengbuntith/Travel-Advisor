<template>
  <div>
    <h2 style="color: #40b3a2" class="mt-4 d-flex justify-center">
      Our team members
    </h2>
    <div class="d-flex flex-wrap">
      <v-card
        width="23.5%"
        class="d-flex flex-row pa-4 ma-2"
        v-for="i in 8"
        :key="i"
      >
        <img
          src="/images/profile.png"
          style="
            height: 100px;
            width: 100px;
            border-radius: 100px;
            border: 2px solid black;
          "
        />
        <div class="ml-4">
          <h5>LY CHANTHORN</h5>
          <div></div>
          <p style="font-size: 12px">I am year 4 student at ITC.</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

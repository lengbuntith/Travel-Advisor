<template>
  <div>
    <h2 style="color: #40b3a2" class="mt-4 d-flex justify-center">
      Our team members
    </h2>
    <v-row class="mt-3">
      <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="i in 8" :key="i">
        <v-card class="d-flex flex-row pa-4">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

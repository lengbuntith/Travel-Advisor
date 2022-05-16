<template>
  <div>
    <h2 style="color: #40b3a2" class="mt-4 mt-md-1 d-flex justify-center">
      Our team members
    </h2>
    <v-row class="mt-3">
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        v-for="member in members"
        :key="member._id"
      >
        <v-card class="d-flex flex-row pa-1 pa-md-2 pa-lg-4">
          <v-avatar size="60" color="rgba(0,0,0,.05)">
            <img src="/images/profile.png" alt="John" />
          </v-avatar>
          <div class="ml-1 ml-md-4 d-flex flex-column justify-center">
            <h5>{{ member.name }}</h5>
            <div></div>
            <p style="font-size: 12px">I am year 4 student at ITC.</p>
            <p style="font-size: 12px">{{ member.role }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          _id: 1,
          profile: '',
          name: 'PHAL SreyKhouch',
          role: 'Front-end',
        },
        {
          _id: 2,
          profile: '',
          name: 'KONG Sopheap',
          role: 'Front-end',
        },
        {
          _id: 3,
          profile: '',
          name: 'LY Chanthorn',
          role: 'Front-end',
        },
        {
          _id: 4,
          profile: '',
          name: 'LENG Butith',
          role: 'Front-end & Back-end',
        },
        {
          _id: 5,
          profile: '',
          name: 'OURN Dalin',
          role: 'Front-end & Report',
        },
        {
          _id: 6,
          profile: '',

          name: 'KHENG Piseth',
          role: 'Front-end',
        },
        {
          _id: 7,
          profile: '',
          name: 'KOENG Gana',
          role: 'Front-end',
        },
        {
          _id: 8,
          profile: '',
          name: 'KHEONG Sokkhai',
          role: 'Front-end & Back-end',
        },
      ],
    }
  },
}
</script>

<style scoped>
@media (max-width: 600px) {
  img {
    height: 50px !important;
    width: 50px !important;
    border-radius: 50px !important;
  }
}
</style>

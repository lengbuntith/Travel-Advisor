<template>
  <div class="my-5">
    <v-card>
      <v-img height="250" src="https://th.bing.com/th/id/R.45224f6f931601ae4d1e6fa5b08e0992?rik=yAxwJei7QNav9Q&riu=http%3a%2f%2fwww.trendycovers.com%2fcovers%2fevery_dark_night_facebook_cover_1463994849.jpg&ehk=ZqcRBEzkvoXtJLboClIcuC7CNL4%2fY9F%2frbzFfd4Qejo%3d&risl=&pid=ImgRaw&r=0"></v-img>
      <div class="pa-2 ">
        <h4>{{ member.name }}</h4>
        <h6 style="color: rgba(0,0,0,.5">{{ member.role }}</h6>

        <div class="mt-2" style="font-size: 12px">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['member'],
}
</script>

<style lang="scss" scoped></style>

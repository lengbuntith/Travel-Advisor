<template>
  <div>
      <v-tabs v-model="tabs" align-with-title>
      <v-tab href="#all"> All </v-tab>
      <v-tab href="#newest"> Newest </v-tab>
      <v-tab href="#popular"> Popular </v-tab>
      <v-tabs-slider color="DarkCyan"></v-tabs-slider>
    </v-tabs>

    <v-row class="mt-10">
      <v-col
        v-for="event in events"
        :key="event._id"
        height="300"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card outlined>
          <div>
            <div>
              <div>
                <div class="mb-2 ml-3 d-flex flex-row">
                  <v-avatar>
                    <v-img :src="event.profile"> </v-img>
                  </v-avatar>
                  <div style="font-weight: 700" class="ml-2 pt-3">
                    {{ event.name }}
                  </div>
                </div>
                <div class="d-flex justify-center ma-2"  >
                  <v-img style="border-radius: 5px" height="250" :src="event.image"></v-img>
                </div>
              </div>
              <v-card-text>
                <div class="line-clamp">
                  {{ event.news }}
                </div>
              </v-card-text>
            </div>
          </div>
          <div class="d-flex justify-center mb-3">
            <v-btn color="success" style="border-radius: 4px"> Join </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-7">
    <v-pagination
      v-model="page"
      :length="10"
      :total-visible="5"
    ></v-pagination>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        page:1,
      events: [
        {
          _id: 1,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Lamo',
          image:
            'https://s9.kh1.co/32/32ec2412b401c8d64c42ca01d46869e0499a441c.gif',
          news: 'I have a plan to camping at Knong Psar/ខ្នងផ្សារ for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
        {
          _id: 2,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Sovann',
          image:
            'https://www.cambodia-images.com/wp-content/uploads/2016/08/bokor_pagoda_pano_01-1024x683.jpg',
          news: 'I have a plan to camping at Kompot Boukou for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
        {
          _id: 3,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Panha',
          image:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/98/e2/d9/a-morning-view-of-the.jpg?w=900&h=-1&s=1',
          news: 'I have a plan to camping at Koh Kong for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
        {
          _id: 4,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Yuthna',
          image:
            'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/b6/ea.jpg',
          news: 'I have a plan to trip at Angkor wat for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
        {
          _id: 5,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Vichka',
          image:
            'https://www.rainforest-rescue.org/photos/article/facebook/fb/en/blue-lagoon-on-beach.jpg',
          news: 'I have a plan to camping at Koh kong Krav for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
        {
          _id: 6,
          profile: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Pengchhin',
          image:
            'https://avythetravelbug.files.wordpress.com/2018/10/dji_0103.jpg?w=1024',
          news: 'I have a plan to camping at Mondulkiri for 2 nights and a day on 23rd July 2022. Who are interested, you can join with me.',
        },
      ],
    }
  },
}
</script>

<style>
.line-camp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

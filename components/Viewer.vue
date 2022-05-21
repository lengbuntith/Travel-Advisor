<template>
<div class="mt-5">
  <v-row>
    <v-col cols="12" sm="13" md="3">
      <h3>Trips & Reviews</h3>
    </v-col>
    <v-col cols="12" sm="12" md="9">
      <v-card elevation="1">
        <v-card
          elevation="0"
          v-for="suggestion in suggestions"
          :key="suggestion._id"
          class="pa-5"
        >
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-avatar>
                <v-img :src="suggestion.profile"> </v-img>
              </v-avatar>
              <div>
                <div style="font-weight: 700" class="ml-3">
                  {{ suggestion.name }}
                </div>
                <div
                  class="d-flex space-between align-right"
                  style="color: rgba(0, 0, 0, 0.5); font-size: 14px"
                >
                  {{ suggestion.date }}
                </div>
              </div>
            </div>
            <div>
              <v-btn icon>
                <v-icon>mdi-thumb-up-outline</v-icon>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="rgba(64, 179, 162)"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <template v-slot:extension>
                  <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                  </v-tabs>
                </template>
              </v-btn>
            </div>
          </div>

          <div class="line-clamp mt-5 mb-3 text-justify">
            {{ suggestion.des }}
          </div>
          <hr />
        </v-card>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      page: 1,
      suggestions: [
        {
          _id: 1,
          des: ' Really Natural, and also the people there very friendly and the food Reasonable Price and the boat has fixed price. I loved it.',
          // profile: "../assets/pictures/pf1.png"
          profile:
            'https://www.pikpng.com/pngl/m/297-2978816_taehyung-transparent-circle-icons-jimin-png-taehyung-cute.png',
          name: 'Dalin',
          date: '29,Jan,2022',
        },

        {
          _id: 2,
          des: ' Beautiful and quiet place, but a bit dirty, which is so sad. Take a tourguide or a tuktuk driver to accompagny you',
          profile:
            'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg',
          name: 'Ari',
          date: '25,Feb,2022',
        },
        {
          _id: 3,
          des: ' Amazing place. Really natural, and also the people there very friendly and the food reasonable price and the boat has fixed price. ',
          name: 'Yana',
          date: '15,May,2022',
          profile:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXeLUu4iWlLdbXKgabEORQUq2v_w6mI_z5A&usqp=CAU',
        },
        {
          _id: 4,
          des: ' It was an amazing experience there. That place is good for people who loves nature and quiet . The rocks are a little bit slimy. You better wearing socks if you wanna swim.What i dont like about it is the garbage. It seems like Khmer people are less educated about the garbage They just throw it where ever they want to.',
          name: 'Dimple',
          date: '29,July,2022',
          profile:
            'https://www.pikpng.com/pngl/b/355-3555383_circle-profile-picture-clipart.png',
        },
        {
          _id: 5,
          des: ' It’s about a 20 minute boat ride fromthe NH48 bridge . I am afraid in January the falls are not at their best . Its fun to clamber around the rocks ...be careful ..and the swim above the falls in clear water is good . The water below the falls was smelly on the day we were there so did not swim below . Unfortunately in-spite of public notices about litter visitors here leave mountains of plastic bottles and other unmentionables strewn around which makes for a wasted journey . Its such a shame that thoughtless tourists spoilt it for everyone else .',
          name: 'Bormey',
          date: '18,Sep,2022',
          profile:
            'https://images.zapnito.com/cdn-cgi/image/metadata=copyright,fit=scale-down,format=auto,sharpen=1,quality=95/https://images.zapnito.com/users/557779/avatar/medium_I68rzl51SRu135F1WwKi_IMG_4370.JPG.png',
        },
        {
          _id: 6,
          des: ' Located in Ream National Park on the eastern edge of Sihanoukville, Koh Ta Kiev is just a stone’s throw from the mainland. ',
          name: 'Sithov',
          date: '19,Oct,2022',
          profile:
            'https://www.pinpng.com/pngs/m/629-6297014_purple-aesthetic-icon-city-lights-profile-pic-aesthetic.png',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}</style>


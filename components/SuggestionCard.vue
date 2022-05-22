<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template>

        <v-card class="pa-2 pa-md-4">
          <form @submit.prevent="submit">
            <v-text-field
              v-model="input.title"
              label="title"
              required
            ></v-text-field>
            <v-text-field
              v-model="input.title"
              label="title"
              required
            ></v-text-field>
            <v-text-field
              v-model="input.title"
              label="title"
              required
            ></v-text-field>
            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </v-card>
      </v-dialog>
    </div>
    <v-tabs v-model="tabs" class="d-flex justify-center align-center">
      <v-tab href="#all"> All </v-tab>
      <v-tab href="#newest"> Newest </v-tab>
      <v-tab href="#popular"> Popular </v-tab>
      <v-tabs-slider color="yellow"></v-tabs-slider>
    </v-tabs>

    <v-row class="mt-2">
      <v-col
        v-for="suggestion in suggestions"
        :key="suggestion._id"
        height="300"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card outlined height="550">
          <div class="d-flex justify-center pa-2">
            <div>
              <v-lazy transition="fade-transition">
                <v-img
                  gradient="to top right, rgba(0,0,0,.01), rgba(25,32,72,.7)"
                  class="white--text align-end"
                  width="320"
                  height="250"
                  :src="suggestion.image"
                >
                  <div
                    class="d-flex justify-center align-center"
                    style="height: 250px; font-size: 20px; font-weight: 700"
                  >
                    {{ suggestion.title }}
                  </div>
                </v-img>
              </v-lazy>
              <!-- <v-card-title class="d-flex justify-center">{{
                suggestion.title
              }}</v-card-title> -->
              <hr />
              <div class="mt-2 d-flex justify-center align-center">
                <v-avatar>
                  <v-img :src="suggestion.profile"> </v-img>
                </v-avatar>

                <div style="font-weight: 700" class="ml-2">
                  {{ suggestion.name }}
                </div>
              </div>
            </div>
          </div>

          <v-card-text>
            <div class="line-clamp">{{ suggestion.des }}</div>
          </v-card-text>
          <div class="ml-4">
            <v-icon class="mr-1"> mdi-thumb-up-outline </v-icon>
            <span class="subheading mr-1">{{ suggestion.like }}K</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-comment-processing </v-icon>
            <span class="subheading">{{ suggestion.comment }}K</span>
          </div>
          <YourIdea />
        </v-card>
      </v-col>
    </v-row>

    <!-- <div class="text-center">
      <v-pagination v-model="page" :length="4" circle></v-pagination>
    </div> -->

    <div @click="pageNum" class="text-center pt-2 pt-md-4">
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          :length="10"
          :total-visible="7"
        ></v-pagination>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invalid: true,
      input: [
        {
          title: '',
          message: '',
          image: '',
        },
      ],
      dialog: false,
      tabs: 'newest',
      page: 1,
      suggestions: [
        {
          _id: 1,
          image:
            'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Thom',
          des: ' Angkor Thom is home to some of the most popular temples and nearly all tours will incorporate parts of the great city.The Angkor Wat Small Circuit Tour will take you to Bayon, the Terrace of the Elephants, the Leper King Terrace, and many others...',
          // profile: "../assets/pictures/pf1.png"
          profile:
            'https://www.pikpng.com/pngl/m/297-2978816_taehyung-transparent-circle-icons-jimin-png-taehyung-cute.png',
          name: 'Vitou',
          like: 100,
          comment: 20,
        },

        {
          _id: 2,
          image:
            'https://miro.medium.com/max/1170/1*BZoLp2qFmu80KzncTFMnpQ.jpeg',
          title: 'Floating Village',
          des: ' I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
          profile:
            'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg',
          name: 'Tevy',
          like: 110,
          comment: 10,
        },
        {
          _id: 3,
          image: 'https://ndm-travel.com/images/thumbnails/49448.png',
          title: 'Tatai',
          des: ' Amazing place. Really natural, and also the people there very friendly and the food reasonable price and the boat has fixed price. Best recomment! ',
          name: 'Daro',
          profile:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXeLUu4iWlLdbXKgabEORQUq2v_w6mI_z5A&usqp=CAU',
          like: 10,
          comment: 2,
        },
        {
          _id: 4,
          image:
            'https://a0.muscache.com/im/pictures/69b16064-12b5-4763-b899-b52d55a452e7.jpg?im_w=720',
          title: 'Koh Kong',
          des: ' The island has many hills and is rich in natural scenery. There are waterfalls and you will stand mesmerized before the cascading waters of the fall from the height of 25 m.',
          name: 'Neary',
          profile:
            'https://www.pikpng.com/pngl/b/355-3555383_circle-profile-picture-clipart.png',
          like: 290,
          comment: 82,
        },
        {
          _id: 5,
          image:
            'https://s9.kh1.co/32/32ec2412b401c8d64c42ca01d46869e0499a441c.gif',
          title: 'Knong Psar',
          des: " If you're a camping lover, Knong Psar is where we highly recommend you to explore in cambodia. The nature in there will let you to find something new.",
          name: 'Yuthna',
          profile:
            'https://images.zapnito.com/cdn-cgi/image/metadata=copyright,fit=scale-down,format=auto,sharpen=1,quality=95/https://images.zapnito.com/users/557779/avatar/medium_I68rzl51SRu135F1WwKi_IMG_4370.JPG.png',
          like: 32,
          comment: 20,
        },
        {
          _id: 6,
          image:
            'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/05/2c4j3en-e1625485939998.jpg',
          title: 'Koh Ta Kiev',
          des: ' Located in Ream National Park on the eastern edge of Sihanoukville, Koh Ta Kiev is just a stone’s throw from the mainland. Best recomment! ',
          name: 'Khemrith',
          profile:
            'https://www.pinpng.com/pngs/m/629-6297014_purple-aesthetic-icon-city-lights-profile-pic-aesthetic.png',
          like: 10,
          comment: 5,
        },
      ],
      hasSaved: false,
      model: null,
    }
  },
  methods: {
    pageNum() {
      alert(this.page)
    },
    clear() {
      this.input = ''
    },
  },

  created() {
    this.$axios.get('/item/all').then((res) => {
      console.log(res)
    })
  },

  // // data () {
  //   return {
  //     page: 1
  //   }
  // // }
  // page: 1
}
</script>

<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

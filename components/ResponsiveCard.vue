<template>
  <v-container>
    <v-row>
      <v-col v-for="product in allProducts" :key="product._id" cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="pa-2" outlined tile>
          <template>
            <v-card class="mx-auto" max-width="344">
              <v-img :src="product.src" height="200px"></v-img>

              <v-card-title> {{ product.title }} </v-card-title>

              <v-card-subtitle align="left" class="d-flex align-center">
                Rating:
                <v-rating
                  v-model="rating"
                  size="15"
                  readonly
                  half-increments
                  icon-label="custom icon label text {0} of {1}"
                ></v-rating>
              </v-card-subtitle>

              <p class="text-justify pa-2 line-clamp">
                {{ product.desc }}
              </p>
              <nuxt-link to="/">
              View detail
              </nuxt-link>
            </v-card>
          </template></v-card
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 3.5,
      allProducts: [
        {
          _id: 1,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 2,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 3,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 4,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 5,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 6,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 7,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
        {
          _id: 8,
          src: 'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Angkor Wat',
          desc: 'I admire people who live in Floating Villages, travel to floating schools, and eat at Floating restaurants. It is very attractive for many visitors to Cambodia.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
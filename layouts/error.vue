<template>
  <!-- <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app> -->
  <div class="frem">
    <p>404</p>
    <h2>Look like you're lost</h2>
    <h5>the page you are looking for not available</h5>
    <nuxt-link to="/">Go to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  // props: {
  //   error: {
  //     type: Object,
  //     default: null,
  //   },
  // },
  // data() {
  //   return {
  //     pageNotFound: '404 Not Found',
  //     otherError: 'An error occurred',
  //   }
  // },

  // head() {
  //   const title =
  //     this.error.statusCode === 404 ? this.pageNotFound : this.otherError
  //   return {
  //     title,
  //   }
  // },
}
</script>

<style scoped>
/* h1 {
  font-size: 20px;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.frem {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(/images/gif.gif);
  background-position: center;
  background-repeat: no-repeat;
}

.frem p {
  position: absolute;
  top: 3rem;
  font-size: 7rem;
  color: #00000063;
}

.frem h2 {
  position: absolute;
  bottom: 8rem;
  font-size: 34px;
}

.frem h5 {
  position: absolute;
  bottom: 6rem;
  color: #9c9c9c;
}

.frem a {
  position: absolute;
  bottom: 1rem;
  background: linear-gradient(
    45deg,
    rgba(64, 179, 162),
    rgba(64, 179, 162, 0.8)
  );
  padding: 7px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  border-radius: 13px;
}
</style>

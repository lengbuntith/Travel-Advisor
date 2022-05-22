<template>
  <v-footer dark padless>
    <v-sheet
      class="d-none d-lg-flex"
      height="110"
      width="100%"
      style="background: #fafafa url(/images/footer.png); color: white"
    >
      a
    </v-sheet>
    <v-card flat tile class="white--text text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <hr />

      <v-card-text
        class="white--text pt-0 d-flex flex-row justify-start"
        width="100%"
      >
        <v-row>
          <v-col xs="6" sm="4" md="3" class="d-flex justify-center" id="head">
            <div class="main-footer">
              <ul>
                <li style="text-align: start">
                  <h3>Cambo Travel</h3>
                  <div class="line-clamp">
                    Cambo Travel will provide you advanture places in Cambodia.
                    Useful and helpful, Cambo Travel will show you what you need
                    to know before you go!
                  </div>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col xs="6" sm="4" md="3" class="d-flex justify-center">
            <div style="text-align: start">
              <h3>Useful Links</h3>
              <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/suggestion">Suggestion</nuxt-link></li>
                <li><nuxt-link to="/event">Event</nuxt-link></li>
                <li><nuxt-link to="/login">Login</nuxt-link></li>
              </ul>
            </div>
          </v-col>
          <v-col xs="6" sm="4" md="3" class="d-flex justify-center">
            <div style="text-align: start">
              <h3>Support Links</h3>
              <ul>
                <li><nuxt-link to="/FAQ">FAQ</nuxt-link></li>
                <li><nuxt-link to="/FAQ">Help</nuxt-link></li>
                <li><nuxt-link to="/FAQ">Terms & Conditions</nuxt-link></li>
              </ul>
            </div>
          </v-col>
          <v-col xs="6" sm="4" md="3" class="d-flex justify-center">
            <div style="text-align: start">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <nuxt-link to="/"
                    ><i class="fal fa-map-marker-alt"></i> str.134, Toul kork,
                    <span>Phnom Penh</span>, Cambodia</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="mailto:abc@gmail.com"
                    ><i class="fal fa-envelope fa-sm"></i>
                    abc@gmail.com</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="tel:+855975678324"
                    ><i class="fal fa-phone-square-alt fa-md"></i> 097 34335
                    21</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- <v-divider><hr /></v-divider> -->
      <hr style="opacity: 0.4" />

      <v-card-text class="white--text d-flex align-center">
        <i class="fal fa-copyright"></i>
        <span style="padding-left: 0.3vw">CamboTravel 2022</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss" scoped>
@import url(https://kit-pro.fontawesome.com/releases/v6.1.1/css/pro.min.css);
.v-application .pt-0 {
  margin-top: 20px;
}
.v-card__text > div {
  width: 23vw;
}
.mdi:before,
.mdi-set {
  color: #f0f3f2;
  font: normal normal normal 24px/1 'Material Design Icons';
}
.theme--dark.v-card {
  background-color: rgba(64, 179, 162);
}

.v-application .text-center {
  color: #f0f3f2;
}
h3 {
  margin-bottom: 10px;
}

ul {
  font-weight: 500;
  font-size: 18px;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
a {
  font-weight: 500;
  text-align: start;
  text-decoration: none;
  color: #f0f3f2 !important;
  // // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-image: linear-gradient(to right, #23abd4, #23abd4 50%, #fff 50%);
  // background-size: 200% 100%;
  // background-position: -100%;
  // transition: all 0.3s ease-in-out;
}
li {
  // margin: 0 20px;
  position: relative;
}
// li a {
//   text-decoration: none;
//   display: block;
//   padding: 5px 0;
//   font-family: 'Open Sans';
//   font-size: 26px;
//   line-height: 1;
//   font-weight: bold;
//   position: relative;
//   z-index: 1;
//   text-align: center;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-image: linear-gradient(to right, #23abd4, #23abd4 50%, #fff 50%);
//   background-size: 200% 100%;
//   background-position: -100%;
//   transition: all 0.3s ease-in-out;
// }
li a:hover {
  color: #090909 !important;
  border-bottom: 2px solid yellow;
  transition: all 0.2s ease-in-out;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (max-width: 768px) {
  .mdi:before,
  .mdi-set {
    color: #353837;
    font: normal normal normal 16px/1 'Material Design Icons';
  }
  h3 {
    font-size: 12px;
  }
  .v-card__text > div {
    width: 30vw;
  }
  #head {
    display: none;
  }
  ul {
    font-size: 12px;
  }

  // .v-card__subtitle,
  // .v-card__text,
  // .v-card__title {
  //   padding: 0px;
  // }
}
</style>

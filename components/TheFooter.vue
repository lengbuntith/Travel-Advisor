<template>
  <div>
    <v-app id="inspire">
      <v-footer dark padless>
        <v-card flat tile class="white--text text-center" width="100%">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
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
            <div class="main-footer">
              <ul>
                <li style="text-align: start; margin-left: 3vw">
                  <h3>Cambo Travel</h3>
                  <div>
                    Continue your learning with related content selected by the
                    Team or move between pages by using the navigation links
                    below.Continue your learning with related content selected
                    by the Team or move between pages by using the navigation
                    links below.
                  </div>
                </li>
              </ul>
            </div>
            <div style="text-align: start; padding-left: 15vw">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/home">Suggestions</a></li>
                <li><a href="/home">Event</a></li>
                <li><a href="/home">Login</a></li>
                <li><a href="/home">Logout</a></li>
              </ul>
            </div>
            <div style="text-align: start; padding-left: 13vw">
              <h3>Support Links</h3>
              <ul>
                <li><a href="http://">FAQ</a></li>
                <li><a href="http://">Help</a></li>
                <li><a href="http://">Terms & Conditions</a></li>
              </ul>
            </div>
            <div style="text-align: start; padding-left: 10vw">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="http://"
                    ><i class="fal fa-map-marker-alt"></i> str.134, Toul kork,
                    <span style="padding-left: 1.1vw">Phnom Penh</span>,
                    Cambodia</a
                  >
                </li>
                <li>
                  <a href="mailto:abc@gmail.com"
                    ><i class="fal fa-envelope fa-sm"></i> abc@gmail.com</a
                  >
                </li>
                <li>
                  <a href="tel:+855975678324"
                    ><i class="fal fa-phone-square-alt fa-md"></i> 097 34335
                    21</a
                  >
                </li>
              </ul>
            </div>
          </v-card-text>

          <!-- <v-divider><hr /></v-divider> -->
          <hr style="opacity: 0.4" />

          <v-card-text class="white--text d-flex align-center">
            <i class="fal fa-copyright"></i>
            <span style="padding-left: 0.3vw">CamboTravel 2022</span>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss" scoped>
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
  color: #f0f3f2;
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
  .main-footer {
    display: none;
  }
  ul {
    font-size: 12px;
  }

  .v-card__subtitle,
  .v-card__text,
  .v-card__title {
    padding: 0px;
  }
}
</style>

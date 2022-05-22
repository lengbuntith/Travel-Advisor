<template>
  <div>
    <v-img height="200px" src="/images/background.png">
      <v-sheet
        height="200"
        style="background-color: rgba(64, 179, 162,.8)"
        class="white--text"
      >
        <div>
          <BaseLayout style="height: 200px" class="d-flex align-center justify-space-around">
            <div>
              <h2>Join Our Community</h2>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <v-btn
              style="
                border: 1px solid white;
                background-color: transparent;
                font-weight: 600;
                border-radius: 10px;
              "
              class="white--text"
              to="/register"
            >
              Register now
            </v-btn>
          </BaseLayout>
        </div>
      </v-sheet>
    </v-img>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

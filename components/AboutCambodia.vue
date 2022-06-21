<template>
  <div
    style="
      border-top: 2px solid orange;
      border-bottom: 2px solid yellow;
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    "
  >
    <v-img height="200px" src="/images/aboutcam.png">
      <v-sheet
        height="200"
        style="background-color: rgba(255, 255, 255, 0.95)"
        class=""
      >
        <div style="color: rgba(0, 0, 0, 0.6)">
          <BaseLayout
            style="height: 200px"
            class="d-flex align-center justify-space-around"
          >
            <div>
              <h2>Cambodia</h2>
              <div>
                Cambodia is divided into 25 provinces . The capital Phnom Penh
                is not a province but an "autonomous municipality" (Khmer:
                រាជធានី), equivalent to a province governmentally and
                administered at the same level as the other 24 provinces.
              </div>
            </div>
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

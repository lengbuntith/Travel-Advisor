<template>
    <v-card
      class="pointer"
      elevation="0"
      :to="`/place/${place.name}`"
      max-width="300"
    >
      <v-img aspect-ratio="1" :src="place.image">
        <slot name="icon"></slot>
      </v-img>
      <div
        style="height: 48px; overflow: hidden"
        class="text-center ma-0 text-capitalize"
      >
        {{ place.name }}
      </div>
    </v-card>
</template>

<script>
export default {
  props: ['place'],
}
</script>

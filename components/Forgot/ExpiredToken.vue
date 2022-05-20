<template>
  <v-card
    max-width="500"
    elevation="0"
    outlined
    color="transparent"
    class="mx-auto pa-4 mt-16"
  >
    <v-alert
      transition="scale-transition"
      prominent
      dense
      type="error"
    >
      Token is expired or invalid
      <nuxt-link
        @click.native="$nuxt.$emit('forgotChangeComponent', 'GetLinkForm')"
        to="/forgot"
        class="white--text"
        >Get new link</nuxt-link
      >
    </v-alert>
  </v-card>
</template>

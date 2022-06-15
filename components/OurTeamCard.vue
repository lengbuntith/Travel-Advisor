<template>
  <div class="my-5">
    <v-card>
      <v-img height="250" :src="member.profile"></v-img>
      <div class="pa-2">
        <h4>{{ member.name }}</h4>
        <h6 style="color: rgba(0,0,0,.5">{{ member.role }}</h6>

        <div class="mt-2" style="font-size: 12px; height: 80px">
          "{{ member.message }}"
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['member'],
}
</script>

<style lang="scss" scoped></style>

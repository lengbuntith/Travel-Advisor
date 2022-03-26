<template>
  <div class="d-none d-md-block">
    <v-toolbar color="#ddd" height="36px" elevation="3">
      <v-container class="px-5">
        <TheMenu v-for="(m, i) in menu" :key="i" :name="m.name" :sub="m.sub" />
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'sports',
          sub: [
            {
              name: 'Saba-Sport',
              image:
                'https://www.bk8kh.com/public/new_bk8/content/images/firms/firms_subbutton_i_sport.png',
            },
            {
              name: 'Virtual Sport',
              image:
                'https://www.bk8kh.com/public/new_bk8/content/images/firms/firms_subbutton_v_sport.png',
            },
          ],
        },
        { name: 'e-sports', sub: [] },
        { name: 'casino', sub: [] },
        { name: 'slot', sub: [] },
        { name: 'fishing', sub: [] },
        { name: '3d games', sub: [] },
        { name: 'lottery', sub: [] },
        { name: 'promos', sub: [] },
      ],
    }
  },
}
</script>

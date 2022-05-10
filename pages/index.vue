<template>
  <div>
    <map-svg />
    <TheBanner />
    <PlaceSlide
      v-for="(place, index) in places"
      :key="index"
      :category="place.category"
      :places="place.places"
    ></PlaceSlide>
    <rating-slide
      v-for="(place, index) in topRatingPlaces"
      :key="'toprat' + index"
      :category="place.category"
      :places="place.places"
    ></rating-slide>
    <!-- <PlaceSlide
      v-for="(place, index) in topRatingPlaces"
      :key="index"
      :category="place.category"
      :places="place.places"
    ></PlaceSlide> -->
    <local-slide
      v-for="(place, index) in localPlaces"
      :key="'local' + index"
      :category="place.category"
      :places="place.places"
    ></local-slide>
    <trends-slide
      v-for="(place, index) in trendPlaces"
      :key="'trend' + index"
      :category="place.category"
      :places="place.places"
    ></trends-slide>
    <hr />
    <our-team />
  </div>
</template>

<script>
import LocalSlide from '~/components/LocalSlide.vue'
import MapSvg from '~/components/MapSvg.vue'
import RatingSlide from '~/components/RatingSlide.vue'
import TrendsSlide from '~/components/TrendsSlide.vue'
export default {
  components: { RatingSlide, LocalSlide, TrendsSlide, MapSvg },
  name: 'Home',
  data() {
    return {
      places: [
        {
          category: 'Perfect Places',
          places: [
            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1602604193553-28c132dac0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1552445093-6e48162efaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1551432434-d5f2bdc62ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1552445093-6e48162efaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1551432434-d5f2bdc62ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
          ],
        },
      ],
      topRatingPlaces: [
        {
          category: 'Top Rating Places',
          places: [
            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1602604193553-28c132dac0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Angkor Wat',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
          ],
        },
      ],
      localPlaces: [
        {
          category: 'Local Actractive Places',
          places: [
            {
              name: 'Phnom Penh',
              image:
                'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Seam Reap',
              image:
                'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Kep',
              image:
                'https://images.unsplash.com/photo-1602604193553-28c132dac0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Kom Pot',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Sihanouk Ville',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              name: 'Koh Kong',
              image:
                'https://images.unsplash.com/photo-1569668723493-80d82b05bad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuZ2tvciUyMHdhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            },
          ],
        },
      ],
      trendPlaces: [
        {
          category: 'Latest Trend Places',
          places: [
            {
              name: 'Phnom Penh',
              image:
                'https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Seam Reap',
              image:
                'https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },

            {
              name: 'Kep',
              image:
                'https://images.unsplash.com/photo-1602604193553-28c132dac0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5na29yJTIwd2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
          ],
        },
      ],
    }
  },
}
</script>

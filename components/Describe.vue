<template >
<div>
    <h1>{{placeDetail.title}}</h1>

  <div  class="py-2 text-no-wrap rounded-pill d-flex justify-between align-center" >
    <v-rating
      v-model="rating"
      :length="length"
      size="14" 
      color="teal"
      half-increments
      readonly
      dense
      background-color="yellow" 
      class="ml-n1"     
    ></v-rating>
    
    <div class="ml-1">Ancient Ruins</div> 
  </div>
   
  
    <h3 style="font-size:20px">About</h3>
    <p>
        <b>Best time to visit:</b> {{placeDetail.date}}
        <br/><b>Story:</b> {{placeDetail.story}}
    </p>
</div>
    
</template>    
<script>
  export default {
    props: ['placeDetail'],
    data: () => ({
      length: 5,
      rating: 4.5,
  
    }),
  }
</script>

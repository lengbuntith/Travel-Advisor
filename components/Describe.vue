<template >
<div>
    <h1><b>Angkor Wat</b></h1>

  <div  class="pa-2 text-no-wrap rounded-pill d-flex justify-between align-center" >
    <v-rating
      v-model="rating"
      :length="length"
      size="27" 
      color="teal"
      half-increments
      readonly
      background-color="yellow"      
    ></v-rating>
    
    <v-text >Ancient Ruins</v-text> 
  </div>
   
  
    <h3><b>About</b></h3>
    <p>
        <b>Best time to visit:</b> October - January
        <br/><b>Story:</b> One of Cambodia's greatest tourist attractions, the Angkor Wat temple lies in Angkor and is one of the largest religious monuments to behold. Regarded as one of the Seven Wonders of the World, the UNESCO world heritages site Angkor Wat is a definite mustt visit on a holiday to Cambodia. It lies to the south of Angkor Thom that is also one of Cambodia's tourist spots. It pulls huge crows as it is one of the sites where Lara Croft and the Tomb Raider movies were shot. The Angkor Wat temples are on of the must visit temples in Cambodia.
    </p>
</div>
    
</template>    
<script>
  export default {
    data: () => ({
      length: 5,
      rating: 4.5,
  
    }),
  }
</script>

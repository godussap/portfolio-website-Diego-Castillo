<template>
 <div class="back">
  <Carousel class="carousel" :images="carouselImages"></Carousel>
   <M -message="Here are some pictures that I love to do and a little bit of family, specially my wife and kids who has helped throught this journey "/>
  </div>
  
 </template>
 
 <script>
 // @ is an alias to /src
 import M from '@/components/about.vue'
 import Carousel from '@components/Carousel.vue';

 export default {
   name: 'AboutView',
   components: {
     M, Carousel
   },
   data(){
    return{
      carouselImages:[
        require('@/assets/slide/peru.jpg'),
        require('@/assets/slide/neworleans.jpg'),
        require('@/assets/slide/miami.jpg'),
        require('@/assets/slide/babies.jpg'),
      ]
    }
   }
 }
 
 </script>

 <sytle scope lang="scss">

  .about-page{
    text-align: center;
    padding: 50px;
  }

 </sytle>
 

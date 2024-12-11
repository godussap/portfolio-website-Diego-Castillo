<template>
 <div class="back">
  <Carousel class="carousel" :images="carouselImages"></Carousel>
   <M -message="Here are some pictures that I love to do and a little bit of family, specially my wife and kids who have helped throught this journey "/>
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
        require('@/assets/slide/fam.jpg'),
        require('@/assets/slide/wife.jpg'),
        require('@/assets/slide/babypup.jpg'),
      ]
    }
   }
 }
 
 </script>

<style scoped >
/* Styles for about page*/
.about-page{
    text-align: center;
    padding: px;
  }
  
  .h3{
    margin: 40px 0 0;
  }

  .back{
    background-image: url('../assets/aboutbackground/li.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text{
    text-align: center;
    color:black;
    font-family: Avenir ,Helvetica, Arial, Helvetica, sans-serif;
    justify-content: center;
    font-size: medium;
  }

  .footer{
    background-color: gray;
    color:#333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
</style>

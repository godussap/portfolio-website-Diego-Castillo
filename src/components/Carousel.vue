<template>
    <div class="carousel">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Carousel item" />
        </div>
      </div>
      <button class="nav prev" @click="prevSlide">❮</button>
      <button class="nav next" @click="nextSlide">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Carousel',
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
    mounted(){
        this.autoplay= setInterval(this.nextSlide,3000);
    },
  };
  </script>
  
  <style scoped lang="scss">
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: auto;
  
    .carousel-wrapper {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
  
    .carousel-item {
      min-width: 100%;
      
      img {
        width: 100%;
        height: auto;
        display: block;
        margin-right: 200px;
      }
    }
  
    .nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 100;
  
      &.prev {
        left: 10px;
      }
      &.next {
        right: 10px;
      }
  
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
  </style>
  
   
<template>
    <div class="portfolio-page">
      <Portfolio />
    </div>
  </template>
  
  <script>
  import Portfolio from '@/components/Portfolio.vue';
  
  export default {
    name: 'PortfolioView',
    components: {
      Portfolio,
    },
  };
  </script>
  
  <style scoped>
  .portfolio-page {
    padding: 20px;
  }
  </style>
  
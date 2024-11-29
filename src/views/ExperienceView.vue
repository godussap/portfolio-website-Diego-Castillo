<template>
    <div class="experience-page">
      <h1>My Professional Experience</h1>
      <div class="b">
        <div class="experience-item" v-for="experience in experiences" :key="experience.id">
        
        <h2>{{ experience.title }}</h2>
        <p><strong>Company:</strong> {{ experience.company }}</p>
        <p><strong>Duration:</strong> {{ experience.duration }}</p>
        <ul>
          <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
        </ul>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            id: 1,
            title: 'Information Technology',
            company: 'Caesars Entertainment',
            duration: 'March 2024 - Present',
            tasks: [
              'Helped build the new casino in Columbus, NE',
              'Setting up the server rooms',
              'Support when local employee need.',
              'Monthly maintaned  company’s servers.'
            ]
          },
         
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .experience-page {
    padding: 20px;
  }
  
  .experience-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  
  h2 {
    margin: 0;
  }
  
  ul {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
  .b{
    background-image: url('../assets/image/harrahs.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding:50px;
    border-radius: 10px;
  }
  </style>
  
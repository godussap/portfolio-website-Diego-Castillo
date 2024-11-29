<template>
    <div class="b">
        <div class="hobbies-page">
      <h1>My Hobbies</h1>
      <p>Hobbies are an essential part of my life. They help me unwind and bring joy to my everyday routine.</p>
      
      <div class="hobbies-list">
        <div class="hobby" v-for="hobby in hobbies" :key="hobby.id">
          <img :src="hobby.image" :alt="hobby.title" />
          <h2>{{ hobby.title }}</h2>
          <p>{{ hobby.description }}</p>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hobbies: [
          {
            id: 1,
            title: 'Excercise',
            description: 'I love to exercise , it helps me to relax and connect to my muscle.',
            image: require('../assets/image/workinout.jpg'), 
          },
          {
            id: 2,
            title: 'Relaxing by the beach',
            description: 'I love to  watch the sunset at the beach.',
            image: require('../assets/image/beach.jpg'),
          },
          {
            id: 3,
            title: 'Coding',
            description: 'I enjoy creating applications and solving problems through code.',
            image: require('../assets/image/coding.jpg'),
          },
        ],
        
        
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
.hobbies-page {
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  
  .hobbies-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hobby {
  width: 30%; /* Control the width of each hobby item */
  margin-bottom: 20px; /* Space between items */
  text-align: center; /* Center align text under images */

}.hobby img{
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
.b{
    background-image: url('../assets/image/ho.jpg');
    background-position: center;
   background-size: cover;
   height: 100vh;
   width: 100%;
   display: flex; /* Flex container */
   justify-content: center; /* Horizontal centering */
   align-items: center; /* Vertical centering */
}
</style>
 
 
<template>
 <div class="background">
  <div class="image-container">
    <img alt="profile picture" class="image" src="../assets/d.jpg">
  </div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><p>I am Diego Castillo , I hope you can see this webpage as my passion and dedication.</p></h2>
  <h2 >
    
  </h2>
 </div>
 </div>
 
 <footer class="footer">
    <p>&copy; 2024 Diego Castillo, All rights reserved.</p>
 </footer>
</template>

<script>
export default {
  name: 'HelloView',
  props: {
    msg: String,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.image-container{
  display: inline-block;
  position: relative;
  border-radius: 8px;
  
}
.image{
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  display: block;
}
.background{
  background-image: url('../assets/image/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-position: center;
}

.par{
  text-align: justify;
}
.footer{
    background-color:gray;
    color: #333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
  
</style>

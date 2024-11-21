<template>
    <div class="back">
     <div class="text">
        <h3>
            <p>{{ Message }}</p>
        </h3>
     </div>
    </div>
    <footer class="footer">
    <p>&copy; 2024 Diego Castillo, All rights reserved.</p>
 </footer>
</template>



<script>
export default {
    name: 'AboutView',
    props: {
        Message: String
    },
    
};


</script>

<style>
.back{
    background-image: url(/public/aboutbackground/li.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: auto;
    background-position: contain,center;
}
.text{
    text-align: center;
    color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
   justify-content: center;
   font-size: medium;
   
}

.footer{
    background-color:gray;
    color: #333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
</style>

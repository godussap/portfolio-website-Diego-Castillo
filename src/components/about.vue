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



<template>
 <div class="background">
  <div class="pa">
  <Message msg="Welcome to my page and enjoy " />
  
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/main.vue'


export default {
  name: 'HelloView',
  components: {
    Message,
    
  }
}


</script>


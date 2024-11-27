<template>
  <div class="b">
    <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="submitted" class="success-message">
      Thank you for your message! We will get back to you soon.
    </div>
  </div>
  </div>
  <footer class="footer">
    <p>&copy; 2024 Diego Castillo, All rights reserved.</p>
 </footer>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to your server
      // For demonstration, we will simply log it to the console
      console.log('Form submitted:', this.form);
      // Reset the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
      this.submitted = true;

      // Optionally, you can reset the submitted state after a timeout
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.success-message {
  margin-top: 20px;
  color: green;
}

.b{
  background-image: url('../assets/image/contact.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.footer{
    background-color:gray;
    color: #333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
</style>
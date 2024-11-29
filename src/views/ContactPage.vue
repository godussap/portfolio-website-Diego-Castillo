<template>
  <div class="b">
    <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstname"> First Name:</label>
        <input type="text" id="firstname" v-model="form.firstname" required />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" v-model="form.lastname" required />
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
    <p class="form-note">
        * We will respond to your inquiry within 24-48 hours. Please ensure your contact information is correct.
      </p>
    
    </div>
   
    <div v-if="submitted" class="success-message">
      Thank you for your message! We will get back to you soon.
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
        firstname: '',
        lastname:'',
        email: '',
        message: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      try {
        // Simulate sending form data
        console.log('Form submitted:', this.form);
        this.submitted = true;
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        // Reset form fields
        this.form.firstname = '';
        this.form.lastname='',
        this.form.email = '';
        this.form.message = '';
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }
    },
  },
    
};
</script>

<style scoped>

.contact {
  max-width: 600px;
  margin:  auto;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 
}
.form-group {
  margin-bottom: 15px;
  
}
.form-note {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}
.success-message {
  margin: 20px auto; /* Centering on the page */
  color: green;
  font-weight: bold;
  text-align: center;
  max-width: 600px; /* Same width as the form */
  background-color: rgba(240, 255, 240, 0.9); /* Light green background */
  padding: 15px;
  border-radius: 8px;
  border: 2px solid green;
}


.b{
  background-image: url('../assets/image/tt.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex; /* Flex container */
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
}

.footer{
    background-color:gray;
    color: #333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
  .contact {
    padding: 10px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  button {
  margin-top: 10px;
  background-color: gray;
  color: white;
  padding: 10px 20px;
  border: 4px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
}
button:hover{
  color: black; /* Optional: Add hover effect */
  transition: 0.5s ease-in-out;
}
.success-message {
  margin-top: 20px;
  color: black;
  font-weight: bold;
}  
}
</style>
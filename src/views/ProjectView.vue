<template>
    <div class="bac">
      <div class="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Your one-stop destination for all things tech and creativity.</p>
      </div>
  
      <section id="projects" class="projects">
        <h2>My Projects</h2>
        <div class="project-card" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="button-link">View Project</a>
        </div>
      </section>
  
      <div class="contact-card">
        <h3>Connect with me</h3>
        <p>I am going to be adding more projects in the future.</p>
      </div>
  
      <footer class="footer">
        <p>&copy; 2024 Diego Castillo, All rights reserved.</p>
        <div class="social-links">
            <a 
           href="https://github.com/godussap?tab=repositories" 
         target="_blank" 
         rel="noopener noreferrer"
         class="github-link"
         >
      <i class="fab fa-github"></i> GitHub
    </a>
          
          <a href="sebastiancastillo0312@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project One",
          description: "This is a simple grocery list app.",
          link: "https://github.com/godussap/Grocery-List-App",
        },
        {
          id: 2,
          title: "Project Two",
          description: "This is a note app where you can add or delete notes.",
          link: "https://github.com/godussap/Notes-App",
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
  
  

  <style scoped>
  .github-link {
  color: #333;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.github-link i {
  margin-right: 8px;
}

.github-link:hover {
  color: #4078c0;
}

.bac{
    background-image: url('../assets/image/gi.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.footer{
    background-color:gray;
    color: #333;
    padding: 20px;
    text-align: center;
    justify-content: center;
  }
  .contact-card {
  background: rgba(255, 255, 255, 0.9);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.contact-card h2 {
  margin-bottom: 15px;
}

.hero button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4078c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.hero {
  padding-top: 200px; /* Adjust based on navbar height */
  text-align: center;
}
.hero button:hover {
  background-color: #305b91;
  transition: 0.5s ease-in-out;
}
.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: gray;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}
.button-link:hover {
  background-color: #305b91;
}
.projects {
  padding: 50px 20px;
  background-color: #f4f4f4;
}

.project-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
}

.project-card a {
  color: #4078c0;
  text-decoration: none;
}
  </style>
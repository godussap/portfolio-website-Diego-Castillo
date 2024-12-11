<template>
    <div class="portfolio">
      <h1>My GitHub Repositories</h1>
  
      <div v-if="loading" class="loading">
        <p>Loading repositories...</p>
      </div>
  
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
  
      <ul v-if="!loading && !error" class="repo-list">
        <li v-for="repo in repositories" :key="repo.id" class="repo-item">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            <h2>{{ repo.name }}</h2>
          </a>
          <p>{{ repo.description || "No description available." }}</p>
          <p><strong>Language:</strong> {{ repo.language || "N/A" }}</p>
          <p><strong>Last Updated:</strong> {{ new Date(repo.updated_at).toLocaleDateString() }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PortfolioView',
    data() {
      return {
        repositories: [],
        loading: true,
        error: null,
      };
    },
    async created() {
      try {
        const response = await axios.get('https://api.github.com/users/godussap/repos');
        this.repositories = response.data;
      } catch (err) {
        this.error = 'Failed to fetch repositories. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped >
  .portfolio {
    padding: 20px;
    text-align: center;
  
    .loading,
    .error {
      font-size: 1.2em;
      color: #555;
    }
  
    .repo-list {
      list-style-type: none;
      padding: 0;
  
      .repo-item {
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-align: left;
  
        a {
          text-decoration: none;
          color: gray;
          text-decoration: none;
          color: #fff;
          width: 100px;
          padding: 25px 20px;
          font-size: 15px;
          text-transform: uppercase;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          display: inline-block;
          transition: color 0.5s ease-in-out;
        }
  
        a:hover {
          text-decoration: underline;
          color: #052c7a; /* Optional: Add hover effect */
          transition: 0.5s ease-in-out;
        }
  
        p {
          margin: 5px 0;
        }
      }
    }
  }
  </style>
  
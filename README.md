# Professional Website
This is a personal website where i add about me and a little bit of my family, projects i had done during my college journey, some hobbies, and some experince where i currently I am working 


Table of Contents
=================

  * [Home](https://godussap.github.io/portfolio-website-Diego-Castillo/)
  * [About]
  * [Contact]
  * [Project]
  * [Experinece]
  * [Hobbies]
  * [Diego Castillo](#license)


###  How it works
This is just a base vue-cli and html for my personal website 

###  Steps how to deploy the site 
  * Prepare you project for deployment
    inside you vue-cli project: run the cmd npm run build
    Verify the dist folder is created and contains the files for deployment
  * make sure any outstanding changes are committed to your github repo
  * Install and configure the gh-pages
    run the cmd : npm install gh-pages --save-dev
  * Modify the packages.json
    add a homepage field:
    "homepage" : "https://{your-github-username}.github.io/repo-name"
    update the scrippts section to include:
    "scripts": { "deploy": "gh-pages -d dist" }
  * Deploy to GitHub Pages
    run the cmd to publish your site:
    npm run deploy
  * Verify Functionality
  

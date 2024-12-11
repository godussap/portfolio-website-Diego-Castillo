/* eslint-disable no-console */

import { register } from 'register-service-worker'




if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      console.log('Debug info');
    },
    
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

// Direct Service Worker Registration (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${process.env.BASE_URL}service-worker.js`)
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
} else {
  console.log('Service Workers are not supported in this browser.');
}


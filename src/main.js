import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import router from './router'
import store from '../store'
import "@fortawesome/fontawesome-free/css/all.css";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then((registration) => {
            console.log("Service worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.error("Service worker registration failed:", error);
        });
} else {
    console.error("Service workers are not supported in this browser.");
}
createApp(App).use(store).use(router).use(VueLazyload).mount('#app')

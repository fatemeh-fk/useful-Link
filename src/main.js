//import {createApp} from 'vue';
//import App from './App.vue';

//createApp(App).mount('#app');



import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue'

//export const eventBus = createApp(App)
const app=createApp(App)

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialot',BaseDialog);


app.mount('#app')
//createApp(App).mount('#app')


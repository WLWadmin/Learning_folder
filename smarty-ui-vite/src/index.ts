const s: string = 'Hello TypeScript'
console.log(s)

import {createApp} from 'vue';
// import SButton from './button';
import SFCButton from './SFCButton.vue';

createApp(SFCButton).mount('#app');
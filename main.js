import Vue from 'zadania';
import SPA from './src/components/SPA.vue';

new Vue
(
    {render: h=> h(SPA)}
).$mount('#app');
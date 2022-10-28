import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css"
import router from './router'
import axios from 'axios'
import {createStore } from 'vuex'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();


const store = createStore({
    state(){
        return {
            sales: [], 
        }
    },
    mutations: {
        salesRecord(state, payload){
            state.sales = payload; 
        },
    },
    actions: {
        async allSales(context){
            let data = await axios.get('http://localhost:3000/farm_sales')
            context.commit('salesRecord', data.data)
        }
    },
    getters: {

    }

})








createApp(App).use(router).use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')

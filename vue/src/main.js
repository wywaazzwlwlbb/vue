import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import LyTab from 'ly-tab';
Vue.use(LyTab);
Vue.use(Mint);

Vue.config.productionTip = false;

new Vue({
  Mint,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

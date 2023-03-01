import { createApp } from "vue";
import AppAlert from "./components/AppAlert.vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faBook } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faBook);

const app = createApp(App);
app.component("AppAlert", AppAlert);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

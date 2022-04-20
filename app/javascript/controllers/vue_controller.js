import * as Vue from "vue";

console.log("Made it to here");
const point = "#app";
const element = document.querySelector(point);
if (element !== null) {
  const app = Vue.createApp({
    data() {
      return { count: 1 };
    },
    template: `<div>count is {{ count }}</div>`,
    created() {
      console.log("count is: " + this.count);
    },
  });
  const vm = app.mount(point);
}

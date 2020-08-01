<template>
  <div id="app">
    <button v-if="!clicked" style="margin: 0 auto" @click="click">
      Click me
    </button>
    <span v-else>
      Congrats, bro!
    </span>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="message" @updated="whatYouWillDo" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
/**
  components,
  props,
  lifeCycle,
  methods,
  events,
  call-methods,
  computed,
  v-if
  v-else
 */
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "Pre-set message",
      clicked: false,
    };
  },
  beforeCreate() {
    console.log(this.message);
    console.log("Events & lifeCycle are ok!");
  },
  created() {
    console.log(this.message);
    console.log(
      "Injections & reactivity are ok! This time is perfect to call api's;"
    );
  },
  beforeMount() {
    this.message = "This is my own welcome message";
    console.log(this.message);
    console.log("Template compilation is ok, but i'm not very util");
  },
  mounted() {
    console.log(this.message);
    console.log("Page is fully mounted and rendered");
  },
  beforeUpdate() {
    console.log("Variable change");
  },
  updated() {
    console.log("Render change");
  },
  methods: {
    click($e) {
      this.clicked = true;
      this.message = "The welcome message was change";
      console.log($e);
    },
    whatYouWillDo(data) {
      console.log(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

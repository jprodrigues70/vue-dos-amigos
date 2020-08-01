<template>
  <div id="app">
    <div style="margin: 0 auto">
      <Btn @click="click">
        Click me
      </Btn>
      <Btn style="margin-left: 10px" :disabled="true">
        You can't click me
      </Btn>
    </div>
    <Card>
      <div slot="header">This is a card header</div>
      <img style="height: 120px" alt="Vue logo" src="./assets/logo.png" />
      <template #footer>
        This is a card footer
      </template>
    </Card>
  </div>
</template>

<script>
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
  global-components
  slots,
  named-slots
 */
export default {
  name: "App",
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

<template>
  <div>
    <h1>
      Welcome to my page, bro!
    </h1>
    <div v-if="room">
      <p>We'll talk about room {{ roomToPrint }}</p>
      <Btn @click="goToRoom"> Enter room {{ roomToPrint }} </Btn>
    </div>
    <div>
      <Btn @click="bg(1)">Black BG</Btn>
      <Btn @click="bg(0)">White BG</Btn>
    </div>
  </div>
</template>
<script>
import room from "@/mixins/room";
export default {
  name: "Index",
  mixins: [room],
  methods: {
    goToRoom() {
      this.$router.push({ path: `/room/${this.room}`, query: { a: "b" } });
    },
    bg(e) {
      this.$store.dispatch("config/changeBlack", e).then(() => {
        console.log("YES!");
      });
    },
  },
};
</script>

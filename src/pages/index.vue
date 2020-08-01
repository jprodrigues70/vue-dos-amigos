<template>
  <div>
    <h1>
      Welcome to my page, bro!
    </h1>
    <div v-if="room">
      <p>We'll talk about room {{ roomToPrint }}</p>
      <Btn @click="goToRoom"> Enter room {{ roomToPrint }} </Btn>
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
  },
};
</script>

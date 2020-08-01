<template>
  <div>
    <h1>
      Welcome to my page, bro!
    </h1>
    <div v-if="room">
      <p>We'll talk about room {{ room }}</p>
      <Btn @click="goToRoom"> Enter room {{ room }} </Btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  computed: {
    room() {
      if (this.$route.query && this.$route.query.room) {
        return this.$route.query.room;
      }
      return "";
    },
  },
  methods: {
    goToRoom() {
      this.$router.push({ path: `/room/${this.room}`, query: { a: "b" } });
    },
  },
};
</script>

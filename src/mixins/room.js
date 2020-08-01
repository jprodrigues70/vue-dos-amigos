export default {
  computed: {
    room() {
      if (this.$route.query && this.$route.query.room) {
        return this.$route.query.room;
      } else if (this.$route.params && this.$route.params.id) {
        return this.$route.params.id;
      }
      return "";
    },
    roomToPrint() {
      return `r-${this.room}`;
    },
  },
};

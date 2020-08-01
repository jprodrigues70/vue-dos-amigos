<template>
  <div>You are inside room {{ roomToPrint }}</div>
</template>
<script>
import room from "@/mixins/room";

export default {
  name: "RoomItem",
  mixins: [room],
};
</script>
<style></style>

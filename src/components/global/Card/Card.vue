<template>
  <div class="c-card">
    <div v-if="$slots.header" class="c-card__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="c-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="c-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style scoped>
.c-card {
  padding: 0 16px;
  outline: 0;
  border: 1px solid rgba(42, 42, 42, 0.4);
  border-radius: 8px;
  background: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 320px;
  margin: 2px auto;
}

.c-card__header {
  font-size: 20px;
  margin-bottom: 8px;
}

.c-card__body {
  font-size: 16px;
}

.c-card__footer {
  font-size: 14px;
  margin-top: 8px;
}
</style>

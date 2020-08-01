<template>
  <button class="c-btn" :class="{ 'c-btn--disabled': disabled }" @click="click">
    {{ clicksNum }}
    <slot />
  </button>
</template>
<script>
export default {
  name: "Btn",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clicks: 0,
    };
  },
  computed: {
    clicksNum() {
      return this.clicks ? this.clicks : "";
    },
  },
  methods: {
    click($event) {
      this.clicks += 1;
      this.$emit("click", $event);
    },
  },
};
</script>
<style scoped>
.c-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  min-height: 40px;
  max-width: 100%;
  outline: 0;
  border: 1px solid rgba(42, 42, 42, 0.4);
  border-radius: 4px;
  background: none;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  font-size: 18px;
  line-height: 0;
  opacity: 1;
  cursor: pointer;
  border-radius: 8px;
}

.c-btn--disabled {
  pointer-events: none;
  opacity: 0.6;
}

.c-btn:hover {
  background-color: rgba(42, 42, 42, 0.06);
}

.c-btn:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #aaa;
}
</style>

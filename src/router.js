import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let routes = [];

const createPath = (file) => {
  return file
    .replace("/_", "/:")
    .replace("index.vue", "")
    .replace(".vue", "")
    .replace(".", "")
    .trim();
};

const requireContext = require.context("./pages", true, /.*\.(vue)$/);
requireContext.keys().forEach((file) => {
  const Component = requireContext(file).default;
  if (Component.name) {
    const route = {
      name: Component.name,
      path: createPath(file),
      component: Component,
      meta: typeof Component.head === "function" ? Component.head() : null,
    };
    routes.push(route);
  }
});

const router = new Router({
  // mode: 'abstract',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) {
    return next();
  }
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
export default router;

import "./index-4bc72cb7.js";
import { s as stores } from "./singletons-dda2a49f.js";
const getStores = () => {
  const stores$1 = stores;
  return {
    page: {
      subscribe: stores$1.page.subscribe
    },
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    updated: stores$1.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
export {
  navigating as n,
  page as p
};

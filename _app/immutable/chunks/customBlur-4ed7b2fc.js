import { X as get_store_value } from "./index-f811e5e3.js";
import { n as navigating } from "./stores-32abb2fb.js";
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function blur(node, { delay = 0, duration: duration2 = 400, easing = cubicInOut, amount = 5, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === "none" ? "" : style.filter;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration: duration2,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * amount}px);`
  };
}
const isSameSite = () => {
  var _a, _b, _c, _d;
  return ((_b = (_a = get_store_value(navigating)) == null ? void 0 : _a.from) == null ? void 0 : _b.params) === ((_d = (_c = get_store_value(navigating)) == null ? void 0 : _c.to) == null ? void 0 : _d.params);
};
const duration = 200;
const blurIn = (node) => blur(node, { delay: isSameSite() ? 0 : duration, duration });
const blurOut = (node) => blur(node, { duration: isSameSite() ? 0 : duration });
export {
  blurIn as a,
  blur as b,
  blurOut as c
};

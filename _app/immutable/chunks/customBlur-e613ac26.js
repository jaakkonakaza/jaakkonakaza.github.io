import "./index-72c9b203.js";
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
const duration = 200;
const blurIn = (node) => blur(node, { delay: 0, duration });
const blurOut = (node) => blur(node, { duration });
export {
  blurIn as a,
  blur as b,
  blurOut as c
};

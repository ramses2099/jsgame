import kaplay from "kaplay";

//init the canvas
const k = kaplay();

//load a sprite
loadBean();

setGravity(1600);

// player
const bean = add([sprite("bean"), pos(80, 40), area(), body()]);

add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
]);

onKeyPress("space", () => {
  bean.jump();
});

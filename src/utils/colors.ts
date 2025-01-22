export const COLORS = [
  "#ffa8a8",
  "#faa2c1",
  "#e599f7",
  "#b197fc",
  "#91a7ff",
  "#74c0fc",
  "#66d9e8",
  "#63e6be",
  "#8ce99a",
  "#c0eb75",
  "#ffe066",
  "#ffc078",
  "#ff6b6b",
  "#f06595",
  "#cc5de8",
  "#845ef7",
  "#5c7cfa",
  "#339af0",
  "#22b8cf",
  "#20c997",
  "#51cf66",
  "#94d82d",
  "#fcc419",
  "#ff922b",
  "#fa5252",
  "#228be6",
];

export const randomColor = () => {
  const index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
};

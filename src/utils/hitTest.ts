import { ElementType } from "../element";

/**
 * Checks if the point is hitting an element
 * @param coordX - The scene x coordinate
 * @param coordY - The scene y coordinate
 * @param element - The element to check
 */
export const isHittingElement = (
  coordX: number,
  coordY: number,
  element: ElementType,
) => {
  const { x, y, width, height } = element;
  if (coordX > x && coordX <= x + width && coordY > y && coordY <= y + height) {
    return true;
  }

  return false;
};

/**
 * Gets the hit element
 * @param coordX - The scene x coordinate
 * @param coordY - The scene y coordinate
 * @param elements - The elements to check
 */
export const getHitElement = (
  coordX: number,
  coordY: number,
  elements: Array<ElementType>,
) => {
  return elements.find((element) => isHittingElement(coordX, coordY, element));
};

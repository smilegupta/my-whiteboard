
/**
 * Converts viewport coordinates to scene coordinates
 * @param clientX - The client x coordinate
 * @param clientY - The client y coordinate
 * @param opts - The options
 */
export const viewportCoordsToSceneCoords = (
  clientX: number,
  clientY: number,
  opts: { offsetX: number; offsetY: number },
) => {
  // TODO: Implement this
};

/**
* Converts scene coordinates to viewport coordinates
* @param coordX - The scene x coordinate
* @param coordY - The scene y coordinate
* @param opts - The options
*/
export const sceneCoordsToViewportCoords = (
  coordX: number,
  coordY: number,
  opts: { offsetX: number; offsetY: number },
) => {
  // TODO: Implement this
};

/**
 * Normalize coordinates to ensure that the x and y values are the top-left corner of the rectangle
 * @param startX - x coordinate of the starting point
 * @param startY - y coordinate of the starting point
 * @param endX - x coordinate of the ending point
 * @param endY - y coordinate of the ending point
 */
export const getNormalizedRect = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) => {
  const x = Math.min(startX, endX);
  const y = Math.min(startY, endY);

  const width = Math.abs(startX - endX);
  const height = Math.abs(startY - endY);

  return {
    x, y, width, height
  }
};

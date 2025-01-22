import { Shape } from "./shape";

export const RESIZE_HANDLE = {
  NW: "nw",
  NE: "ne",
  SW: "sw",
  SE: "se",
};

export type RESIZE_HANDLE_TYPE =
  (typeof RESIZE_HANDLE)[keyof typeof RESIZE_HANDLE];

export const RESIZE_HANDLER_SIZE = 10;
export const RESIZE_THRESHOLD = 10;

/**
 * Renders the resize handlers
 * @param canvas - The canvas element
 * @param element - The element to whose reeize handler is to be rendered
 */
export const renderResizeHandlers = (
  canvas: HTMLCanvasElement,
  element: Shape,
) => {
  // TODO: Implement this

  // Draw the resize handlers

  //  North West
  
  // North East
  

  // South West
  

  // South East
  
};
export const isHittingResizeHandlers = (
  canvas: HTMLCanvasElement,
  element: Shape,
  sceneX: number,
  sceneY: number,
): RESIZE_HANDLE_TYPE | null => {
  // TODO: Implement this

  return null;
};

/**
 * Resizes the element
 * @param newX - The new x coordinate
 * @param newY - The new y coordinate
 * @param pointerDownState - The pointer down state
 * @param canvas - The canvas element
 */
export const resizeElement = (
  newX: number,
  newY: number,
  pointerDownState: unknown,
  canvas: HTMLCanvasElement,
) => {
  // TODO: Implement this
  
};

/**
 * Gets the cursor for the resize handler
 * @param handle - The resize handler
 * @returns The cursor
 */
export const getCursorForResizeHandler = (handle: RESIZE_HANDLE_TYPE) => {
  switch (handle) {
    case RESIZE_HANDLE.NW:
    case RESIZE_HANDLE.SE:
      return "nwse-resize";
    case RESIZE_HANDLE.NE:
    case RESIZE_HANDLE.SW:
      return "nesw-resize";
  }
  return "auto";
};

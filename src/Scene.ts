import { Shape } from "./shape";

class Scene {
  private elements: Array<Shape>;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.elements = [];
    this.canvas = canvas;
  }

  addElement(element: Shape) {
    this.elements.push(element);
  }

  updateElement(id: string, updates: Partial<Shape>) {
    const index = this.elements.findIndex((element) => element.id === id);
    if (index === -1) {
      console.error("Element not found");
      return;
    }
    this.elements[index] = { ...this.elements[index], ...updates };
  }

  replaceElements(elements: Array<Shape>) {
    this.elements = elements;
  }
  removeElement(id: string) {
    const index = this.elements.findIndex((element) => element.id === id);
    if (index === -1) {
      console.error("Element not found");
      return;
    }
    this.elements[index].deleted = true;
  }

  getAllElements() {
    return this.elements.filter((element) => !element.deleted);
  }

  getAllElementsIncludingDeleted() {
    return this.elements;
  }

  getElementsMap() {
    return this.elements.reduce(
      (acc, element) => {
        acc[element.id] = element;
        return acc;
      },
      {} as Record<string, Shape>,
    );
  }

  clear() {
    this.elements = [];
  }

  /**
   * Redraws the scene
   */
  redraw() {
    // TODO: Implement this
  }
}

export default Scene;

import ShapesToolbar, { ActiveTool } from "./ShapesToolbar.tsx";
import React, { ElementType, useEffect, useRef, useState } from "react";

import ResetCanvasDialog from "./ResetCanvasDialog.tsx";
import { TrashIcon } from "../icons.tsx";

import "./App.scss";
import { clearCanvas, drawRect, renderSelectionBorder } from "../utils/draw.ts";
import { randomColor } from "../utils/colors.ts";
import Scene from "../Scene.ts";
import { generateElement } from "../element.ts";
import { getHitElement } from "../utils/hitTest.ts";

interface PointerDownState {
  origin: {
    x: number;
    y: number;
  };
  bgColor: string;
  hitElement: ElementType | undefined;
}

// let isDrawing = false;

const App = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>("selection");
  const [showResetCanvasDialog, setshowResetCanvasDialog] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const pointerDownStateRef = useRef<PointerDownState | null>(null);
  const sceneRef = useRef<Scene | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    sceneRef.current = new Scene(canvasRef.current);
  }, []);

  const onToolChange = (tool: ActiveTool) => {
    setActiveTool(tool);

    if (tool === "rectangle") {
      canvasRef.current?.style.setProperty("cursor", "crosshair");
    } else {
      canvasRef.current?.style.setProperty("cursor", "default");
    }
  };

  const resetCanvas = () => {
    if (!canvasRef.current || !sceneRef.current) return;

    clearCanvas(canvasRef.current);
    sceneRef.current.clear();

    setshowResetCanvasDialog(false);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    console.log("on pointer up");
    if (!sceneRef.current) return;
    const allElements = sceneRef.current.getAllElements();
    const hitElement = getHitElement(event.clientX, event.clientY, allElements);

    pointerDownStateRef.current = {
      origin: {
        x: event.clientX,
        y: event.clientY,
      },
			bgColor: randomColor(),
			hitElement,
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (
      !pointerDownStateRef.current ||
      !canvasRef.current ||
      !sceneRef.current
    ) {
      return;
    }
    console.log("on pointer move");
    if (activeTool === "rectangle") {
      const { origin, bgColor } = pointerDownStateRef.current;
      const width = event.clientX - origin.x;
      const height = event.clientY - origin.y;
      clearCanvas(canvasRef.current);
      sceneRef.current.redraw();
      console.log("DRAWING RECTANGLE");
      drawRect(canvasRef.current, origin.x, origin.y, width, height, bgColor);
    }
  };

  const onPointerUp = (event: PointerEvent) => {
    if (
      !pointerDownStateRef.current ||
      !canvasRef.current ||
      !sceneRef.current
    ) {
      return;
    }
    // console.log("on pointer up");

    if (activeTool === "selection") {
      const { hitElement } = pointerDownStateRef.current;
      if (hitElement) {
        renderSelectionBorder(canvasRef.current, hitElement);
      } else {
        //  noop
      }
    }
    if (activeTool === "rectangle") {
      const { origin, bgColor } = pointerDownStateRef.current;
      const width = event.clientX - origin.x;
      const height = event.clientY - origin.y;
      const element = generateElement(
        "rectangle",
        origin.x,
        origin.y,
        width,
        height,
        bgColor
      );
      sceneRef.current.addElement(element);
      console.log(sceneRef.current.getAllElements(), "Scene elements");
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);

      onToolChange("selection");
    }
  };

  return (
    <div className="whiteboard-app">
      <div className="whiteboard-app-canvas" ref={wrapperRef}>
        <button
          className="clear-canvas-btn"
          onClick={() => setshowResetCanvasDialog(true)}
          aria-label={"clear canvas"}
        >
          {TrashIcon}
        </button>
        <div className="shapes-toolbar-container">
          <ShapesToolbar onClick={onToolChange} activeTool={activeTool} />
        </div>
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{
            touchAction: "none",
            display: "block",
          }}
          onPointerDown={onPointerDown}
          // onClick={onClick}
        ></canvas>
      </div>
      {showResetCanvasDialog && (
        <ResetCanvasDialog
          onReset={resetCanvas}
          onClose={() => setshowResetCanvasDialog(false)}
        />
      )}
    </div>
  );
};

export default App;

import ShapesToolbar, { ActiveTool } from "./ShapesToolbar.tsx";
import { useRef, useState } from "react";

import ResetCanvasDialog from "./ResetCanvasDialog.tsx";
import { TrashIcon } from "../icons.tsx";

import Scene from "../Scene";

import "./App.scss";

const App = () => {
	const [activeTool, setActiveTool] = useState<ActiveTool>("selection");
	const [showResetCanvasDialog, setshowResetCanvasDialog] = useState(false);

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const sceneRef = useRef<Scene | null>(null);

	const onToolChange = (tool: ActiveTool) => {
		setActiveTool(tool);

		if (tool === "rectangle") {
			canvasRef.current?.style.setProperty("cursor", "crosshair");
		} else {
			canvasRef.current?.style.setProperty("cursor", "default");
		}
	};

	const resetCanvas = () => {
		setshowResetCanvasDialog(false);
	};

	return (
		<div className="whiteboard-app">
			<div className="whiteboard-app-canvas" ref={wrapperRef}>
				<div className="whiteboard-app-tools">
					<button
						onClick={() => setshowResetCanvasDialog(true)}
						aria-label={"clear canvas"}
					>
						{TrashIcon}
					</button>

					<div className="shapes-toolbar-container">
						<ShapesToolbar onClick={onToolChange} activeTool={activeTool} />
					</div>
				</div>
				<canvas
					ref={canvasRef}
					style={{
						touchAction: "none",
						display: "block",
						width: window.innerWidth,
						height: window.innerHeight,
					}}
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

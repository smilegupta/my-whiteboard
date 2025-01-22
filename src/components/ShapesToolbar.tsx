import { RectangleIcon, SelectIcon } from "../icons";
import clsx from "clsx";

export type ActiveTool = "selection" | "rectangle";

import "./ShapesToolbar.scss";

const ShapesToolbar = ({
	onClick,
	activeTool,
}: {
	onClick: (tool: ActiveTool) => void;
	activeTool: ActiveTool;
}) => {
	return (
		<div className="shapes-toolbar">
			<button
				className={clsx("shapes-toolbar__button", {
					active: activeTool === "selection",
				})}
				onClick={onClick.bind(null, "selection")}
				aria-label={"select"}
			>
				{SelectIcon}
			</button>
			<button
				className={clsx("shapes-toolbar__button", {
					active: activeTool === "rectangle",
				})}
				onClick={onClick.bind(null, "rectangle")}
				aria-label={"rectangle"}
			>
				{RectangleIcon}
			</button>
		</div>
	);
};

export default ShapesToolbar;

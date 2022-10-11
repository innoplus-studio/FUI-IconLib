import { style } from "typestyle";

export const FIconContainer = (disabled: boolean, size: string) =>
	style({
		cursor: disabled ? "not-allowed" : "pointer",
		height: size === "large" ? "1.5rem" : "1rem",
		overflow: "visible",
		width: size === "large" ? "1.5rem" : "1rem",
	});

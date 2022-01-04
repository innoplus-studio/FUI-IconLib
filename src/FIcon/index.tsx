import React from "react";
import { handleFIcon } from "./func";
import * as styles from "./styles";
import { FIconProps } from "./types";

export const FIcon = (props: FIconProps) => {
	return (
		<svg
			style={props.containerStyle}
			className={props.containerClassName + " " + styles.FIconContainer(props)}
			viewBox={props.size === "large" ? `0 0 24 24` : `0 0 16 16`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFIcon(props)}
		</svg>
	);
};

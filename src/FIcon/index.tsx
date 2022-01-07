import React from "react";
import { handleFIcon } from "./func";
import * as styles from "./styles";
import { FIconProps } from "./types";

export const FIcon = (props: FIconProps) => {
	const size = props.size ?? "large";
	return (
		<svg
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
			style={props.containerStyle}
			className={
				props.containerClassName +
				" " +
				styles.FIconContainer(props.disabled!, size)
			}
			viewBox={size === "large" ? `0 0 24 24` : `0 0 16 16`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFIcon(props, size)}
		</svg>
	);
};

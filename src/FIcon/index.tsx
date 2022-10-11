import React, { useState } from "react";
import { handleFIcon } from "./func";
import { FIconContainer } from "./styles";
import { FIconProps } from "./types";

export const FIcon = ({
	size = "large",
	disabled = false,
	...props
}: FIconProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const param: Partial<FIconProps> = {
		size: size,
		disabled: disabled,
		...props,
	};

	return (
		<svg
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
			style={props.style && props.style(isHover)}
			className={
				FIconContainer(disabled, size) +
				" " +
				(props.className && props.className(isHover))
			}
			viewBox={size === "large" ? `0 0 24 24` : `0 0 16 16`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			{...props.svgProps}
		>
			{handleFIcon(param, isHover)}
		</svg>
	);
};

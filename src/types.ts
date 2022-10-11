import { SVGProps } from "react";

export type FIconOnHoverProperty<T> = (isHover?: boolean) => T;

export type FIconOnClickFunction = () => void;

export type FIconSVGProps = Omit<
	SVGProps<SVGSVGElement>,
	| "style"
	| "className"
	| "onClick"
	| "viewBox"
	| "onMouseEnter"
	| "onMouseLeave"
	| "xmlns"
	| "fill"
>;

export type FIconPathProps = Omit<SVGProps<SVGPathElement>, "stroke" | "d">;

import { CSSProperties } from "react";
import {
	FIconOnClickFunction,
	FIconOnHoverProperty,
	FIconPathProps,
	FIconSVGProps,
} from "../types";

export interface FIconProps {
	/** If `true`, the icon will **NOT** be abled to use. */
	disabled?: boolean;
	/** Size of the icon. */
	size?: "small" | "large";
	/** Name of the icon. */
	name?: FIconNames;
	/** Click action event of the icon. */
	onClick?: FIconOnClickFunction;
	/** Class name of the icon. */
	className?: FIconOnHoverProperty<string>;
	/** Style of the icon. */
	style?: FIconOnHoverProperty<CSSProperties>;
	/** Background color of the icon. */
	fillColor?: FIconOnHoverProperty<string>;
	/** Stroke color of the icon. */
	color?: FIconOnHoverProperty<string>;
	/** SVG properties of the icon. */
	svgProps?: FIconSVGProps;
	/** Path properties of the icon. */
	pathProps?: FIconPathProps;
}

/** Names of FIcon. */
export enum FIconNames {
	ADD = "add",
	ARROW_DOWN = "arrow_down",
	AWARD = "award",
	BAR_CHART = "bar_chart",
	BOOK = "book",
	BOOK_MARK = "bookmark",
	CALENDAR = "calendar",
	CLOSE = "close",
	DELETE = "delete",
	EMAIL = "email",
	FLAG = "flag",
	GIFT = "gift",
	HOME = "home",
	IMAGE = "image",
	INPUT = "input",
	LEFT_ARROW = "left_arrow",
	LEFT_CHEVRON = "left_chevron",
	LOGOUT = "logout",
	MAXIMIZE = "maximize",
	MENU = "menu",
	MORE = "more",
	MULTI_SELECT = "multi_select",
	NOTIFICATION = "notification",
	RANKING = "ranking",
	RIGHT_ARROW = "right_arrow",
	RIGHT_CHEVRON = "right_chevron",
	SEARCH = "search",
	SELECT = "select",
	SETTING = "setting",
	CHAPTER = "chapter",
	USER = "user",
}

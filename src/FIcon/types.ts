import { CSSProperties } from "react";

export type OnClickFunction = () => void;

export interface FIconProps {
	disabled?: boolean;
	name?: FIconNames;
	onClick?: OnClickFunction;
	size?: "small" | "large";

	// css style of FIcon container
	className?: string;
	style?: CSSProperties;

	// css style of FIcon svg path
	fillColor?: string;
	strokeColor?: string;
	strokeWidth?: number | string;
}

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

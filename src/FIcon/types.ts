import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { CSSProperties } from "react";

type OnClickFunction<T> = (data?: T) => void;

export interface FIconProps {
	disabled?: boolean;
	name?: FIconTypes;
	onClick?: OnClickFunction<void>;
	size?: "small" | "large";

	// css style of FIcon container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of FIcon svg path
	fillColor?: FColorTypes;
	strokeColor?: FColorTypes;
	strokeWidth?: number | string;
}

export enum FIconTypes {
	ADD = "add",
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
	TOPIC = "topic",
	USER = "user",
}

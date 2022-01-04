import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FIconProps } from "./types";

export const FIconContainer = (props: FIconProps) => style({ 
    cursor: props.disabled ? "not-allowed" : "pointer",
    height: props.size === "large" ? "1.5rem" : "1rem", 
    overflow: "visible",
    width: props.size === "large" ? "1.5rem" : "1rem",
    $nest: {
        "&> path":{
            strokeOpacity: props.disabled ? 0.4 : 1
        }
    }
})

export const FIconSVGLarge = style({
    stroke: FColorTypes.BLACK,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
})

export const FIconSVGSmall = style({
    stroke: FColorTypes.BLACK,
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
})

import { MouseEvent } from "react";

export interface MoreBtnProp {
    fetchMore: (event: MouseEvent<HTMLButtonElement>) => void;
}
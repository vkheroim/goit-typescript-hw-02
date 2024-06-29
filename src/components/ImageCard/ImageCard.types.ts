import { ImageResult } from "../App/App.types"

export interface Data {
    data: ImageResult,
    onClick: (url: string) => void;
}
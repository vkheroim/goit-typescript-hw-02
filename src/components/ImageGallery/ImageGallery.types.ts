import { ImageResult } from "../App/App.types"

export interface GalleryProps {
    items: ImageResult[],
    onClick: (item: ImageResult) => void;
}

import { ImageResult } from "../App/App.types";

export interface ModalProps {
    image: ImageResult,
    isOpen: boolean,
    onClose: () => void;
}
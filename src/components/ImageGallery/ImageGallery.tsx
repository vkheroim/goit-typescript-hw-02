
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { GalleryProps } from "./ImageGallery.types";

const ImageGallery = ({ items, onClick }: GalleryProps) => {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard data={item} onClick={() => onClick(item)} />
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;

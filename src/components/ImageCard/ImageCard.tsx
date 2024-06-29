
import css from './ImageCard.module.css'
import {Data} from './ImageCard.types'

const ImageCard = ({ data: { urls, alt_description, likes }, onClick }: Data) => {
    return (
        <>
            <div onClick={() => onClick(urls.regular)}>
                <img className={css.img} src={urls.small} alt={alt_description} />
            </div>
            <div>
                <p>Likes: {likes}</p>
            </div>
        </>
    )
}

export default ImageCard;
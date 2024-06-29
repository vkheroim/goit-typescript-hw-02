
import css from './LoadMoreBtn.module.css'
import { MoreBtnProp } from './LoadMoreBtn.types';

const LoadMoreBtn = ({ fetchMore }: MoreBtnProp) => {
    return (
        <>
            <button className={css.btn} onClick={fetchMore}>Load more</button>
        </>
    )
}

export default LoadMoreBtn;
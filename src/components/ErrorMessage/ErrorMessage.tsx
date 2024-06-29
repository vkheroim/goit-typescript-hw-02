
import css from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <div className={css.container}>
            <p className={css.text}>Whoops, something went wrong! Please try reloading this page!</p>
        </div>
    )
}

export default ErrorMessage;
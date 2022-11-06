import s from './Post.module.css'

const Post = (props) => {
    return (

            <div className={s.item}>

                <img src="data:image/jpeg;base64,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"/>

                {props.message}

                <div>
                    <span>{props.likes}</span>
                </div>

            </div>
    )
}

export default Post;
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {message: 'Hi', likes: 12},
        {message: 'How are you', likes: 15},
    ]

    let postElements = postData.map(m => <Post message={postData[0].message} likes='15'/>)

    return (
        
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                        <button>Add post</button>
                </div>

                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
       
    )
}

export default MyPosts;
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        
        <div className={s.content}> 
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif"/>
             </div>

            <div>
                ava + description
            </div>

            <MyPosts/>
        </div>
        
    
    )
}

export default Profile;
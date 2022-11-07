import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogItem = (props) => {
    
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    return (
        
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <DialogItem name="Evgeniy" id="1"/>
                <DialogItem name="Alexander" id="2"/>
                <DialogItem name="Alena" id="3"/>
                <DialogItem name="Sveta" id="4"/>
                <DialogItem name="Konstantin" id="5"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Yo"/>
                
            </div>
        </div>
        
    
    )
}

export default Dialogs;
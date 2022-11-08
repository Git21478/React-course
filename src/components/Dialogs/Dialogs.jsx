import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'



const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Konstantin'},
        {id: 5, name: 'Konstantin'},
        {id: 5, name: 'Konstantin'},
    ]

    let messages = [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Welcome'},
        {id: 3, message: 'Welcome'},
        {id: 3, message: 'Welcome'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}    
            </div>
        </div>
        
    
    )
}

export default Dialogs;
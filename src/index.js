import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  {message: 'Hi', likes: 12},
  {message: 'How are you', likes: 15},
]

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);



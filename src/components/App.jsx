import '../style/App.css'
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import ChatRoom from './ChatRoom';
import UserList from './Users/UserList';
import UserPage from './Users/UserPage';
import UserEdit from './Users/UserEdit';
import UserCreate from './Users/UserCreate';
import ItemList from './Items/ItemList';
import ItemPage from './Items/ItemPage';
import CollectionPage from './Collections/CollectionPage';


function App() {
  return (
    <Router>
      <div className='AppContainer'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='chatroom' element={<ChatRoom/>}/>
          <Route path='items' element={<ItemList/>} />
          <Route path='items/:id' element={<ItemPage/>}/> 
          <Route path='users' element={<UserList/>}/>
          <Route path='users/create' element={<UserCreate/>}/>
          <Route path='users/edit/:id' element={<UserEdit/>}/>  
          <Route path='users/:id' element={<UserPage/>}/> 
          <Route path='collections/:id' element={<CollectionPage/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

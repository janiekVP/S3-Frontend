import '../style/App.css'
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import UserList from './Users/UserList';
import UserPage from './Users/UserPage';
import ItemList from './Items/ItemList';


function App() {
  return (
    <Router>
      <div className='AppContainer'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='items' element={<ItemList/>} />
          <Route path='users' element={<UserList/>}/>
          <Route path='users/:id' element={<UserPage/>}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;

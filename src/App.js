import logo from './logo.svg';
import './App.css';
import ItemsList from './pages/ItemsList';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AddItem from './pages/AddItem';

function App() {
  return (
    <div className="App">
      <Link to="/items">Items List</Link>
      <Link to="/additem">Add Item</Link>
      <Routes>
        <Route path="/additem" element={<AddItem/>}/>
        <Route path='/items' element={<ItemsList/>}/>
      </Routes>
    </div>
  );
}

export default App;

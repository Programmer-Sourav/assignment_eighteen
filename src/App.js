import logo from './logo.svg';
import './App.css';
import ItemsList from './pages/ItemsList';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import AddSale from './pages/AddSale';
import SalesList from './pages/SalesList';

function App() {
  return (
    <div className="App">
      <Link to="/items">Items List</Link>
      <Link to="/additem">Add Item</Link>
      <Link to="/addsale"> Add Sale</Link>
      <Link to="/sales"> Sales</Link>
      <Routes>
        <Route path='/edititem/:id' element={<EditItem/>}/>
        <Route path="/additem" element={<AddItem/>}/>
        <Route path='/items' element={<ItemsList/>}/>
        <Route path='/addsale' element={<AddSale/>}/>
        <Route path='/sales' element={<SalesList/>}/>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ListItem />}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;

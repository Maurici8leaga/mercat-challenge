import { Routes, Route } from 'react-router-dom';
import ListItem from './components/ListItem';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListItem />}/>
      </Routes>
    </>
  );
}

export default App;

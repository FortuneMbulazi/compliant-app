import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import PeopleList from './components/PeopleList';
import Search from './components/Search';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/PeopleList' element={<PeopleList />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Jokes' element={<Jokes />} />
      </Routes>
    </div>
  );
}

export default App;


import CountriesList from './CountriesList';
import DetailedCountry from './DetailedCountry';
import Header from './Header';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { AppProvider, GlobalContext } from '../context/GlobalProvider';
import { useContext } from 'react';

function Home() {

  const {theme} = useContext(GlobalContext)
  const {ModeBackground} = theme

  return (
    <div className="App"
     style={{backgroundColor:ModeBackground}}
     >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountriesList />} />
          <Route path='/:id' element={<DetailedCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;

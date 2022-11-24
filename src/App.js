import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilmPage from "./components/FilmPage/FilmPage";
import ColorPage from "./components/ColorPage/ColorPage.tsx";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <section className='main'>
        <Header />
        <div className='wrapper'>
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route path='/film' element={<FilmPage />}></Route>
            <Route path='/color' element={<ColorPage />}></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;

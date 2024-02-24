import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import SearchPage from './pages/search/SearchPage';
import ExplorePage from './pages/explore/ExplorePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from "react";
import { getDataFromAPI } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfig } from "./store/home/homeSlice";

const App = () => {
  const dispatch = useDispatch()

  const getConfigData = () => {
    // ref tmdb https://developer.themoviedb.org/reference/configuration-details

    getDataFromAPI('/configuration').then(data => {
      const originalSource = data.images.secure_base_url + 'original'

      const url = {
        backdrop: originalSource,
        poster: originalSource, 
        profile: originalSource, 
      }

      dispatch(getApiConfig(url)) // dispatch home slice
    })
  }

  useEffect(() => {

    // initiallize configuration for get image data [role of tmdb]
    getConfigData() 
  }, [])

  return (
    <BrowserRouter>
      <Header/> {/* --> header component */}

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:mediaType/:id" element={<DetailsPage/>}/>
        <Route path="/search/:query" element={<SearchPage/>}/>
        <Route path="/explore/:mediaType" element={<ExplorePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      
      <Footer/> {/* --> footer component */}
    </BrowserRouter>
  );
};

export default App;
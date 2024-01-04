import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import SearchPage from './pages/search/SearchPage';
import ExplorePage from './pages/explore/ExplorePage';
import NotFoundPage from './pages/notFound/NotFoundPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:mediaType/:id" element={<DetailsPage/>}/>
        <Route path="/search/:query" element={<SearchPage/>}/>
        <Route path="/explore/:mediaType" element={<ExplorePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
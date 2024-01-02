import {Routes, Route} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './pages/Layout/Layout';
import ProductContainer from './pages/Product/ProductContainer';
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProductContainer />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

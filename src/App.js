import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import CustomerReview from './Component/CustomerReview/CustomerReview';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<CustomerReview></CustomerReview>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;

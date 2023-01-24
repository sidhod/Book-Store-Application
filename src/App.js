
import './App.css';
import BookDetails from './Components/booksDetails';
import CustomerDetails from './Components/customerDetails';
import MyCart from './Components/mycart';
import Router1 from './Components/Router';
import WishList from './Components/wishList';
import Dashboard from './Pages/Dashboard/dashboard';
import LoginSiginPage from './Pages/Login&signin/loginsigin';

function App() {
  return (
    <div className="App">
      {/* <WishList /> */}
      <Router1 />
      {/* <LoginSiginPage /> */}
      {/* <Dashboard /> */}
      {/* <CustomerDetails /> */}
      {/* <MyCart /> */}
      {/* <BookDetails /> */}
    </div>
  );
}

export default App;

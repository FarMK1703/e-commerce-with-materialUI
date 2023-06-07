import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ProductFullInfo from "./pages/ProductFullInfo";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Cart from "./pages/Cart";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <SideBar />
                <Routes>
                    <Route path='/' element={<Catalog />} />
                    <Route path="/front=page" element={<FrontPage/>}/>
                    <Route
                        path='/product-full-info/:id'
                        element={<ProductFullInfo />}
                    />
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import All from './pages/All'
import Man from './pages/Man'
import Woman from './pages/Woman'
import Jewelery from './pages/Jewelery'
import Electronics from './pages/Electronics'
import Login from './pages/Login'
import Member from './pages/Member'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import UserInfo from './pages/UserInfo'
import "./App.scss";
import ProductDetail from './pages/ProductDetail'
import { useEffect } from 'react'
import { useProductStore } from './store/useProductStore'
import ProductListPage from './pages/ProductListPage'
import ProductList from './components/ProductList'

function App() {

  const onFetchItems = useProductStore((state) => state.onFetchItems)
  const items = useProductStore((state) => state.items);

  useEffect(() => {
    onFetchItems()
  }, [items])

  if (!items.length) return <div>로딩중...</div>

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 상세 페이지 */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/:category/:subCategory' element={<ProductList />} />

        <Route path="/all" element={<All />} />
        <Route path="/men" element={<Man />} />
        <Route path="/women" element={<Woman />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />

        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

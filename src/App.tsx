import { Navbar, Hero, ShopNow, Feature, Category, Products, HotDeal, Offer, Questions, Clients, Stories, Subscribe, Footer } from './components/PageList'
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopNow />
      <Feature />
      <Category />
      <Products />
      <HotDeal />
      <Offer />
      <Questions />
      <Clients />
      <Stories />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App

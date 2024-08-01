import Footer,{ Header } from "./Header.jsx"
import { Content } from "./Content.jsx"
// import Footer from "./Header.jsx"
import './layout.css'
  
  function Layout(){
    return <div className="a">
      <Header></Header>
      <Content/>
      <Footer/>
    </div>
  }
  
export default Layout
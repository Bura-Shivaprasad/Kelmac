import Navbar from './components/header/navbar'
import FormSection from './components/pages/landingpage/firstpage'
import SecondPage from './components/pages/second/secondpage'
import PricingCards from './components/pages/third/pricing'
import FourthPage from './components/fourth/fourthpage'
import Cards from './components/fifth/fifthpage'
import SixthPage from './components/sixth/sixthpage'
import SeventhPage from './components/seventh/seventhpage'
import './App.css'
import LastPage from './components/lastpart/last'

function App() {
  

  return (
    <>
    <div className='compo'>
     <Navbar />
     <FormSection />
     <div className='underline_color' style={{zIndex:'1000'}}></div>
     <SecondPage />
     <div className='underline_color after_second'  style={{zIndex:'1000'}}></div>  
     <PricingCards />
     <FourthPage />
      <Cards />
      <SixthPage />
      <SeventhPage />
      <LastPage />


     </div>
    </>
  )
}

export default App

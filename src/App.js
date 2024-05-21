import React from 'react'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import MotionThought from './components/thirdSection/motionThought';
import Review from './components/reviewSection/Review'
import PurchaseWand from './components/fourthSection/PurchaseWand';
import ApplyOn from './components/applyOnSection/ApplyOn';
import AllBrowsers from './components/allBrower/AllBrowsers';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
    <Navbar/>
    <div className='m-2'>
    <Header/>
    <MotionThought/>
     <Review/>
     <PurchaseWand/>
     <ApplyOn/>
     <AllBrowsers/>
     <Features/>
    </div>
    <Footer/>
   </>
  );
}

export default App;

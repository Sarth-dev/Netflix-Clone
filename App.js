/* eslint-disable no-unused-vars */
import Navbar from './component/Navbar';
import './App.css';
import Mid from './component/Mid';
import './component/phone.css';
import Window1 from './component/Window1';
import Window2 from './component/Window2';
import Window3 from './component/Window3';
import Window4 from './component/Window4';
import Faq from './component/Faq';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="body">
        <div className="back"></div>
        <Navbar />
        <Mid/>
        <Window1/>
        <Window2/>
        <Window3/>
        <Window4/>
        <Faq/>
        <Footer/>
      </div>

    </>
  );
}

export default App;

import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
    <Navbar count={count}/>
    <Header/>
    <Section  count={count} setCount={setCount}/>
    <Footer/>
    </div>
  )
}

export default App;

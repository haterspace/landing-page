import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import photo from './icons/ava.png';
import Info from './components/Info';
import Contacts from './components/Contacts';
import MyStack from './components/MyStack';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

const divBoxes = ['box1', 'box2', 'box3', 'box4'];

function App() {
  return (
    <>
      <NavBar />
      <Info />
      <Contacts />
      <MyStack />
      <FeedbackForm />

      {divBoxes.map((boxClass, i) => (
        <div key={i} className={boxClass} />
      ))}
      <img className='photo' src={photo} alt='Мое фото' />
      <div className='blur' />

      <Footer />
    </>
  );
}

export default App;

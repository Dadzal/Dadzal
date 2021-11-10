import React from 'react'
<<<<<<< Updated upstream
import Cardlist from '../../Components/Cards/Cardlist';
=======
import '../../App.css'
import HeroSection from '../../Components/HeroSection';
import CardForm from '../../Components/Cards/CardForm';
import Cardlist from '../../Components/Cards/Cardlist';
import Footer from '../Footer';
import { Link, animateScroll as Scroll } from 'react-scroll';
>>>>>>> Stashed changes

const  Home = () =>{
    return(
        <div className='container'>
<<<<<<< Updated upstream
=======
           <HeroSection/>
           <CardForm/>
>>>>>>> Stashed changes
           <Cardlist/>
        </div>
    )
}

export default Home;
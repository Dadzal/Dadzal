import React from 'react'
import '../../App.css'
import HeroSection from '../../Components/HeroSection';
import CardForm from '../../Components/Cards/CardForm';
import Cardlist from '../../Components/Cards/Cardlist';
import Footer from '../Footer';
import { Link, animateScroll as Scroll } from 'react-scroll';

const  Home = () =>{
    return(
        <div className='container'>
           <HeroSection/>
           <CardForm/>
           <Cardlist/>
        </div>
    )
}

export default Home;
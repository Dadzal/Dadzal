import React from 'react'
import CardForm from '../../Components/Cards/CardForm';
import Cardlist from '../../Components/Cards/Cardlist';
import Footer from '../Footer';

const  Home = () =>{
    return(
        <div className='container'>
            <CardForm/>
           <Cardlist/>
           <Footer/>
        </div>      
    )
}

export default Home;
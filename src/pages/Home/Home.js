import React from 'react'
import Cardlist from '../../Components/Cards/Cardlist';
import Footer from '../Footer';

const  Home = () =>{
    return(
        <div className='container'>
           <Cardlist/>
           <Footer/>
        </div>
    )
}

export default Home;
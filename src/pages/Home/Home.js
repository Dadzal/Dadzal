import React, {useState} from 'react'
import '../../App.css'
import HeroSection from '../../Components/HeroSection';
import Form from '../../Components/Cards/Form';
import Cardlist from '../../Components/Cards/Cardlist';
import Footer from '../Footer';

const  Home = () =>{

    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("")
    const [list, setList] = useState([
        {
            addressName:"Harare",
            country:"Zimbabwe"
        }
    ]);

    const handleSubmit = e =>{
        e.preventDefault();
        if(!address && !country) return;
        addToList(address, country);
        setAddress("")
        setCountry("")
    }

   const addToList = (address, country) =>{
       const newList = [...list, {
           addressName: address,
           country:country

       }];
       setList(newList);
   }

    return(
        <div className='container'>
            {}
           <HeroSection/>
           <Form handleSubmit={handleSubmit} country={country} setCountry={setCountry} address={address} setAddress={setAddress}/>
           <Cardlist list={list}/>
           <Footer/>
        </div>
    )
}

export default Home;
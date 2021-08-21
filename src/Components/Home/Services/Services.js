import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'
import { Card} from '@material-ui/core';


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=> res.json())
        .then(data =>setServices(data))
    },[])
    
    
    return (
        <section className='mt-5 pt-5  ' id='services'>
             <h3 className="text-center font-weight-bold mb-5"> Our services</h3>
            <Card className="w-100 d-flex gap flex-wrap" >      
            {
              services.map((data)=><ServiceCard data={data}></ServiceCard>)   
            }
       
        </Card>
        </section>
    );
};

export default Services;
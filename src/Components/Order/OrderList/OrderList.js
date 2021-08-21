import React from 'react';
import { useParams } from 'react-router-dom';
import OrderNav from '../OrderNav/OrderNav';

const ServiceList = () => {
    let { name } = useParams();

    // useEffect(()=>{
    //     fetch('https://murmuring-journey-43171.herokuapp.com/orders')
    //     .then(res=> res.json())
    //     .then(data =>setOrders(data))
    // },[])
    // const places = fakeData.find(placeName =>placeName.name === name);



    // useEffect(()=>{
    //     fetch('https://murmuring-journey-43171.herokuapp.com/orders?email='+loggedInUser.email)
    //     .then(res=> res.json())
    //     .then(data =>setOrders(data))
    // },[])
    
    return (
        <div className="container">
        <OrderNav name ={name}></OrderNav>
       <table class="table table-striped table-hover">
       <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        </table>
        </div>
    );
};

export default ServiceList;
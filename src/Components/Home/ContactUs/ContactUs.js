import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div style={{height:"700px"}} className="mt-5 contactForm bg-dark" id="contactUs">
            <div className=" pt-5 " >
            


            <div className=" p-5 m-auto w-50" >
                <form>
                

               

                <div className="row form-group">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"></input>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name">
                            </input>
                    </div>
                </div>
                <div className="form-group">
                    
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email Address"/>
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                </div>
                
                <div className="form-group">
                    
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" value="SUBMIT" className="d-block btn btn-info pr-5 pl-5"/>
                </form>

            </div>
        </div>
        <div className='pt-5 text-center text-light'>
        <small > &copy; Copyright 2021 Creative Photography. All rights reserved.</small>
        </div>
        </div>
    );
};

export default ContactUs;
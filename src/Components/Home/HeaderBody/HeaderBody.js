import React from 'react';
import frame from '../../../images/logos/frame.png';
const HeaderBody = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-4 mt-5 ">
                    <h1 className="font-weight-bold"> Click your Own Photograph </h1>
                    <small >Photographer & Filmmaker. Lover of coffee and good stories. Currently residing in Toronto, Canada running self-titled channel on YouTube; Md. Santo. </small>

                        <br/>

                    <button className="btn btn-dark mt-5">Hire Me</button>
                </div>

                <div className="col-md-7 offset-md-1 d-block">
                    <img className="img-fluid d-block w-100" src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;
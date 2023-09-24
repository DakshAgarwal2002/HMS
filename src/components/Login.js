import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import sicu_aura_logo_removebg3 from '../images/sicu-aura_logo-removebg3.png'
import sicu_aura_logo_removebg2 from '../images/sicu-aura_logo-removebg2.png'
import image12 from '../images/image12.png'
import './Login.css'
const Login = () => {
    let history=useNavigate()
    const [info, setInfo] = useState({
        hospital_name:"",
        email_id:"",
        password:"",
        access_code:""
    })
      const handleSubmit = async (e) => {
        e.preventDefault();
        // https://hms-backend1.onrender.com
        // http://localhost:5000
        const response = await fetch('https://hms-backend1.onrender.com/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({hospital_name:info.hospital_name,email_id:info.email_id,password:info.password}),
      });
      const json=await response.json();
      console.log(json);
      if(json.success){
        history("/access-webcam")
    }
    }
    
   
      const gotoSignup=()=>{
        history("/");
      }
  return (
    <div className='register-wrapper'>
    <div className='register-div'>
        <div className='register-left'>
            <img className="register_img1" src={sicu_aura_logo_removebg3}></img>
            <img className="register_img2" src={sicu_aura_logo_removebg2}></img>
            <div className='motto'>
            Feel <span>Safe</span> Everywhere
            </div>
            <p className='hash'>
                #Safe-<span>T</span>-Fast
            </p>
        </div>
        <div className='register-right'>
            <img className="image12" src={image12}></img>
            <div className='signup-form-heading'><span id='signup_span' onClick={gotoSignup}>Sign Up </span>/ <span id='login_span'>Login</span></div>
            <form action="" className="form-container" onSubmit={handleSubmit}>
            <div className='login-form'>
                <h4>Welcome to Sicu-aura</h4>
                <p>Your one stop safety solutions using innovative technology</p>
                <input type='text' name='hospital_name' placeholder='Hospital Name' 
                    onChange={(e) =>setInfo({ ...info, hospital_name: e.target.value })}></input>
                <input type='text' name='email_id' placeholder='Email ID'
                    onChange={(e) =>setInfo({ ...info, email_id: e.target.value })}></input>
                <input type='text' className='password' name='password' placeholder='Password'
                    onChange={(e) =>setInfo({ ...info, password: e.target.value })}></input>
                <input type='text' className='access_code' name='access_code' placeholder='Special Access Code'
                    onChange={(e) =>setInfo({ ...info, access_code: e.target.value })}></input>
            </div>
            <button className='submit_button' type='submit'>Login</button>
            </form>
            <ul className='policy'>
            <li>Terms and Condition privacy policy</li>
            </ul>   
        </div>
        
    </div>
    </div>
  )
}

export default Login
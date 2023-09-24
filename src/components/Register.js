import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import sicu_aura_logo_removebg3 from '../images/sicu-aura_logo-removebg3.png'
import sicu_aura_logo_removebg2 from '../images/sicu-aura_logo-removebg2.png'
import image12 from '../images/image12.png'
import Checkmark from '../images/Checkmark.png'
import './Register.css'

const Register = () => {
    let history=useNavigate()
    const [info, setInfo] = useState({
        hospital_name:"",
        email_id:"",
        address:"",
        phone_number:"",
        city:"",
        hospital_registration_number:"",
        state:"",
        emergency_ward_number:"",
        pincode:"",
        registration_certificate:"",
        hospital_registration_date:"",
        available_ambulance:"",
        password:"",
        cpassword:""
    })
    function showname () {
        var reader=new FileReader;
        
        var name = document.getElementById('fileInput'); 
        reader.readAsDataURL(name.files[0])
        reader.onload=()=>{
            setInfo({...info,registration_certificate:reader.result})
        }
        document.getElementById('fileOutput').value=name.files.item(0).name;
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(info.password!=info.cpassword)
        alert("Password and confirm password do not match");
    else{
        // https://hms-backend1.onrender.com
        // http://localhost:5000
        const response = await fetch('https://hms-backend1.onrender.com/api/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({hospital_name:info.hospital_name,email_id:info.email_id,address:info.address,
        phone_number:info.phone_number,city:info.city,hospital_registration_number:info.hospital_registration_number,
        state:info.state,emergency_ward_number:info.emergency_ward_number,pincode:info.pincode,registration_certificate:info.registration_certificate,
        hospital_registration_date:info.hospital_registration_date,available_ambulance:info.available_ambulance,password:info.password,
    cpassword:info.cpassword}),
    });
    const json=await response.json();
    console.log(json);
    if(json.success)
    {
        setInfo({hospital_name:"",
        email_id:"",
        address:"",
        phone_number:"",
        city:"",
        hospital_registration_number:"",
        state:"",
        emergency_ward_number:"",
        pincode:"",
        registration_certificate:"",
        hospital_registration_date:"",
        available_ambulance:"",
        password:"",
        cpassword:""})
        document.getElementById('modal-background').style.visibility="visible";
        await setTimeout(()=>{
            document.getElementById('modal-background').style.visibility="hidden";
            history('/login')
        },2000);
        
    }
        
    }
      }
      const gotoLogin=()=>{
        history("/login");
      }
  return (
    <div className='register-wrapper'>
        <div id="modal-background" className='modal-background'>
        <div id="success_modal" className='success_modal'>
        <img className="checkmark" src={Checkmark}></img>
        <div>Your Registration has been Successful</div>
        </div>
        </div>
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
            <div className='signup-form-heading'><span className='signup_span'>Sign Up </span>/ <span id='login' onClick={gotoLogin}>Login</span></div>
            <form action="" className="form-container" onSubmit={handleSubmit}>
            <div className='signup-form'>
                
                <div className='row1'>
                    <input type='text' name='hospital_name' placeholder='Hospital Name' 
                    onChange={(e) =>setInfo({ ...info, hospital_name: e.target.value })}></input>
                    <input type='text' name='address' placeholder='Address'
                    onChange={(e) =>setInfo({ ...info, address: e.target.value })}></input>
                    <input type='text' name='city' placeholder='City'
                    onChange={(e) =>setInfo({ ...info, city: e.target.value })}></input>
                    <input type='text' name='state' placeholder='State'
                    onChange={(e) =>setInfo({ ...info, state: e.target.value })}></input>
                    <input type='number' name='pincode' placeholder='Pincode'
                    onChange={(e) =>setInfo({ ...info, pincode: e.target.value })}></input>
                    <input type='date' name='hospital_registration_date' placeholder='Hospital Registration Date'
                    onChange={(e) =>setInfo({ ...info, hospital_registration_date: e.target.value })}></input>
                    <input type='number' name='available_ambulance' placeholder='Number Of Ambulance available'
                    onChange={(e) =>setInfo({ ...info, available_ambulance: e.target.value })}></input>
                </div>
                <div className='row2'>
                    <input type='email' name='email_id' placeholder='Email ID'
                    onChange={(e) =>setInfo({ ...info, email_id: e.target.value })}></input>
                    <input type='number' name='phone_number' placeholder='Phone Number'
                    onChange={(e) =>setInfo({ ...info, phone_number: e.target.value })}></input>
                    <input type='text' placeholder='Hospital Registration Number' name='hospital_registration_number'
                    onChange={(e) =>setInfo({ ...info, hospital_registration_number: e.target.value })}></input>
                    <input type='number' name='emergency_ward_number' placeholder='Emergency-Ward Number'
                    onChange={(e) =>setInfo({ ...info, emergency_ward_number: e.target.value })}></input>
                    <input type='text' id="fileOutput" name='registration_certificate' placeholder='Registration certificate Upload'></input>
                    <div className="custom-file-upload">
                    <label>
                        <input type="file" id="fileInput" onChange={showname}></input>
                        Choose
                    </label>
                    </div>
                    <input type='text' className='password' name='password' placeholder='Create Password'
                    onChange={(e) =>setInfo({ ...info, password: e.target.value })}></input>
                    <input type='text' name='cpassword' placeholder='Confirm Password'
                    onChange={(e) =>setInfo({ ...info, cpassword: e.target.value })}></input>
                </div>
            </div>
            <button className='submit_button' type='submit'>Sign Up</button>
            </form>
            <ul className='policy'>
            <li>Terms and Condition privacy policy</li>
            </ul>   
        </div>
        
    </div>
    </div>
  )
}

export default Register
import React,{useState,useEffect,useRef} from 'react'
import Webcam from 'react-webcam'
import {useNavigate} from 'react-router-dom'
import sicu_aura_logo_removebg3 from '../images/sicu-aura_logo-removebg3.png'
import sicu_aura_logo_removebg2 from '../images/sicu-aura_logo-removebg2.png'
import image12 from '../images/image12.png'
import mdi_camera from '../images/mdi_camera.png'
import './Capture.css'
const Capture = () => {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [image,setImg]=useState(null);
    const webRef = useRef(null)
  useEffect(() => {
    checkCameraPermission();
  });
  let history=useNavigate()
  const checkCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      setCameraPermission(true);
    } catch (error) {
      setCameraPermission(false);
    }
  };

    
    const handleCapture = async (e) => {
        e.preventDefault();
        setImg(webRef.current.getScreenshot());
    }
    
    const handleRetake = async (e) => {
        e.preventDefault();
        setImg(null);
    }

    const handleContinue = async (e) => {
        history("/main");
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
            {/* <form action="" className="form-container" onSubmit={handleSubmit}>
            <div className='login-form'>
                <h4>Welcome to Sicu-aura</h4>
                <p>Your one stop safety solutions using innovative technology</p>
                <input type='text' name='hospital_name' placeholder='Hospital Name' 
                    onChange={(e) =>setInfo({ ...info, hospital_name: e.target.value })}></input>
                <input type='text' name='email_id' placeholder='Email ID'
                    onChange={(e) =>setInfo({ ...info, email_id: e.target.value })}></input>
                <input type='text' className='password' name='password' placeholder='Create Password'
                    onChange={(e) =>setInfo({ ...info, password: e.target.value })}></input>
                <input type='text' className='access_code' name='access_code' placeholder='Special Access Code'
                    onChange={(e) =>setInfo({ ...info, access_code: e.target.value })}></input>
            </div>
            
            </form> */}
            <div className='capture_wrapper'>
                <p>Please Capture our face to continue</p>
                
                <div>
                    {
                        image!==null && <img src={image}></img>
                        // <p>1</p>
                    }
                {
                    image==null && cameraPermission === false || cameraPermission === null && <img className="mdi_camera" src={mdi_camera}></img>
                }
                { image==null && cameraPermission === true && <Webcam ref={webRef}
                height={450}
                width={514}
                />}
                
                </div>
            </div>
            {
                image==null && <button className='submit_button' onClick={handleCapture}>Capture</button> 
            }
            {image!=null && <div className='recapture_choice'>
            <button className='submit_button retake_button' onClick={handleRetake}>Re-take</button>
            <button className='submit_button' onClick={handleContinue}>Continue</button>
            </div>}
            
            <ul className='policy'>
            <li>Terms and Condition privacy policy</li>
            </ul>   
        </div>
        
    </div>
    </div>
  )
}

export default Capture
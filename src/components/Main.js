import React, { useEffect, useState } from 'react'
import './Main.css'
import sicu_aura_logo_removebg_navbar from '../images/sicu-aura_logo-removebg-navbar.png';
import sicu_aura_logo_navbar from '../images/sicu-aura_logo-navbar.png';
import Ellipse40 from '../images/Ellipse40.png';
import image18 from '../images/image18.png';
import fe_search from '../images/fe_search.png';
import octicon_filter16 from '../images/octicon_filter16.png';
const Main = () => {
    var count=0;
    const [hospitals, sethospitals] = useState([])
    const [search, setSearch] = useState("")
    const [click, setclick] = useState(0);
    useEffect(() => {
        gethospitals();
    },[])
    const handlesearch = ()=>{
        setclick(1);
    }
    const gethospitals = async () => {
        // https://hms-backend1.onrender.com
        // http://localhost:5000
        const response = await fetch(`https://hms-backend1.onrender.com/api/auth/gethospitals`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json()
        // console.log(json)
        sethospitals(json); 
        console.log(hospitals)
    }

    return (
        <div className='main_container'>
            <div className='navbar'>
                <div className='navbar_body'>
                    <div>
                        <img src={sicu_aura_logo_navbar}></img>
                        <img src={sicu_aura_logo_removebg_navbar}></img>
                    </div>
                    <div>
                        <img src={Ellipse40} className='float_right'></img>
                        <p>Alex Robinson</p>
                        <button>Log out</button>
                    </div>
                </div>
            </div>
            <div className='main_body'>
                <img className='image18' src={image18}></img>
                <img className='fe_search' src={fe_search}></img>
                <div className='table_title'>Hospital Registrations</div>
                <div className='search_and_sort'>
                    <input type='text' placeholder='search' onChange={(e)=>setSearch(e.target.value)} onClick={handlesearch}></input>
                    <div >
                        <img className="octicon_filter16" src={octicon_filter16} ></img>
                    </div>
                </div>
                <div className='table_container'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th className='first-col'>No.</th>
                                <th>Date & Time</th>
                                <th>Hospital Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone No.</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Pincode</th>
                                <th>Hospital Registration Date</th>
                                <th>Hospital Registration Number</th>
                                <th>Hospital Registration Photo</th>
                                <th>Emergency-Ward Number</th>
                                <th className='last-col'>Number of Ambulance</th>
                            </tr>
                        </thead>
                        <tbody>
                        {search=="" && hospitals.map((hospital)=>{
                            count++;
return <tr key={hospital._id}>
    <td className='first-col'>{count}.</td>
 <td>{hospital.date}</td>
 <td>{hospital.hospital_name}</td>
 <td>{hospital.email_id}</td>
 <td>{hospital.address}</td>
 <td>{hospital.phone_number}</td>
 <td>{hospital.city}</td>
 <td>{hospital.state}</td>
 <td>{hospital.pincode}</td>
 <td>{hospital.hospital_registration_date}</td>
 <td>{hospital.hospital_registration_number}</td>
 <td>File</td>
 <td>{hospital.emergency_ward_number}</td>
 <td className='last-col'>{hospital.available_ambulance}</td>
</tr>
})}
{
    click==1 && search!="" && hospitals.filter((hospital)=>{
        return (hospital.hospital_name.includes(search));
}).map((hospital)=>{
    count++;
    return <tr key={hospital._id}>
<td className='first-col'>{count}.</td>
<td>{hospital.date}</td>
<td>{hospital.hospital_name}</td>
<td>{hospital.email_id}</td>
<td>{hospital.address}</td>
<td>{hospital.phone_number}</td>
<td>{hospital.city}</td>
<td>{hospital.state}</td>
<td>{hospital.pincode}</td>
<td>{hospital.hospital_registration_date}</td>
<td>{hospital.hospital_registration_number}</td>
<td>File</td>
<td>{hospital.emergency_ward_number}</td>
<td className='last-col'>{hospital.available_ambulance}</td>
</tr>
})
}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main
import QRCode from "qrcode";
// import { useEffect, useState } from "react";
import { useState } from "react";

const Data = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const generateQrCode = async(e) => {
        e.preventDefault();
        try{
            const response = await QRCode.toDataURL("First Name: " + (firstName) + " Last Name: " + (lastName) + " Age: " + (age));
            setImageUrl(response);
        } catch(error) {
            console.log(error);
        }
    }
    // const resetForm = () => {
    //     this.setState({
    //         generateQrCode: [{}]
    //     });
    //   };
        
      
    return(
        <>
        <h1> Hello from Data </h1>
        <form onSubmit={generateQrCode}>
            <label htmlFor="fname">First name:
            <input type="text" id="fname" name="fname" onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label htmlFor="lname">Last name:
            <input type="text" id="lname" name="lname" onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <select onChange={(e) => setAge(e.target.value)}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <div>
            {imageUrl 
            ? (<img src={imageUrl} alt="qrcode" />) 
            : null}
            </div>
            <button> Submit</button>
            <input type="reset"/> 
        </form>


        </>
    )
}


export default Data;



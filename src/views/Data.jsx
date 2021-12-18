import '../App.css';
import * as React from 'react';
import QRCode from "qrcode";
import { Card, TextField } from '@material-ui/core';
import { useState } from "react";
import emailjs from 'emailjs-com';
// import { countries } from "../countries";

// import moment from 'moment';

const Data = () => {
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [hausNo, setHausNo] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [birth, setBirth] = useState('');
    const [mobile, setMobile] = useState('');
    const [eMail, setEmail] = useState('');
    // const [idNo, setIdNo] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    
    // const today = moment();
    // const disableFutureDt = current => {
    //   return current.isBefore(today)
    // }
const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER} = process.env;
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm(
        `${REACT_APP_SERVICE}`, 
        `${REACT_APP_TEMPLATE}`,
        e.target, 
        `${REACT_APP_USER}`
        ).then (res => {
          console.log(res);
      }).then (generateQrCode
        ).catch(err => console.log(err));
    }

    const generateQrCode = async(e) => {

        try{
            const response = await QRCode.toDataURL(
              "Vorname*: \n" + (firstName) + '\n'
              + "Last Name: \n" + (lastName) + '\n'
              + "Geschlecht: \n" + (sex) + '\n'
              + "Addresse: \n" + (address) + " " + (hausNo) + '\n'
              + "PLZ: \n" + (zip) + '\n' 
              + "Ort: " + (city) + '\n'
              + "Land: \n" + (country) + '\n'
              + "Geburtsdatum: \n" + (birth)  + '\n'
              + "Handy Nummer: \n" + (mobile) + '\n' 
              + "EMail: \n" + (eMail) + '\n'
              + "                              ."             
              );
            setImageUrl(response);
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    };

    // function resetForm(e) {
    //   e.target.reset();
    // }
    const [date] = useState(new Date());

    // time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    // const currentTime = useState(time);

    return(
        <>
        <div className="card-header mt-5">
          <h1>Schnelltest Zahnzentrum Dr. Hijazi</h1>
          <h1 className="ms-5 mt-5 mb-5"> COVID Test </h1>
        </div>
        <Card className="container mb-5 card-form">
        <form className="form-base" onSubmit={sendEmail}>
        <TextField
              style={{display: "none"}}
              type="text"
              name="time"
              value={date.toLocaleString('de-de', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour24: true, 
            })} />
            
          <div>
          <label className="genderLabel" htmlFor="gender">Geschlecht*</label>
            <select  
              name="gender" 
              id="gender" 
              className="form-select formSelect form-select-lg" 
              aria-label="gender"
              onChange={(e) => setSex(e.target.value)} 
              required>
                <option value={null}></option>
                <option value="Unbekannt">Unbekannt</option>
                <option value="Männlich">Männlich</option>
                <option value="Weiblich">Weiblich</option>
            </select>
          </div>
          <div>
          <TextField
              type="text"
              helperText="Bitte geben Sie Ihren Vornamen ein"
              id="firstName"
              name="fname"
              label="Vorname"
              onChange={(e) => setFirstName(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="text"
              helperText="Bitte geben Sie ihren Nachnamen ein"
              id="lastName"
              name="lname"
              label="Nachname"
              onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="text" 
              className="me-3"
              helperText="Straße"
              id="inputAddress"
              label="Straße"
              name="address"
              onChange={(e) => setAddress(e.target.value)} required/>
              <TextField
              type="text" 
              helperText="Hausnummer"
              id="inputHausNo"
              name="hnummber"
              label="Hausnummer"
              onChange={(e) => setHausNo(e.target.value)} required/>
          </div>
          <div>
          {/* <input id="zip" name="zip" type="text" pattern="[0-9]*"> */}
          <TextField
              type="number" 
              className="me-3"
              helperText="PLZ"
              id="inputZip"
              name="zip"
              label="Plz"
              onChange={(e) => setZip(e.target.value)} required/>
              <TextField
              type="text" 
              helperText="Ort"
              id="inputCity"
              name="city"
              label="Ort"
              onChange={(e) => setCity(e.target.value)} required/>
          </div>
          <div>
          <TextField 
              type="text"
              helperText="Land"
              id="inputCountry"
              name="country"
              label="Land"
              onChange={(e) => setCountry(e.target.value)} required/>
          </div>

          {/* <div>
          <label htmlFor="country">Land*</label>
            <Select  
              name="country" 
              options={countries}
              // className="form-select formSelect form-select-lg" 
              aria-label="Land"
              onChange={(e) => setCountry(e.target.value)} 
              required

            />
          </div> */}
          <div>
          <TextField
              type="date" 
              helperText="Geburtsdatum"
              id="inputBirth"
              name="dob"
              onChange={(e) => setBirth(e.target.value)} 
              required/>
          </div>
          <div>
          <TextField 
              type="text"
              min="0"
              helperText="Handynummer"
              id="inputHandyNr"
              label="Handynummer"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}/>
          </div>
          <div>
          <TextField
              type="email" 
              helperText="E-Mail-Adresse"
              id="inputEMail"
              name="email"
              label="E-Mail-Adresse"
              onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          {/* <div>
          <TextField
              type="text" 
              helperText="Ausweisnummer"
              id="inputID"
              name="idnummber"
              label="Ausweisnummer"
              onChange={(e) => setIdNo(e.target.value)} required/>
          </div> */}
          <div>
          <button className="btn btn-primary me-2 mt-2" type="submit">Submit</button>
            <input className="btn btn-secondary mt-2" type="reset" />  
          </div>
          <p className="h5 pflichtfeld mt-4">* Pflichtfeld</p>
          <div>
              {imageUrl 
              ? (
                  <>
                  <div>
                    <h3>Dankeschön</h3>
                  </div>
                  <div>
                    <img src={imageUrl} alt="qrcode" />
                  </div>
                  </>
                ) 
              : null}
          </div>
        </form>
  
        </Card>
        </>
    )
};

export default Data;
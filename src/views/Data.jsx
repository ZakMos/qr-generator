import * as React from 'react';
import QRCode from "qrcode";
import { Card, TextField } from '@material-ui/core';
import { useState } from "react";

const Data = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [hausNo, setHausNo] = useState('');
    const [plz, setPlz] = useState('');
    const [city, setCity] = useState('');
    const [birth, setBirth] = useState('');
    const [mobile, setMobile] = useState('');
    const [eMail, setEmail] = useState('');
    const [idNo, setIdNo] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    
    const generateQrCode = async(e) => {
        e.preventDefault();
        try{
            const response = await QRCode.toDataURL(
              "Vorname*: \n" + (firstName) + '\n'
              + "Last Name: \n" + (lastName) + '\n'
              + "Geschlecht: \n" + (sex) + '\n'
              + "Addresse: \n" + (address) + " " + (hausNo) + '\n'
              + "PLZ: \n" + (plz) + '\n' 
              + "Ort: " + (city) + '\n'
              + "Land: \n" + (country) + '\n'
              + "Geburtsdatum: \n" + (birth)  + '\n'
              + "Handy Nummer: \n" + (mobile) + '\n' 
              + "EMail: \n" + (eMail) + '\n'
              + "Ausweisnummer: \n" + (idNo) + '\n'
              + "                              ."             
              );
            setImageUrl(response);
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    } 
    return(
        <>
        <div className="mt-5 mb-5"></div>
        <Card>
            <h1> COVID Test </h1>
        </Card>
        <div className="mt-5 mb-5"></div>
        <Card>
        <form onSubmit={generateQrCode} className="p-5">
          <div>
          <label htmlFor="gender">Geschlecht:</label>
            <select  
              name="gender" 
              id="gender" 
              className="form-select form-select-lg mb-3" 
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
              label="Vorname"
              onChange={(e) => setFirstName(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="text" 
              helperText="Bitte geben Sie ihren Nachnamen ein"
              id="lastName"
              label="Nachname"
              onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="text" 
              helperText="Straße"
              id="inputAddress"
              label="Straße"
              onChange={(e) => setAddress(e.target.value)} required/>
              <TextField
              type="number" 
              className="ms-3"
              helperText="Hausnummer"
              id="inputHausNo"
              label="Hausnummer"
              onChange={(e) => setHausNo(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="number" 
              helperText="PLZ"
              id="inputPlz"
              label="Plz"
              onChange={(e) => setPlz(e.target.value)} required/>
              <TextField
              type="text" 
              className="ms-3"
              helperText="Ort"
              id="inputCity"
              label="Ort"
              onChange={(e) => setCity(e.target.value)} required/>
          </div>
          <div>
          <TextField 
              type="text"
              helperText="Land"
              id="inputCountry"
              label="Land"
              onChange={(e) => setCountry(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="date" 
              helperText="Geburtsdatum"
              id="inputBirth"
              onChange={(e) => setBirth(e.target.value)} required/>
          </div>
          <div>
          <TextField 
              type="number"
              helperText="Handy Nr."
              id="inputHandyNr"
              label="Handy Nr."
              onChange={(e) => setMobile(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="email" 
              helperText="E-Mail"
              id="inputEMail"
              label="E-Mail"
              onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
          <TextField
              type="number" 
              helperText="Ausweisnummer"
              id="inputID"
              label="Ausweisnummer"
              onChange={(e) => setIdNo(e.target.value)} required/>
          </div>
          <div>
              {imageUrl 
              ? (<img src={imageUrl} alt="qrcode" />) 
              : null}
          </div>
          <button className="btn btn-primary me-2 mt-2">Submit</button>
          <input className="btn btn-secondary mt-2" type="reset"/>  
        </form>
        </Card>
        </>
    )
};

export default Data;



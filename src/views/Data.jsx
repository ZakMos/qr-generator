import * as React from 'react';
import QRCode from "qrcode";
import CountrySelect from "./CountrySelect";
import { Card, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

import { useState } from "react";

const Data = () => {
    const nodeRef = React.useRef(null);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    

    const generateQrCode = async(e) => {
        e.preventDefault();
        try{
            const response = await QRCode.toDataURL(
                "Vorname*: " + (firstName) + '\n'
                + "Last Name: " + (lastName) + '\n'
                + "Geschlecht: " + (sex));
            setImageUrl(response);
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
        <form onSubmit={generateQrCode}>
            <div>
          
            <InputLabel htmlFor="geschlecht">Geschlecht</InputLabel>
            <Select 
                ref={nodeRef}
                id="geschlecht"
                value={sex}
                onChange={(e) => setSex(e.target.value)} required
            >
                <MenuItem value=""><em>Unbekannt</em></MenuItem>
                <MenuItem value="Männlich">Männlich</MenuItem>
                <MenuItem value="Weiblich">Weiblich</MenuItem>
            </Select>

            </div>
            <div>
            <TextField
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                label="Vorname"
                onChange={(e) => setFirstName(e.target.value)} required/>
            </div>
            <div>
            <TextField 
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                label="Nachname"
                onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            <div>
                < CountrySelect />
            </div>
            <div>
                {imageUrl 
                ? (<img src={imageUrl} alt="qrcode" />) 
                : null}
            </div>
            <button className="btn btn-primary me-2 mt-2">Submit</button>

            <input className="btn btn-secondary mt-2" type="reset"/> 
            </form>
        </>
    )
}


export default Data;



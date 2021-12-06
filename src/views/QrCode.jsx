import QRCode from "qrcode";
import * as React from "react";


const QrCode = (generateQrCode) => {
    const [url, setUrl] = React.useState('');
    const [imgUrl, setImgUrl] = React.useState("");

    const generateQrCode1 = async(e) => {
        e.preventDefault();
        try{
            const result = await QRCode.toDataURL(url);
            setImgUrl (result);
        } catch(error) {
            console.log(error);
        }
    }       
          
    return(
        <>
        <br/>
        <div> Hello from Test </div>
        <form onSubmit={generateQrCode1}>
            <label>
                First name:
                <input 
                type="text" 
                id="fname" 
                name="fname" 
                value={url.value}
                onChange={(e) => setUrl(e.target.value)}/>
            </label>
            <button> Submit</button>
        </form>
        <div> {imgUrl 
            ? (<img src={imgUrl} alt="qrcode" />) 
            : null}</div>
        </>
    )   
};

export default QrCode;
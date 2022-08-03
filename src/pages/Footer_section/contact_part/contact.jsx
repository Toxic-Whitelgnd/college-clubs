
import "../contact_part/contact.css"
import React, { useState,useRef } from 'react';
import * as Siico from "react-icons/si"
import * as Mdico from "react-icons/md"
import {Button} from "react-bootstrap"

import { Alert } from '@mui/material';

import emailjs from '@emailjs/browser';

export default function Contact() {



  const [clubownername, setclubownername] = useState('');
  const [clubname, setclubname] = useState('');
  const [clubemail, setclubemail] = useState('');
  const [clubcontact, setclubcontact] = useState('');
  const [clubtype, setclubtype] = useState('');
  const [clubdescription,setclubdescription] = useState('');


  const detailsvalidationfunc = () => {
    if (clubownername,clubemail,clubtype,clubname,clubcontact, clubdescription === ''){
      window.alert("Please enter your details")
      
    }
    else{
      const clubdetails = {
        'cowner':clubownername,
        'cname':clubname,
        'ctype':clubtype,
        'cdesc':clubdescription,
        'cmail':clubemail,
        'ccontact':clubcontact,
        
      }

      console.log(clubdetails);
      console.log(clubdetails['cmail']);
      var email = clubdetails['cmail'];
      var mobilenum = clubdetails['ccontact'];

      // for validation
      emailandmobilevalidation(email,mobilenum,clubdetails);
  

    }
  }

  const emailandmobilevalidation = (email,mobilenum,clubdetails) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobformat = ('[0-9]{10}')
    if(email.match(mailformat) &&  (mobilenum.match(mobformat))) {
      console.log("valid email and mobilenumber")
      sendfunc(clubdetails);
    }
    else{
      alert('Please enter a valid mailformat or check your mobilenumber')
    }
  }



  const sendfunc = (clubdetails) => {
    
    
    <Alert severity="error" variant="outlined" color="error" >wtf not working !!</Alert>

    console.log(clubdetails);

    // need to pass the data to the server

    // needd to stringify the data into json
    var clubdetails = JSON.stringify(clubdetails);
    console.log(clubdetails);


  }
 
  const cleardetails = () => {
    // clubdescription = '',
    console.log("came to clear section")

 

    // this is the part we are clearing the data fields
    setclubdescription("")
    setclubownername("")
    setclubname("")
    setclubemail("")
    setclubtype("")
    setclubcontact("")
    setclubdescription("")

  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8ypxfs', 'template_2qbic2q', form.current, 'FaIW_sH1b_l1x5lcS')
      .then((result) => {
          console.log(result.text);
          window.alert("Your Response has been sumbited! 😎");
          cleardetails();
      }, (error) => {
          console.log(error.text);
      });
  };
  


  return (
    

    <div className="contactus">
      <section className="contact-card">
      <div className="conatainer">
        <div className="contactinfo">
          <div>
            <h2>Contact info</h2>
            <ul className="info">
              <li>
                <span ><Mdico.MdLocationPin id="loc" /></span>
                <span>Bangalore,India</span>
              </li>
              <li>
                <span><Siico.SiGmail  id="loc"/></span>
                <span>akatsukiorganisation999@gmail.com</span>
              </li>
              <li>
                <span><Mdico.MdPhone id="loc" /></span>
                <span>91+ 8610683202 </span>
              </li>


            </ul>
            </div>
            <ul className="sci">
                <li><a href='https://www.facebook.com/TheBestBrotherEver/'><Siico.SiFacebook className="socials1"/></a></li>
                <li><a href='https://www.instagram.com/t_a_r_u_n_s_k_/'><Siico.SiInstagram className="socials1"/></a></li>
                <li><a href='https://www.linkedin.com/in/tarun-s-k-737349207/'><Siico.SiLinkedin className="socials1"/></a></li>
                <li><a href='https://twitter.com/home'><Siico.SiTwitter className="socials1"/></a></li>
            </ul>

          
      </div>
      <div  className="contactform">
        <h2>Want to Display your club?</h2>
        <form ref={form} onSubmit={sendEmail}>
        <div className="formbox">
          <div className="inputBox w50">
            <input type="text" value={clubownername}  onChange={e => setclubownername(e.target.value)} name="clubownername"  required />
            <span>ClubOwnerName</span>
          </div>
          <div className="inputBox w50">
            <input type="tel" value={clubcontact} minLength="10" maxLength="10" onChange={e => setclubcontact(e.target.value)} name="clubcontact" required />
            <span>Contact Number</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubname} onChange={e => setclubname(e.target.value)} name="clubname" required />
            <span>ClubName</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubtype} onChange={e => setclubtype(e.target.value)} name="clubtype" required />
            <span>ClubType</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubemail} onChange={e => setclubemail(e.target.value)} name="clubemail" required />
            <span>Email</span>
          </div>
          <div className="inputBox w100">
            <textarea type="text" value={clubdescription} onChange={e => setclubdescription(e.target.value)} name="clubdescription" required />
            <span>ClubDecsription</span>
          </div>
          <div className="inputBox w50">
            <Button type="sumbit" onClick={detailsvalidationfunc} variant="primary">Send</Button>
          </div>
        </div>
        </form>
      </div>
    

    
    </div>
    </section>
    </div>
  );
}





import "../contact_part/contact.css"
import React, { useState } from 'react';
import * as Siico from "react-icons/si"
import * as Mdico from "react-icons/md"
import {Button} from "react-bootstrap"

import { Alert } from '@mui/material';



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

    window.alert("Your Response has been sumbited! 😎");
    
    
   
    // needd to stringify the data into json
    var clubdetails = JSON.stringify(clubdetails);
    console.log(clubdetails);

    

    // need to clear the data fields
    cleardetails(clubdetails);

  }
 
  const cleardetails = (clubdetails) => {
    // clubdescription = '',
    console.log("came to clear section")

    // this is for debugging purposes
    var clubdetails = JSON.parse(clubdetails);
    console.log(clubdetails["cowner"]);

    // this is the part we are clearing the data fields
    setclubdescription("")
    setclubownername("")
    setclubname("")
    setclubemail("")
    setclubtype("")
    setclubcontact("")
    setclubdescription("")

  }

  


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
                <span>akatsuki99@gmail.com</span>
              </li>
              <li>
                <span><Mdico.MdPhone id="loc" /></span>
                <span>91+ 345345353 </span>
              </li>


            </ul>
            </div>
            <ul className="sci">
                <li><a href='#'><Siico.SiFacebook className="socials1"/></a></li>
                <li><a href='#'><Siico.SiInstagram className="socials1"/></a></li>
                <li><a href='#'><Siico.SiLinkedin className="socials1"/></a></li>
                <li><a href='#'><Siico.SiTwitter className="socials1"/></a></li>
            </ul>

          
      </div>
      <div  className="contactform">
        <h2>Want to Display your club?</h2>
        <div className="formbox">
          <div className="inputBox w50">
            <input type="text" value={clubownername}  onChange={e => setclubownername(e.target.value)} name="" required />
            <span>ClubOwnerName</span>
          </div>
          <div className="inputBox w50">
            <input type="tel" value={clubcontact} minLength="10" maxLength="10" onChange={e => setclubcontact(e.target.value)} name="" required />
            <span>Contact Number</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubname} onChange={e => setclubname(e.target.value)} name="" required />
            <span>ClubName</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubtype} onChange={e => setclubtype(e.target.value)} name="" required />
            <span>ClubType</span>
          </div>
          <div className="inputBox w50">
            <input type="text" value={clubemail} onChange={e => setclubemail(e.target.value)} name="" required />
            <span>Email</span>
          </div>
          <div className="inputBox w100">
            <textarea type="text" value={clubdescription} onChange={e => setclubdescription(e.target.value)} name="" required />
            <span>ClubDecsription</span>
          </div>
          <div className="inputBox w50">
            <Button type="sumbit" onClick={detailsvalidationfunc} variant="primary">Send</Button>
          </div>
        </div>
      </div>
    

    
    </div>
    </section>
    </div>
  );
}



{/* <Form className="form-card">
              <div className="club-name">
                <label >Club Name</label>
                <input type="text"  value={this.state.clubname} onChange={this.handleChangeclubname} />
              </div>
              <div className="club-ownername">
                <label>Club Owner Name</label>
                <input type="text" value={this.state.clubowner} onChange={this.handleChangeclubowner} />
              </div>
              <div className="club-type">
                <label >Club type </label>
                <input type="text" placeholder='dance,coding...' value={this.setState.clubtype} onChange={this.handleChangeclubtype} />
              </div>
              <div className="club-contact">
                <label>Contact Number</label>
                <input type="phone" value={this.state.contact} onChange={this.handleChangeclubcontact} /> 
              </div>
              <div className="club-email">
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={this.handleChangeclubemail} />
              </div>

              <Button variant="outline-primary">sumbit</Button>
              

            </Form>  */}


            // constructor(props) {
            //   super(props)
            
            //   this.state = {
            //     clubname: '',
            //     clubowner: '',
            //     clubtype:'',
            //     clubcontact:'',
            //     clubemail:''
            //   }
            // }
          
            
          
            // handleChangeclubname = (e) => {
            //   this.setState({clubname: e.target.value})
             
            // }
            // handleChangeclubowner = (e) => {
            //   this.setState({clubowner: e.target.value})
            // }
            // handleChangeclubtype = (e) => {
            //   this.setState({clubtype: e.target.value})
            // }
            // handleChangeclubcontact = (e) => {
            //   this.setState({clubcontact:e.target.value})
            // }
            // handleChangeclubemail = (e) => {
            //   this.setState({clubemail: e.target.value})
            // }
        

            // <div className="form-card">
            // <MDBValidation > 
              
            //   <MDBValidationItem feedback="Enter your ClubName" invalid>
            //     <MDBInput
            //       value={formValue.clubname}
            //       name="clubname"
            //       onChange={onChange}
            //       id="clubname"
            //       required
            //       label="Club-Name"
            //       />
            //   </MDBValidationItem>
            //   <MDBValidationItem  feedback="Enter a OwnerName" invalid>
            //   <MDBInput
            //   value={formValue.clubcontact}
            //   name='fname'
            //   onChange={onChange}
            //   id='validationCustom01'
            //   required
            //   label='Clubownername'
            // />
            //   </MDBValidationItem>
            //   <div>
            //   <MDBBtn type='submit'>Submit form</MDBBtn>
            //   <MDBBtn type='reset'>Reset form</MDBBtn>
            //   </div>
              
            // </MDBValidation>
    

            
    {/* <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4' feedback="enter a first name" invalid>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn type='submit'>Submit form</MDBBtn>
        <MDBBtn type='reset'>Reset form</MDBBtn>
      </div>
    </MDBValidation> */}
    
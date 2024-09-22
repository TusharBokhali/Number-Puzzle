import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function SinginSingup() {
  const [emails, setemail] = useState("");
  const [passwords, setpassswords] = useState("");
  const [names,setnames] = useState("")
  let [page, setpage] = useState("Login");

  let Logins = () => {
    if (emails !== "" && passwords !== "") {
      axios.post("https://service.apikeeda.com/api/v1/user/login",{
        email:emails,
        password:passwords
      },{
        "headers": {
          "x-apikeeda-key": "w1727025495173wwh183916512zu"
        }
      })
      .then((res)=>{
        try {
          console.log(res);
          alert("Login Succesfully!!");
          
        } catch (error) {
          console.log(error);
          alert("Not Account Create The Account!!")
          
        }
      })
    } else {
      alert("Please Enter The Valid Email And Password!");
    }
    setemail("");
    setpassswords("");
  };

  let SingIn = () => {
    setpage("SingUp");
  };

  let SingUp = () =>{
    console.log(names)
    console.log(passwords)
    console.log(emails)
    axios.post("https://service.apikeeda.com/api/v1/user/signup",{
      name:names,
      email:emails,
      password:passwords
    },{
      "headers": {
        "x-apikeeda-key": "w1727025495173wwh183916512zu"
      }
    })
    .then((res)=>{
      console.log(res);
    })
    setemail("")
    setnames("")
    setpassswords("")
    setpage("Login")
    
  }



  return (
    <>
      <div className="container">
        <div className="Login-user">
          <div className={page === 'Login' ? '' : 'none'}>

                        <h2>Login</h2>
                        <div className="input">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"  id="email"  placeholder='Email' value={emails} onChange={(event)=>{setemail(event.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label>
                            <input type="password"  id="Password" placeholder='password' value={passwords} onChange={(event)=>{setpassswords(event.target.value)}}/>
                        </div>
                        <button onClick={Logins}>Login</button>
                        </div>
                        <div className='center'>
                        <h5>Have not account yet?</h5>
                            <span onClick={SingIn}>Sing up</span>
                        </div>

                </div>

          {/* Sing Up Pages */}
          <div className={page === 'SingUp' ? 'Sing-Up' : 'none'}>
            <h2>Sing Up</h2>
            <div className="input">
              <div>
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" placeholder="Enter Name" value={names} onChange={(event)=>{setnames(event.target.value)}}/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="Email" placeholder="Email" value={emails} onChange={(event)=>{setemail(event.target.value)}}/>
              </div>
              <div>
                <label htmlFor="Passwords">Password</label>
                <input type="password" id="Password" placeholder="Password" value={passwords} onChange={(event)=>{setpassswords(event.target.value)}}/>
              </div>

              <div>
                <button onClick={SingUp}>Sing Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinginSingup;

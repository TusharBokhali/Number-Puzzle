import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
let i=0;
function App() {

  let [Fname, setFname] = useState("")
  let [Lname, setLname] = useState("")
  let [Mno, setMno] = useState("")
  let [email, setEmail] = useState("")
  let [Nname, setNname] = useState("")
  let [data,setData] = useState([]);


  // useEffect(()=>{
  //   axios.get("https://service.apikeeda.com/api/v1/contact-book")
  //   .then((res)=>{
  //     console.log(res);
  //   })
  //   {
  //     headers: {
  //         "x-apikeeda-key":"u1726467242745ido140588488gm"
  //     }
  // }
  // },[])

  let submits = () => {
    if (Fname !== "" && Lname !== "" && Mno !== "" && email !== "") {
      let dub = [...data];
      dub[i++]={
        FirstName:Fname,
        LastName:Lname,
        Mobile:Mno,
        emails:email,
        Nnames:Nname
      }
      console.log(dub)
      setData(dub)
    }else{
      alert("Please Enter The Valid Details:")
    }
    setFname("")
    setEmail("")
    setLname("")
    setMno("")
    setNname("")
  }

  return (
    <>
      <div className="container">
        <div className='AllForms'>
          <div className="getData">
            <div>
              <label htmlFor="first">FirstName</label>
              <input type="text" id="first" placeholder='Enter The Name' value={Fname} onChange={(event)=>{setFname(event.target.value)}}/>
            </div>
            <div>
              <label htmlFor="last">LastName</label>
              <input type="text" id="last" placeholder='Enter The LastName' value={Lname} onChange={(event)=>{setLname(event.target.value)}}/>
            </div>
            <div>
              <label htmlFor="last">Mo.No:</label>
              <input type="Number" id="last" placeholder='Enter The Mo.No' value={Mno} onChange={(event)=>{setMno(event.target.value)}}/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder='Enter The Email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div>
              <label htmlFor="nickName">nickName:</label>
              <input type="text" id="nickName" placeholder='Enter The NickName' value={Nname} onChange={(event)=>{setNname(event.target.value)}}/>
            </div>
          </div>
          <div className='center'>
            <button onClick={submits}>Submit</button>
          </div>
        </div>
        <div className="table-Data">
          <table border={1} width={'80%'} cellPadding={0} cellSpacing={0}>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Mo.No</th>
              <th>Email</th>
              <th>NickName</th>
            </tr>
            
              {
                data.map((el)=>{ 
                  return(
                    <tr>
                      <td>{el.FirstName}</td>
                      <td>{el.LastName}</td>
                      <td>{el.Mobile}</td>
                      <td>{el.emails}</td>
                      <td>{el.Nnames}</td>
                    </tr>
                  )
                })
              }
            
          </table>
        </div>
      </div>
    </>
  )
}

export default App

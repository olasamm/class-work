import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate()
   const [name, setName] = useState("")
   const [mail, setMail] = useState("")
   const [password, setPassword] = useState("")

   const getInfo = () => {

     const allValue = {name, mail, password}

     localStorage.setItem("user", JSON.stringify(allValue ))
     //  console.log(allValue)
     navigate('/login')
     
   }


  return (
    <>
        <div className="container my-5">
            <div className="row">
            <div className=" mx-auto">
                <h4>Signup</h4>
                <input type="text" className="form-control my-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" className="form-control my-2" placeholder="Email" id="email" value={mail}  onChange={e => setMail(e.target.value)}/>
                <input type="password" className="form-control my-2" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="btn btn-primary w-100" type='submit' id="signupBtn " onClick={getInfo}>Signup</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Signup
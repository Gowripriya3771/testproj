import React, { useRef } from "react";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// import NavBar from "../Navbar";
function LoginWithLocalStorage(){
    const navigate=useNavigate()
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
            navigate("/app")
            

            
        }
        else{
                alert("Invalid username or password");

            }
    }
   
    return(
        <div className="form1">
            {
                // getEmail&&getPassword?<App/>:
            <form onSubmit={handleSubmit}>
                <h1 className="signin">Sign in</h1>
                <div>
                    <input className="input1" type="email" 
                    placeholder="Email"
                    // style={{color:"white",backgroundColor:"yellow"}}
                     ref={email} />
                </div>
                <div>
                    <input className="input2" type="password" 
                    placeholder="Password"
                    // style={{color:"white",backgroundColor:"yellow"}}
                     ref={password}  />
                </div>
                <button className="button1" type="submit">Sign In</button>
            </form>
            }
        </div>
    );
}
export default LoginWithLocalStorage;
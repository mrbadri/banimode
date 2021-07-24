import { useEffect, useState } from "react";
import CodeActive from "./CodeActive/CodeActive";
import Login from "./Login/Login"


const Auth = () => {
    const [componentJSX , setComponentJSX] = useState(); 
    const [position , setPosition] = useState("Login") ; 
    
    useEffect(() => {
        if(position === "CodeActive" ){
            setComponentJSX(<CodeActive></CodeActive>);
        }else if("Login"){
            setComponentJSX(<Login handleJSX={handleJSX}></Login>);
        }else{
            setComponentJSX(<Login handleJSX={handleJSX}></Login>);
        }
    });
    
    const handleJSX = (position) =>{
       setPosition(position);
    }
    return ( 
        <div className="Auth flex flex-col justify-center w-80 sm:w-4/12 bg-white p-6 sm:p-8 md:p-12">
           {componentJSX}
        </div>
     );
}
 
export default Auth;
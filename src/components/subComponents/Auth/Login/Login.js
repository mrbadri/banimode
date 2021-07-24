const Login = (props) => {

    const handleLogin = () =>{
        props.handleJSX("CodeActive") ; 
    }

    return ( 
        <div className="Login w-full h-full">
             <form className="h-full w-full">
                <button className="btn-A px-8 py-4 text-xl w-full mx-auto rounded-xl" onClick={handleLogin}>ادامه</button>
             </form>
        </div>
     );
}
 
export default Login;
import { useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
<<<<<<< HEAD

const user= { 
	Id:0 ,
	fullName:"" ,
	userName: "", 
	email: "", 
	password:"" ,
	urlProfile:"" ,
	dateBirth:"" ,
  financial:{},
	wallet:{} ,
	addressList:[] ,
	cart:[] , 
	interestList:[] ,
	commernts:[] ,
}

const product={
  id:0 ,
	title:"" , 
	subTitle:"" ,
	images:[] , 
	price:0 , 
	sizes:[] , 
	colors:[] , 
	comments:{} ,
}
const products=[];
const interestList=[];

// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();

localStorage.setItem('user',JSON.stringify(user));
localStorage.setItem('products',JSON.stringify(products));
localStorage.setItem('product',JSON.stringify(product));
localStorage.setItem('interestList',JSON.stringify(interestList));

=======
//test comment
>>>>>>> d62e5f387a14ef2634897706909e5dbfc11a9df0
function App() {
    useEffect(() => {
    console.log(localStorage.getItem('user'));
    let test = localStorage.getItem('user'); 
    console.log(JSON.parse(test));
  },[]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;

  

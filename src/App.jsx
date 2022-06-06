import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput'

function App() {

  const [values,setValues]=useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });
  
  const inputs=[
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      errormessage: 'User Name should be 3-16 characters' ,
      label:'Username',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'email',
      errormessage: 'It should be a vaid Email' ,
      label:'Email',
      required: true,
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      errormessage: '' ,
      label:'Birthday',
      
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'Password',
      errormessage: 'Password Should be 8-20 Characters' ,
      label:'Password',
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required: true,

      
    },
    {
      id:5,
      name:'confirmpassword',
      type:'password',
      placeholder:'Confirm Password',
      errormessage: 'Password don`t match' ,
      label:'Confirm Password',
      pattern: values.password,
      required: true,
    }

  ]

  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values); 

  return (
    <div className="App d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
      <form onSubmit={handleSubmit} className=' bg-white p-4 border-2 rounded-bottom' style={{marginTop:'300px',marginBottom:'300px'}}>
        <h1 className=' d-flex align-items-center justify-content-center' style={{color:'#E04D01'}}>Register</h1>
      {
        inputs.map((input)=>(
          <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange} />
        ))
      }
      <button className='btn border-0 rounded-3 w-100 fw-bold' style={{backgroundColor :'#FF7700',color:'white',height:'50px',marginTop:'10px'}}> Submit</button>
      </form>
    </div>
  );
}

export default App;

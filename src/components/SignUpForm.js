import { useState } from "react"

const SignUpForm = ()=>{

    const [signupForm,setSignupForm] = useState({firstName:'',lastName:'',email:'',mobileNumber:'',address:''})

    console.log(typeof(Number(signupForm.mobileNumber)))

    const handleChange = (event)=> {
         const {name,value} = event.target;

         setSignupForm((prev)=>{
            return {
                ...prev,
                [name]:value
            }
         })
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(signupForm);
    }


    return (
        <form className="signup-form-container" onSubmit={handleSubmit}>
            <label className="label">First Name :</label>
            <input type="text" name="firstName" placeholder="enter you first name" value={signupForm.firstName} onChange={handleChange}/>

            <label className="label">Last Name :</label>
            <input type="text" name="lastName" placeholder="enter you last name" value={signupForm.lastName} onChange={handleChange}/>

            <label className="label">Email :</label>
            <input type="email" name="email" placeholder="enter you email" value={signupForm.email} onChange={handleChange}/>

            <label className="label">Mobile Number :</label>
            <input type="number" name="mobileNumber" placeholder="enter you mobile number" value={signupForm.mobileNumber} onChange={handleChange} min={0} max={9   }/>

            <label className="label">Address :</label>
            <input type="textarea" name="address" placeholder="enter your address" value={signupForm.address} onChange={handleChange}/>

            <button className='submitButoon' type="submit" >Sign Up</button>

        </form>
    )
}
    
export default SignUpForm;
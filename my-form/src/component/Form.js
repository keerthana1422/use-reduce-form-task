import React,{useReducer} from 'react';
import formReducer from './formReducer';

const initialFormState = {
    username: "",
    email: "",
    password: "",
    hasConsented: false,
    };

const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleTextChange=(e) => {
        dispatch({
            type: "HANDLE INPUT TEXT",
            field: e.target.name,
            payload: e.target.value,
        });
    };
    
return (
<form>
<label>
username:
<input type="text" name="username" value={formState.username} placeholder="username" onChange={(e) => handleTextChange(e)}/>
</label><br></br>
<label>
    password:
    <input type="password" name="pwd" value={formState.pwd}  placeholder="password" onchange ={(e) => handleTextChange(e)}/>
</label><br></br>
<label>
    first name:
<input type="text" name="firstname" value={formState.firstname} placeholder="Firstname" onChange={(e) => handleTextChange(e)} required/>
</label><br></br>
<label>
    Last name:
<input type="text" name="lasttname" value={formState.lastname} placeholder="Lastname" onChange={(e) => handleTextChange(e)} required/>
</label><br></br>
<label>
  email id:
<input type="email" name="email" value={formState.email} placeholder="Email id" onChange={(e) => handleTextChange(e)} required/>
</label><br></br>
<label>
number:
<input type="number" name="number" value= {formState.number} placeholder="Phone Number"onChange={(e) => handleTextChange(e)} required/>
</label><br></br>

<button >submit</button>


</form>


);

}
export default Form;


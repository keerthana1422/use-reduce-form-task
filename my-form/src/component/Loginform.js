function Loginform(){
    return (
        <form>
        <label>
        username:
        <input type="text" name="username" value={formState.username} placeholder="username" />
        </label><br></br>
        <label>
            password:
            <input type="password" name="pwd" value={formState.pwd}  placeholder="password" />
        </label><br></br>

        
        <button >submit</button>
        
        
        </form>
        
        
        );
        
        }
        export default Loginform;

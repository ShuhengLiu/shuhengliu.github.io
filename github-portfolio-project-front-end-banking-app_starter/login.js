function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  // const loginUser=React.useContext(LoginContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleLogin(){
    console.log(name,email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if((ctx.users.findIndex(element=>element.email==email)!=-1)&&
    (ctx.users.findIndex(element=>element.password==password)!=-1)){
      const idx=ctx.users.findIndex(element=>element.email==email);
      ctx.currentUser=ctx.users[idx];
      console.log(JSON.stringify(ctx.currentUser));
      setShow(false);
    }
    else{
      ctx.currentUser=null;
      alert("Wrong email or Password");
    }
    
  }

  function clearFormLogout(){
    setName('');
    setEmail('');
    setPassword('');
    ctx.currentUser=null;
    setShow(true);
    
  }
  return (
    // <h1>Login</h1>
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={(show&&ctx.currentUser==null)  ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="Login" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>Hello, {ctx.currentUser.name}</h5>
              <button type="submit" className="btn btn-light" onClick={clearFormLogout}>Logout</button>
              </>
            )}
    />
  )  
}

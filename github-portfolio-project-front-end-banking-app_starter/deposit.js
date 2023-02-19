function Deposit(){

  const [status, setStatus]     = React.useState('');
  const [balance,setBalance]=React.useState(0);
  const [show,setShow]=React.useState(false);
  const [money,setMoney]=React.useState(0);
  const ctx = React.useContext(UserContext);  

  // if(ctx.currentUser==null){
  //   setShow(false);
  // }else{
  //   setShow(true);
  // }

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleDeposit(){
    if (!validate(money,    'money'))    return;
    const idx=ctx.users.findIndex(element=>element.email==ctx.currentUser.email);
    ctx.users[idx].balance+=parseFloat(money);
    setMoney(money);
    // ctx.currentUser.balance+=parseFloat(money);
  }

  return (
    // <h1>Login</h1>
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={(ctx.currentUser!=null)  ? (  
              <>
              Deposit<br/>
              <input type="input" className="form-control" id="money" placeholder="Enter Deposit" value={money} onChange={e => setMoney(e.currentTarget.value)}/><br/>
              <button /* type="" */ className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              <br/>
              <h5>Hello, {ctx.currentUser.name}. Your Balance is {ctx.currentUser.balance}</h5>
              
              </>
            ):(
              <>
              <h5>Please login</h5>
              </>
            )}
    />
  )
}

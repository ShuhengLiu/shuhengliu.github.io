function Balance(){
  const ctx = React.useContext(UserContext);  
  return (
    // <h1>Login</h1>
    <Card
      bgcolor="primary"
      header="Balance"
      // status={status}
      body={(ctx.currentUser!=null)  ? (  
              <>
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

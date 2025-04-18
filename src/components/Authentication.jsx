import React, { useState } from 'react'

const Authentication = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isauthentication, setisAuthentication] = useState(false);
  async function hasndlAuthentication(e) {
    
  }
  return (
    <>
      <h2 className='sign-up-text'> {isRegistration ? 'Sign-up' : 'Sign-in'}</h2>
      <p>{isRegistration ? 'create your acount' : 'sign in to your acount'}</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='**********' />
      <button onClick={hasndlAuthentication}><p>Submit</p></button>
      <hr />
      <div className="register-content">
        <p>{ isRegistration ? 'Already have an acount?' : 'Don\'t hav an acount?'}</p>
        <button onClick={() => setIsRegistration(!isRegistration)}><p>{isRegistration ? 'Sign-up' : 'Sign-in'}</p></button>
      </div>
    </>
  )
}

export default Authentication

import React from 'react'

const Authentication = () => {
  return (
    <>
      <h2 className='sign-up-text'>Sign-up</h2>
      <p>sign in to your acount</p>
      <input type="email" placeholder='Email' />
      <input type="password" placeholder='**********' />
      <button><p>Submit</p></button>
      <hr />
      <div className="register-content">
        <p>Don&apos:t hav an acount?</p>
        <button><p>sign up</p></button>
      </div>
    </>
  )
}

export default Authentication

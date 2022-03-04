import React from 'react'

const signup = () => {
  return (
    <div>
      <div>image would be here</div>
      <div>
      <h1>Sign up to set up your account and get started</h1>
      <form>
        <div>
          <label  htmlFor="email">First Name</label>
          <input type='ftext' name="firstName" placeholder="Input your Email" />
        </div>
        <div>
          <label  htmlFor="email">Last Name</label>
          <input type='ftext' name="lastName" placeholder="Input your Email" />
        </div>
        <div>
          <label  htmlFor="email">Email Address</label>
          <input type='email' name="email" placeholder="Input your Email" />
        </div>
        <div>
          <label  htmlFor="password">Password</label>
          <input type='password' name="password" placeholder="Input your Password" />
        </div>
        <div>
          <label  htmlFor="password">Confirm Password</label>
          <input type='password' name="password" placeholder="Input your Password" />
        </div>
      </form>
      </div>
    </div>
  )
}

export default signup
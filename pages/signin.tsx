import React from 'react'

const signin = () => {
  return (
    <div>
      <div>image would be here</div>
      <div>
      <h1>Sign into your account to find your housemate</h1>
      <form>
        <div>
          <label  htmlFor="email">Email Address</label>
          <input type='email' name="firstName" placeholder="Input your Email" />
        </div>
        <div>
          <label  htmlFor="password">Password</label>
          <input type='password' name="password" placeholder="Input your Password" />
        </div>
      </form>
      </div>
    </div>
  )
}

export default signin
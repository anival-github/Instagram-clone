const Login = () => {
  return (
    <form>
      <label htmlFor="username">
        Enter username:
        <input
          id="username"
          className="username"
          type="text"
          placeholder="username"
        />
      </label>
      <label htmlFor="password">
        Enter password:
        <input
          id="password"
          className="password"
          type="text"
          placeholder="password"
        />
      </label>
    </form>
  )
}

export default Login

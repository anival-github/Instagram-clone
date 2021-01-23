import { React } from 'react';

export default function Login() {
  // const [login, setlogin] = useState('')
  // const [password, setpassword] = useState('')

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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

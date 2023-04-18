import { useState } from "react";

import Field from "./components/Field";
import Button from "./components/Button";
import { validateEmail, validatePassword } from "./utils/validators";

/**
 * In this solution, I wrote the hints differently than the lab instructions and demonstration.
 * I wrote the hints collectively as an object with messages, and then I iterated it to render the list of hints.
 */

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCriteriaMet, setEmailCriteriaMet] = useState({ valid: { value: false, hint: 'Email must be valid' }});
  const [passwordCriteriaMet, setPasswordCriteriaMet] = useState({
    uppercase: { value: false, hint: 'Password must have at least one uppercase letter' },
    lowercase: { value: false, hint: 'Password must have at least one lowercase letter' },
    number: { value: false, hint: 'Password must have at least one number' },
    specialChar: { value: false, hint: 'Password must have at least one special character' },
    length: { value: false, hint: 'Password must be at least 8 characters long' }
  });

  const updateEmailCriteriaMet = (emailValue) => {
    setEmailCriteriaMet((prevState) => validateEmail(prevState, emailValue));
  };

  const updatePasswordCriteriaMet = (passwordValue) => {
    setPasswordCriteriaMet((prevState) => validatePassword(prevState, passwordValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    updatePasswordCriteriaMet(passwordValue);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    updateEmailCriteriaMet(emailValue);
  };

  const handleClear = () => {
    setPassword('');
    setEmail('');
    updatePasswordCriteriaMet('');
    updateEmailCriteriaMet('');
  };

  const handleSubmit = () => {
    const allCriteriaMet = Object.values(passwordCriteriaMet).every((criterion) => criterion.value) && emailCriteriaMet.valid.value;

    if (!allCriteriaMet) {
      alert('Please fix the errors in the form');
      return;
    }

    alert('Form submitted');
    handleClear();
  };

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          helper={emailCriteriaMet}
        />

        <Field
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          helper={passwordCriteriaMet}
        />

        <div className="Buttons">
          <Button
            label="Clear"
            onClick={handleClear}
          />
          <div className="Spacer" />
          <Button label="Login" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;

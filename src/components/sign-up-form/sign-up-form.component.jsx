import { useState } from "react";
// import { UserContext } from "../../context/user.context";

import Swal from "sweetalert2";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user)

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      setTimeout(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          iconColor: "#f0aa1f",
          text: `Successfully registered`,
          confirmButtonColor: "#f0aa1f",
        });
      }, 500);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setTimeout(() => {
          Swal.fire({
            position: "top",
            icon: "info",
            iconColor: "#f0aa1f",
            title: "Error",
            text: `Email already in use`,
            showDenyButton: true,
            denyButtonText: "Try again",
            confirmButtonColor: "#f0aa1f",
          });
        }, 500);
      } else {
        console.log(err.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <div className="buttons-container">
          <Button text="Sign Up" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;

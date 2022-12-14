import { useState } from "react";
import { useNavigate } from "react-router-dom"

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate()


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
    setTimeout(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#f0aa1f",
        text: `Successfully logged In`,
        confirmButtonColor: "#f0aa1f",
      });
      navigate('/category')
    }, 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "#f0aa1f",
          text: `Successfully logged In`,
          confirmButtonColor: "#f0aa1f",
        });
        navigate('/category')
      }, 500);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          Swal.fire({
            position: "center",
            icon: "info",
            iconColor: "#f0aa1f",
            title: "Error",
            text: `Incorrect password for email`,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: "Try again",
            showConfirmButton: false,
          });
          break;
        case "auth/user-not-found":
          Swal.fire({
            position: "center",
            icon: "info",
            iconColor: "#f0aa1f",
            title: "Error",
            text: "No user associated with this email",
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: "Try again",
          });
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button text="Sign In" type="submit" />
          <Button
            text="Google sign in"
            buttonType="google"
            type="button"
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

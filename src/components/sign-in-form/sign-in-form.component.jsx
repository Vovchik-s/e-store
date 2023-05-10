import { useState } from "react"; //deleted useContext, moved the logic to the parent component

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../context/user.context"; // will give back the any value passed in for the {value} - (user, setUser) of useState

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

// The reason we are using this object is because we want to update the state of the form fields as the user types in the input fields.

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields)

    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        // setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    };  // Google button added

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            )
            resetFormFields();
            // setCurrentUser(user);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Wrong password")
            } else if (error.code === "auth/user-not-found") {
                alert("User not found")
            }
            console.log(error)
        }
    }

    const handleChange = (event) => { // reflect the changes in the input fields
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value }) // [name] is a dynamic property name linked to the name of the input field


    }


    return (
        <div className="sign-in-container">
            <h2>Sign in with your email and password</h2>
            <span>Already have an account ?</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />


                <div className="buttons-container">
                    {/* <button type="submit">Sign In</button> */}
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>


            </form>
        </div>
    )
}

export default SignInForm;
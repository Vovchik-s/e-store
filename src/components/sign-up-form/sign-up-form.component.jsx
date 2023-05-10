import { useState } from "react"; //deleted useContext, moved the logic to the parent component

// import { UserContext } from "../../context/user.context"; 

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
//Instead regular input

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

// The reason we are using this object is because we want to update the state of the form fields as the user types in the input fields.

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 1.check if the passwords match
        // 2. check if we authenticated the user via email and password
        // 3. create the user document in the database
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            )
            
            // Now when sign up we get { user } object that after we can pass to document that we trying to generate (createUserDocumentFromAuth)

            // setCurrentUser(user); // whenever sign up we setting the current user in context 

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, emeil already in use')
            } else {
                console.log("ERROR !!! : " + error)

            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
        // 1. Spread the formFields object.
        // 2. Set the name of the form field to the value of the form field.


        //because we want to update only the appropriate form field, all other fields on the state will be spread on *...formFields
        // And then update the appropriate field with the value of the event.target.value
    }


    return (
        <div className="sigh-up-container">
            {/* name will call through the handleChange(event)  */}

            {/* When you pass a value, you saing that the value I want inside of this input should be  the value I passing */}

            {/* The reason we are using the onChange event handler is because we want to update the state of the form fields as the user types in the input fields. */}

            <h2>Sign up with your email and password</h2>
            <span>Don't have an account ?</span>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} /> */}

                <FormInput label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type='submit'>Sign Up</Button>
                {/* <button type="submit">Sign Up</button> */}
            </form>
        </div>
    )
}

export default SignUpForm;
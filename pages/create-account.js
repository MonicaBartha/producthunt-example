import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import {Form, Field, SubmitInput} from '../components/ui/Form';

// validations
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const { values, errors, submitForm, handleSubmit, handleChange} = useValidation(INITIAL_STAT, validateCreateAccount, createAccount);

function createAccount() {
  console.log('createing account..')
}

const CreateAccount = () => {
  return (
    <div>
       <Layout>
         <>
        <h1 css={css`
          text-align: center;
          margin-top: 5rem;
        `}>
        Create Your Account</h1>
        <Form>
          <Field>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name"
              name="name"
            />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email"
              name="email"
            />
          </Field>
          <Field>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Your Password"
              name="password"
            />
          </Field>
          <SubmitInput
            type="submit"
            value="Create Account"
          />
        </Form>
        </>
      </Layout>
    </div>
  );
};

export default CreateAccount;
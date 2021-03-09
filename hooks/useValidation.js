import React, {useState, useEffect} from 'react';

const useValidation = (initialState, validate, fn) => {

    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState({});
    const [ submitForm, setSubmitForm ] = useState();

    useEffect(() => {
      if(submitForm) {
        // errors is object, if is empty there are no errors
        const noErrors = Object.keys(errors). length === 0;

        if(noErrors) {
          fn(); // This function is executed inside component 
        }
        setSubmitForm(false);
      }
    }, []);

    // This function is executed when the user writes something
    const handleChange = e => {
      setValues({
        ...values,
        [e.target.name] : e.target.value
      })
    }

    // This function is executed when the user submits form
    const handleSubmit = e => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setSubmitForm(true);
    }

  return (
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange
  );
};

export default useValidation;
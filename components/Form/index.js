import {Field, Formik} from 'formik';
import React from 'react';
import Button from '../Button';
import Typography from '../Typography';

const Form = ({fields, btnProps, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit, errors}) => (
        <>
          {errors.serverError && (
            <Typography
              variant="error"
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '600',
                padding: 10,
              }}>
              {errors.serverError}
            </Typography>
          )}
          {fields.map(x => (
            <Field key={x.name} {...x} />
          ))}
          <Button {...btnProps} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default Form;

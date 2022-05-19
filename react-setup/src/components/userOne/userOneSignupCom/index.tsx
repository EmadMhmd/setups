import React from 'react';
import { connect } from 'react-redux';
import {
  Button, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import { addUserAction } from '../../../state/actions/user.action';

function Signup(props) {
  const handleFormSubmit = (values, bag) => {
    // this.props.addProductAction(values);
    if (values) {
      props.addUserAction(values);
    } else {
      bag.isSubmitting(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '', email: '',
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <div className="form">
            <FormGroup className="formInputThree">
              <Label>Name</Label>
              <Input
                placeholder="Enter name"
                invalid={errors.name && touched.name && errors.name}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (<FormFeedback>{errors.name}</FormFeedback>) : null}
            </FormGroup>
            <FormGroup className="formInputThree labelHeight">
              <Input
                placeholder="Enter email"
                invalid={errors.email && touched.email && errors.email}
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email ? (<FormFeedback>{errors.email}</FormFeedback>) : null}
            </FormGroup>

            <Button className="modelBtn" type="submit" disabled={isSubmitting || !isValid} onClick={handleSubmit}>
              Create Account
            </Button>
          </div>
        )}

      </Formik>
    </div>
  );
}

export default connect(null, { addUserAction })(Signup);

import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contact.style.css'

const ContactComponent = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          messageTitle: '',
          message: ''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          messageTitle: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          message: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


      return (
        <form onSubmit={formik.handleSubmit}>
          {/* <label htmlFor="name">First Name</label> */}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

        {/* <label htmlFor="email">Email Address</label> */}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
    
          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            id="messageTitle"
            name="messageTitle"
            type="text"
            placeholder="Write a Subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.messageTitle}
          />
          {formik.touched.messageTitle && formik.errors.messageTitle ? (
            <div>{formik.errors.messageTitle}</div>
          ) : null}

          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Your Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
    
          <button type="submit">Submit</button>
        </form>
      );
}
 
export default ContactComponent;
import React from "react";
import s from './FormSendMessage.module.css';
import {Field, Form, Formik} from 'formik';
import * as Yup from "yup";

function FormSendMessage() {

    const submit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Field is required'),
        email: Yup.string()
            .required('Field is required'),
        message: Yup.string()
            .required('Field is required')
    });

    return (
        <div>
            <Formik
                initialValues={{name: '', email: '', message: ""}}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({errors, touched}) => (
                    <Form className={s.block}>
                        <div className={s.field}>
                            <Field name="name" type="text" placeholder="Your name"
                                   className={s.form}
                            />
                        </div>
                        <div className={s.span}>
                            <span className={errors.name && touched.name ? s.spanError : ""}>
                                {errors.name && touched.name ?
                                    <div>{errors.name}</div> : null}
                            </span>
                        </div>
                        <div className={s.field}>
                            <Field name="email" type="text" placeholder="Your e-mail"
                                   className={s.form}
                            />
                        </div>
                        <div className={s.span}>
                            <span className={errors.email && touched.email ? s.spanError : ""}>
                                {errors.email && touched.email
                                    ? <div>{errors.email}</div> : null}
                            </span>
                        </div>
                        <div className={s.field}>
                            <Field name="message" type="text" placeholder="Type the message here"
                                   className={s.form}
                            />
                        </div>
                        <div className={s.span}>
                            <span className={errors.message && touched.message ? s.spanError : ""}>
                                {errors.message && touched.message
                                    ? <div>{errors.message}</div> : null}
                        </span>
                        </div>
                        <div>
                            <button type="submit"
                                    className={s.button}
                                    disabled={!!((errors.name && touched.name) || (errors.email && touched.email) || (errors.message && touched.message))}
                            >Send
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormSendMessage;

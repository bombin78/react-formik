import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import styles from './styles.module.scss';
import MyErrorMessage from '../../components/MyErrorMessage';

interface IValuesProps {
    name: string;
    email: string;
    channel: string;
    comment: string;
    address: string;
}

function SimpleFormExample6() {
    const initialValues: IValuesProps = {
        name: '',
        email: '',
        channel: '',
        comment: '',
        address: '',
    };

    const onSubmit = (values: IValuesProps) => {
        console.log('Form values', values);
    };

    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        channel: yup.string().required('Required'),
        comment: yup.string().required('Required'),
        address: yup.string().required('Required'),
    });

    return (
        <div className={styles.formWrap}>
            <h1>Форма 6</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <Field
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Введите имя'
                            as={TextField}
                        />
                        <ErrorMessage
                            component="div"
                            name='name'
                            className='error'
                        />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>E-mail</label>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Введите email'
                            as={TextField}
                        />
                        <ErrorMessage
                            render={(msg) => <div className='error'>{msg}</div>}
                            name='email'
                        />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='channel'>Channel</label>
                        <Field
                            type='text'
                            id='channel'
                            name='channel'
                            placeholder='Укажите ссылку на канал'
                            as={TextField}
                        />
                        <ErrorMessage name='channel'>
                            {(msg) => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='comment'>Comment</label>
                        <Field
                            as={TextField}
                            id='comment'
                            name='comment'
                            placeholder='Добавьте комментарий'
                            multiline
                            rows={4}
                        />
                        <MyErrorMessage name="comment"/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='address'>Address</label>
                        <Field name='address'>
                        {({ field, meta }: { field: any, meta: any }): React.ReactNode => (
                            <>
                            <TextField type="text" id="address" {...field} />
                            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                            </>
                        )}
                        </Field>
                    </div>

                    <Button type='submit' variant="contained" color="primary">
                        Submit
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}

export default SimpleFormExample6;

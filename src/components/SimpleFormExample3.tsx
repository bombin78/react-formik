// import classnames from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './SimpleFormExample3.module.scss';

function SimpleFormExample3() {

    const initialValues = {
        name: '',
        email: '',
        channel: '',
    };

    const onSubmit = (values: {
        name: string,
        email: string,
        channel: string,
    }) => {
        console.log('Form values', values);
    };

    const validationSchema = yup.object({
        name: yup.string().required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        channel: yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <div className={styles.formWrap}>
            <h1>Форма 2</h1>
            
		    <form onSubmit={formik.handleSubmit} >
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        {...formik.getFieldProps('name')}
                    />
                    {/* Если поле посещено и есть сообщение об ошибке, то показываем ошибку */}
                    {formik.touched.name && formik.errors.name
                        ? <div className='error'>{formik.errors.name }</div>
                        : null
                    }
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email 
                        ? <div className='error'>{formik.errors.email }</div>
                        : null
                    }
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        {...formik.getFieldProps('channel')}
                    />
                    {formik.touched.channel && formik.errors.channel 
                        ? <div className='error'>{formik.errors.channel }</div>
                        : null
                    }
                </div>

                <button type='submit'>Submit</button>
		    </form>
        </div>
    )
}

export default SimpleFormExample3;

// import classnames from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './styles.module.scss';

function SimpleFormExample2() {

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
                        name='name'
                        value={formik.values.name}
                        // Для отслеживания посещения поля используем атрибут onBlur
                        // и функцию formik.handleBlur/ Информация о посещении попадает
                        // в объект formik.touched. А если более точно, то в поле 
                        // formik.touched[значение атрибута name]
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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
                        name='channel'
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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

export default SimpleFormExample2;

// import classnames from 'classnames';
import { 
    Formik, 
    Form, 
    Field,
    ErrorMessage,
    FieldProps,
} from 'formik';
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

function SimpleFormExample5() {
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
            <h1>Форма 5</h1>

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
                        />
                        {/* ErrorMessage - компонент, который отображает сообщение об ошибке для поля, если 
                        оно было посещено и присутствует сообщение об ошибке. В данном случае, валидируемое
                        поле связывается с ErrorMessage через указание значения в атрибуте name */}
                        {/* Первый вариант вывода ошибки */}
                        <ErrorMessage component="div" name='name' className='error'/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>E-mail</label>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Введите email'
                        />
                        {/* Второй вариант вывода ошибки */}
                        <ErrorMessage name='email'>
                            {(msg) => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    {/* Field: по умолчанию создаст input */}
                    <div className='form-control'>
                        <label htmlFor='channel'>Channel</label>
                        <Field
                            type='text'
                            id='channel'
                            name='channel'
                            placeholder='Укажите ссылку на канал'
                        />
                        {/* Третий вариант вывода ошибки */}
                        <ErrorMessage 
                            render={(msg) => <div className='error'>{msg}</div>} 
                            name='channel'
                        />
                    </div>

                    {/* Field: первый способ задания HTML-элемента отличного от input: as='' */}
                    <div className='form-control'>
                        <label htmlFor='comment'>Comment</label>
                        <Field
                            as='textarea'
                            id='comment'
                            name='comment'
                            placeholder='Добавьте комментарий'
                        />
                        {/* Использование кастомного компонента ошибки вместо третьего варианта вывода ошибки */}
                        <MyErrorMessage name="comment"/>
                    </div>

                    {/* Field: второй способ задания HTML-элемента отличного от input: children */}
                    <div className='form-control'>
                        <label htmlFor='address'>Address</label>
                        <Field name='address'>
                            {
                                ({field, form, meta}: FieldProps): React.ReactNode => {
                                    return (
                                       <>
                                            <input type="text" id="address" {...field} />
                                            {meta.touched && meta.error
                                                ? <div className='error'>{meta.error }</div>
                                                : null
                                            }
                                        </> 
                                    )
                                }
                            }
                        </Field>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default SimpleFormExample5;

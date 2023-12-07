// import classnames from 'classnames';
import { useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from "react-select/creatable";
import { 
    Formik, 
    Form, 
    Field,
    ErrorMessage,
    FieldProps,
    FieldArray,
    FastField,
    FormikProps,
    FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import styles from './styles.module.scss';
// import MyErrorMessage from '../../components/MyErrorMessage';

interface IValuesProps {
    options: IOptionProps[],
}

interface IOptionProps {
    value: string, 
    label: string,
    description: string,
}

const options = [
    {value: 'value1', label: 'label1', description: 'description1', color: '#ff8b00'},
    {value: 'value2', label: 'label2', description: 'description2', color: '#36b37e'},
    {value: 'value3', label: 'label3', description: 'description3', color: '#0052cc'},
    {value: 'value4', label: 'label4', description: 'description4', color: '#000000'},
    {value: 'value5', label: 'label5', description: 'description5', color: '#cccccc'},
];

const initialValues: IValuesProps = {
    options,
};

const onSubmit = (
    values: IValuesProps, 
    onSubmitProps: FormikHelpers<IValuesProps>,
) => {
    console.log('Form values', values);
    // Имитация задержки ответа сервера после которого нужно разблокировать кнопку
    setTimeout(() => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }, 1000);
};

const validationSchema = yup.object({
    // name: yup.string().required('Required'),
    // email: yup.string().email('Invalid email format').required('Required'),
    // channel: yup.string().required('Required'),
    // address: yup.string().required('Required'),
    // social: yup.object({
    //     facebook: yup.string().required('Required'),
    //     twitter: yup.string().required('Required'),
    // }),
    // // Содержат ли значения массива phoneNumbers строки с заполненными значениями
    // phoneNumbers: yup.array().of(yup.string().required('Required')),
});

function ReactSelect() {
    const handleChange = (
        selectedOption: IOptionProps, 
        // @ts-ignore
        actionMeta,
    ): void => {
        console.log("handleChange", selectedOption, actionMeta);
    };

    // @ts-ignore
    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };

    const handleLoadOptions = (
        searchValue: string, 
        callback: (
            filteredOptions: IOptionProps[],
        ) => void
    ) => {
        // Имитация задержки ответа с сервера
        setTimeout(() => {
            // Имитация фильтрации данных на сервере
            const filteredOptions: IOptionProps[] = options.filter((option) => 
                option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
            // Чтобы сообщить select, что мы готовы с нашим асинхронным кодом,
            // мы должны вызвать функцию обратного вызова и предоставить массив параметров внутри.
            callback(filteredOptions);
        }, 2000);
    };

    // Стилизация
    const colorStyles = {
        // @ts-ignore
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        // @ts-ignore
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return { ...styles, color: data.color };
        },
        // @ts-ignore
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: "#fff",
            };
        },
        // @ts-ignore
        multiValueLabel: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
            };
        },
        // @ts-ignore
        multiValueRemove: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
                cursor: "pointer",
                ":hover": {
                color: "#fff",
                },
            };
        },
    };

    return (
        <div className={styles.formWrap}>
            <h1>Using react-select</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                // validateOnMount запустит проверку формы (обернутую в Formik)
                // при ее монтировании и/или когда изменяются начальные значения
                validateOnMount
                // enableReinitialize определяет могут ли изменяться начальные
                // значения после того, как форма была инициализирована
                enableReinitialize
            >
                {
                    (formik: FormikProps<IValuesProps>) => {
                        
                        return (
                            <Form>

                                {/* Select c интеграцией с formik */}
                                <div className='form-control'>
                                    <Select
                                        options={formik.values.options}
                                        {...formik.getFieldProps}
                                        getOptionLabel={(option) => option.label}
                                        getOptionValue={(option) => option.value}
                                        formatOptionLabel={(option) => (
                                            <div>
                                                <div><b>{option.label}:</b> {option.description}</div>
                                            </div>
                                        )}
                                        styles={colorStyles}
                                    />
                                </div>

                                {/* Select без интеграции с formik */}
                                <div className='form-control'>
                                    <Select
                                        options={options}
                                        // @ts-ignore
                                        onChange={handleChange}
                                        getOptionLabel={(option) => option.label}
                                        getOptionValue={(option) => option.value}
                                        formatOptionLabel={(option) => (
                                            <div>
                                                <div><b>{option.label}:</b> {option.description}</div>
                                            </div>
                                        )}
                                        styles={colorStyles}
                                    />
                                </div>

                                {/* Multiselect c интеграцией с formik */}
                                <div className='form-control'>
                                    <Select
                                        options={formik.values.options}
                                        {...formik.getFieldProps}
                                        isMulti
                                        styles={colorStyles}
                                    />
                                </div>

                                {/* Multiselect без интеграции с formik */}
                                <div className='form-control'>
                                    <Select
                                        options={options}
                                        // @ts-ignore
                                        onChange={handleChange}
                                        isMulti
                                        styles={colorStyles}
                                    />
                                </div>

                                {/* AsyncSelect c интеграцией с formik */}
                                <div className='form-control'>
                                    <AsyncSelect
                                        loadOptions={handleLoadOptions}
                                        {...formik.getFieldProps}
                                    />
                                </div>

                                {/* AsyncSelect без интеграции с formik */}
                                <div className='form-control'>
                                    <AsyncSelect
                                        loadOptions={handleLoadOptions}
                                        // @ts-ignore
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* AsyncMultiselect c интеграцией с formik */}
                                <div className='form-control'>
                                    <AsyncSelect
                                        loadOptions={handleLoadOptions}
                                        {...formik.getFieldProps}
                                        isMulti
                                        // defaultOptions отвечает за загрузку всех данных при инициализации
                                        defaultOptions
                                    />
                                </div>

                                {/* AsyncMultiselect без интеграции с formik */}
                                <div className='form-control'>
                                    <AsyncSelect
                                        loadOptions={handleLoadOptions}
                                        // @ts-ignore
                                        onChange={handleChange}
                                        isMulti
                                        // defaultOptions отвечает за загрузку всех данных при инициализации
                                        defaultOptions
                                    />
                                </div>

                                {/* CreatabMultiselect без интеграции с formik */}
                                <div className='form-control'>
                                    <CreatableSelect
                                        options={options}
                                        // @ts-ignore
                                        onChange={handleChange}
                                        onInputChange={handleInputChange}
                                        isMulti
                                        styles={colorStyles}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    Submit
                                </button>
                            </Form>
                        );
                    }
                }
                
            </Formik>
        </div>
    );
}

export default ReactSelect;

import React, { ReactNode } from 'react';
import { ErrorMessage } from 'formik';

interface ErrorMessageProps {
    name: string;
    children?: (msg: string) => ReactNode;
}

const MyErrorMessage: React.FC<ErrorMessageProps> = ({ name, children }) => (
    <ErrorMessage name={name}>
        {(msg) => (
        <div className='error'>
            {children ? children(msg) : msg}
        </div>
        )}
    </ErrorMessage>
);

export default MyErrorMessage;

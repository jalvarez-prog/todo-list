import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>ToDo List</h1>
            <InputWrapper {...props}/>
        </header>
    );
}

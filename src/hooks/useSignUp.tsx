import React, { useState } from 'react'
import options from '../components/datadummy/options';
import { Navigate } from 'react-router-dom';


const useSignUp = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleChange = (selected: any) => {
        setSelectedOption(selected);
    };

    const handleRegistration = () => {
        if (selectedOption.value === 'worker') {
            window.location.href = '/selectworker';
        } else if (selectedOption.value === 'student') {
            window.location.href = '/selectstudent';
        }
    };

    return { isVisible, selectedOption, shouldRedirect, toggleVisibility, handleChange, handleRegistration };
};

export default useSignUp
import React, { createContext, useContext, useState, useEffect } from 'react';

const PasswordContext = createContext();

export const usePassword = () => {
    return useContext(PasswordContext);
}

export const PasswordProvider = ({ children }) => {
    const [passwordLength, setPasswordLength] = useState(10);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [checkedOptionsCount, setCheckedOptionsCount] = useState(4); // Initialisé à 4 car toutes les options sont cochées

    useEffect(() => {
        const count = [includeUppercase, includeLowercase, includeNumbers, includeSymbols].filter(Boolean).length;
        setCheckedOptionsCount(count);
    }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    const generatePassword = () => {
        // votre logique pour générer le mot de passe
        // va ici en fonction des états ci-dessus

        let charset = "";
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        setGeneratedPassword(password);
    }

    const value = {
        passwordLength,
        setPasswordLength,
        includeUppercase,
        setIncludeUppercase,
        includeLowercase,
        setIncludeLowercase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
        generatedPassword,
        generatePassword,
        checkedOptionsCount
    };

    return (
        <PasswordContext.Provider value={value}>
            {children}
        </PasswordContext.Provider>
    );
}

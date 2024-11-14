import React, { useState, useEffect } from "react";

const Step1 = ({ name, email, onNextStep, onClearAllFields }) => {
    const [nameValue, setNameValue] = useState(name || "");
    const [emailValue, setEmailValue] = useState(email || "");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    // Effect to sync with props
    useEffect(() => {
        setNameValue(name || "");
        setEmailValue(email || "");
    }, [name, email]);

    const validateName = (value) => {
        if (!value) return "Nome não pode estar vazio";
        if (value.length < 3) return "Nome deve ter pelo menos 3 caracteres";
        if (/[^a-zA-Z\s]/.test(value))
            return "Nome não pode conter números ou caracteres especiais";
        return "";
    };

    const validateEmail = (value) => {
        if (!value) return "Email não pode estar vazio";
        if (value.length < 3) return "Email deve ter pelo menos 3 caracteres";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email inválido";
        return "";
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setNameValue(value);
        setNameError(validateName(value));
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmailValue(value);
        setEmailError(validateEmail(value));
    };

    const handleNext = () => {
        onNextStep({
            name: nameValue,
            email: emailValue,
        });
    };

    // Habilitar o botão "Próximo" se ambos os campos forem válidos
    const isNextButtonDisabled =
        nameError || emailError || !nameValue || !emailValue;

    const handleClearFields = () => {
        setNameValue("");
        setEmailValue("");
        setNameError("");
        setEmailError("");
        onClearAllFields();
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">
                1º - Insira seu Nome e Email
            </h2>

            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Nome
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                    </div>
                    <input
                        type="text"
                        id="name"
                        value={nameValue}
                        onChange={handleNameChange}
                        className={`mt-1 block w-full pl-10 h-11 rounded-md border-2 border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${
                            nameError ? "border-red-500" : "border-gray-900"
                        }`}
                    />
                </div>
                {nameError && (
                    <p className="text-xs text-red-500 mt-1">{nameError}</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-envelope text-gray-400"></i>
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={emailValue}
                        onChange={handleEmailChange}
                        className={`mt-1 block w-full pl-10 h-11 rounded-md border-2 border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${
                            emailError ? "border-red-500" : ""
                        }`}
                    />
                </div>
                {emailError && (
                    <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={isNextButtonDisabled}
                    className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm ${
                        isNextButtonDisabled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                    }`}
                >
                    Próximo
                </button>

                <button
                    type="button"
                    onClick={handleClearFields}
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Limpar campos
                </button>
            </div>
        </div>
    );
};

export default Step1;

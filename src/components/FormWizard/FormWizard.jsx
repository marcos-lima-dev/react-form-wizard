import React, { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

const FormWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cep: "",
        endereco: {
            logradouro: "",
            bairro: "",
            localidade: "",
            uf: "",
        },
    });

    // Handler para atualizar os dados do Step1
    const handleStep1Submit = (data) => {
        setFormData((prev) => ({
            ...prev,
            name: data.name,
            email: data.email,
        }));
        handleNextStep();
    };

    // Handler para atualizar o CEP
    const handleCepChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            cep: value,
        }));
    };

    // Navegação entre os passos
    const handleNextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    // Atualiza o endereço
    const updateEndereco = (data) => {
        setFormData((prev) => ({
            ...prev,
            endereco: data,
        }));
    };

    // Limpa todos os campos e reseta o passo atual
    const handleClearAllFields = () => {
        setFormData({
            name: "",
            email: "",
            cep: "",
            endereco: {
                logradouro: "",
                bairro: "",
                localidade: "",
                uf: "",
            },
        });
        setCurrentStep(1);
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            {currentStep === 1 && (
                <Step1
                    name={formData.name}
                    email={formData.email}
                    onNextStep={handleStep1Submit}
                    onClearAllFields={handleClearAllFields}
                />
            )}
            {currentStep === 2 && (
                <Step2
                    cep={formData.cep}
                    onCepChange={handleCepChange}
                    onPreviousStep={handlePreviousStep}
                    onNextStep={handleNextStep}
                    updateEndereco={updateEndereco}
                    onClearAllFields={handleClearAllFields}
                />
            )}
            {currentStep === 3 && (
                <Step3
                    name={formData.name}
                    email={formData.email}
                    cep={formData.cep}
                    endereco={formData.endereco}
                    onPreviousStep={handlePreviousStep}
                    onClearAllFields={handleClearAllFields}
                />
            )}
        </div>
    );
};

export default FormWizard;

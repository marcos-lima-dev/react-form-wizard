import React from "react";
import FormWizard from "./components/FormWizard/FormWizard";
import TransparentImage from "./assets/fundo-transparente.png"; // Ajuste o caminho conforme necessário

const App = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-800 to-indigo-900 relative">
            <img 
                src={TransparentImage} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-5" 
            />
            <div className="relative z-10">
                <FormWizard />
            </div>
        </div>
    );
};

export default App;

import React from "react";

const Step3 = ({ name, email, cep, endereco, onPreviousStep }) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">
                3º - Resultado dos Dados
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Nome
                </label>
                <input
                    type="text"
                    id="name"
                    value={name || ""} // Added fallback value
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email || ""} // Added fallback value
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="cep"
                    className="block text-sm font-medium text-gray-700"
                >
                    CEP
                </label>
                <input
                    type="text"
                    id="cep"
                    value={cep || ""} // Added fallback value
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="logradouro"
                    className="block text-sm font-medium text-gray-700"
                >
                    Logradouro
                </label>
                <input
                    type="text"
                    id="logradouro"
                    value={endereco?.logradouro || ""} // Added optional chaining and fallback
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="bairro"
                    className="block text-sm font-medium text-gray-700"
                >
                    Bairro
                </label>
                <input
                    type="text"
                    id="bairro"
                    value={endereco?.bairro || ""} // Added optional chaining and fallback
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="localidade"
                    className="block text-sm font-medium text-gray-700"
                >
                    Cidade
                </label>
                <input
                    type="text"
                    id="localidade"
                    value={endereco?.localidade || ""} // Added optional chaining and fallback
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="uf"
                    className="block text-sm font-medium text-gray-700"
                >
                    UF
                </label>
                <input
                    type="text"
                    id="uf"
                    value={endereco?.uf || ""} // Added optional chaining and fallback
                    readOnly
                    className="mt-1 block w-full h-11 rounded-md border-2 border-slate-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={onPreviousStep}
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Anterior
                </button>
            </div>
        </div>
    );
};

export default Step3;

import React, { useState } from "react";

const Step2 = ({
    cep,
    onCepChange,
    onPreviousStep,
    onNextStep,
    updateEndereco,
    onClearAllFields,
}) => {
    const [localCep, setLocalCep] = useState(cep);
    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const buscarEndereco = async (cep) => {
        if (cep.length === 8) {
            // Verifica se o CEP está no formato correto (00000000)
            try {
                const response = await fetch(
                    `https://viacep.com.br/ws/${cep}/json/`
                );
                const data = await response.json();

                if (!data.erro) {
                    const newEndereco = {
                        logradouro: data.logradouro,
                        bairro: data.bairro,
                        localidade: data.localidade,
                        uf: data.uf,
                    };
                    setEndereco(newEndereco);
                    updateEndereco(newEndereco); // Atualiza o estado do endereço no FormWizard
                } else {
                    alert("CEP não encontrado");
                    const emptyEndereco = {
                        logradouro: "",
                        bairro: "",
                        localidade: "",
                        uf: "",
                    };
                    setEndereco(emptyEndereco); // Limpa os campos se o CEP não for encontrado
                    updateEndereco(emptyEndereco);
                }
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
            }
        }
    };

    const handleCepChange = (event) => {
        const novoCep = event.target.value;
        setLocalCep(novoCep); // Atualiza o estado local
        onCepChange(novoCep); // Passa apenas o novo valor do CEP para o FormWizard
        if (/^\d{5}-?\d{3}$/.test(novoCep)) {
            buscarEndereco(novoCep.replace("-", "")); // Remove o hífen antes de buscar o CEP
        }
    };

    const handleClearFields = () => {
        setLocalCep("");
        setEndereco({
            logradouro: "",
            bairro: "",
            localidade: "",
            uf: "",
        });
        onClearAllFields();
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">2º - Insira seu CEP</h2>
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
                    value={localCep}
                    onChange={handleCepChange} // Chama a função corrigida aqui
                    className="mt-1 block w-full rounded-md border-2 border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10 p-2"
                    placeholder="00000-000"
                />
            </div>
            {/* Campos para Logradouro, Bairro, Cidade e UF */}
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
                    value={endereco.logradouro}
                    readOnly
                    className="mt-1 block w-full rounded-md border-2 border-slate-300 shadow-sm  sm:text-sm h-10 p-2"
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
                    value={endereco.bairro}
                    readOnly
                    className="mt-1 block w-full rounded-md border-2 border-slate-300 shadow-sm sm:text-sm h-10 p-2"
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
                    value={endereco.localidade}
                    readOnly
                    className="mt-1 block w-full rounded-md border-2 border-slate-300 shadow-sm sm:text-sm h-10 p-2"
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
                    value={endereco.uf}
                    readOnly
                    className="mt-1 block w-full rounded-md border-2 border-slate-300 shadow-sm sm:text-sm h-10 p-2"
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={onPreviousStep}
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 mr-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Anterior
                </button>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={handleClearFields}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Limpar campos
                    </button>
                    <button
                        type="button"
                        onClick={onNextStep}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;

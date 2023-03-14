import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

import Mockup from '../assets/code-mockup.png';

import toast from 'react-hot-toast';

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        try {
            await createSubscriber({
                variables: {
                    name,
                    email,
                }
            })
        } catch(error) {
            console.log(error);
        }

        toast.success('Logado com sucesso!', {
            position: 'bottom-center',
        });
        
        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="lg:w-full max-w-[1100px] lg:flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px] text-center justify-center lg:text-start lg:justify-start">
                    <div className="text-2xl lg:text-3xl justify-center lg:justify-start flex space-x-2">
                        <strong>Fábrica de Software</strong>
                        <p className="text-green-500">|</p>
                        <p className="text-gray-200">UNIPÊ</p>
                    </div>
                    <h1 className="mt-8 mx-4 lg:mx-0 text-[2.0rem] lg:text-[2.5rem] leading-tight">
                        Seja bem-vindo à <strong className="text-blue-500">plataforma completa</strong> do treinamento <strong className="text-blue-500">Frontend</strong>
                    </h1>
                    <p className="mt-8 mx-2 mb-8 lg:mb-0 lg:mx-0 lg:mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Acompanhe gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                        
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />

                        <button
                            type="submit"
                            disabled={loading || !name || !email}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
            <img src={Mockup} className="mt-10" alt="Mockup" />
        </div>
    );
}

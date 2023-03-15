import { TabView } from "../components/TabView";

import Mockup from '../assets/code-mockup.png';

export function Subscribe() {
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
                
                <TabView />
            </div>
            <img src={Mockup} className="mt-10" alt="Mockup" />
        </div>
    );
}

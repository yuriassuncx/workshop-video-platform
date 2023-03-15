import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetSubscriberByEmailQuery } from '../graphql/generated';

import toast from 'react-hot-toast';

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  
  async function handleVerifyIfUserExists(event: FormEvent) {
    event.preventDefault();

    toast.success('Logado com sucesso!', {
      position: 'bottom-center',
    });
  
    navigate('/event');
  }

  return (
    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
      <strong className="text-2xl mb-6 block">Acompanhe gratuitamente</strong>

      <div className="flex flex-col gap-2 w-full">          
        <input
            className="bg-gray-900 rounded px-5 h-14"
            type="email"
            placeholder="Digite seu email"
            onChange={event => setEmail(event.target.value)}
            value={email}
        />

        <button
            onClick={handleVerifyIfUserExists}
            disabled={!email}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
        >
            Entrar
        </button>
      </div>
    </div>
  )
}

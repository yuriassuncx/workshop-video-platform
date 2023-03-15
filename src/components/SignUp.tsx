import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateSubscriberMutation } from '../graphql/generated';

import toast from 'react-hot-toast';

export function SignUp() {
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
      });
    } catch (e) {
      toast.error("Ops! Algo deu errado!", {
          position: 'bottom-center',
      });
    }

    toast.success('Logado com sucesso!', {
      position: 'bottom-center',
    });
      
    navigate('/event');
  }

  return (
    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

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
                Cadastrar
            </button>
        </form>
    </div>
  )
}

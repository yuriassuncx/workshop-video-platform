import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Login } from './Login'
import { SignUp } from './SignUp'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function TabView() {
  let [categories] = useState({
    Login: [
      {
        id: 1,
        obj: <Login />
      },
    ],
    Cadastrar: [
      {
        id: 1,
        obj: <SignUp />
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-700 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-800',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-slate-700 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl',
                'ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md p-3"
                  >
                    {post.obj}
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

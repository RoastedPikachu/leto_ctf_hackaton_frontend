'use client';
import React, {useState, useEffect} from 'react';

import { useRouter } from 'next/navigation';

import axiosMixins from '@/mixins/axiosMixins';

export default function Home() {
  const router = useRouter();

  const {api, initAPI} = axiosMixins();

  const [fullName, setFullName] = useState('');
  const [token, setToken] = useState('');

  const fullNameRegExp = /^[A-Za-z]{1,20} [A-Za-z]{1,20}$/g;

  const sendCredentials = () => {
    if(fullNameRegExp.test(fullName)) {
      api.post('http://213.79.99.202:8000/auth/login', {username: fullName, password: token})
          .then(response => {
            console.log(response);
            if(response) {
              router.push('/profile');
            }
          })
    }
  }

  useEffect(() => {
    initAPI(true);
  }, []);

  return (
    <main className='relative w-full h-screen'>
      <div className='absolute mt-[15%] mlarge:mt-[30%] ml-[32.5%] mlarge:ml-[7.5%] pt-[25px] pl-[10px] pr-[10px] w-[30%] mlarge:w-[85%] h-[55%] border-2 border-[#ffffff66] bg-[#fffff66] rounded-xl z-10'>
        <img src='/static/letoctfLogo.svg' alt="Лого LetoCTF" className='ml-[10%] w-[80%]'/>

        <input
            type='text'
            placeholder='Введите имя и фамилию'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className='mt-[30px] ml-[10%] pl-[15px] w-[80%] h-[55px] outline-none rounded-2xl'
        />

        <input
            type='password'
            placeholder='Введите токен'
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className='mt-[40px] ml-[10%] pl-[15px] w-[80%] h-[55px] outline-none rounded-2xl'
        />

        <button
            className='mt-[50px] ml-[25%] w-[50%] h-[60px] border-2 border-[#62ffe3]
            text-[#62ffe3] bg-[#2eecc51a] shadow-[0_0_38px_rgba(46,236,197,0.1)] rounded-[25px]'
            onClick={() => sendCredentials()}
        >
          Войти
        </button>
      </div>
    </main>
  )
}

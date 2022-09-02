import React, { useState } from 'react';
import { parse } from 'cookie';
import Link from 'next/link';
import { useUniformContext } from '@uniformdev/context-react';
import Splitter from './Splitter';
import { RegistrationForm as RegistrationFormProps } from '../graphql-types';


export function RegisterForm({ heading, registeredText, buttonText }: RegistrationFormProps) {
  const [registered, setRegistered] = useState(
    typeof document !== 'undefined' ? !!document.cookie.match(/unfrmconf_registered/) : false
  );

  const { context } = useUniformContext();

  const onRegister = () => {
    document.cookie = 'unfrmconf_registered=true; path=/; samesite=lax';
    context.update({
      cookies: parse(document.cookie),
    });
    setRegistered(true);
  };
  return (
    <>
      <div className="py-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Uniform conf</p>
            {registered ? (
              <h1 className="my-4 text-5xl font-bold leading-tight">You are successfully registered.</h1>
            ) : (
              <h1 className="my-4 text-5xl font-bold leading-tight">{heading}</h1>
            )}
            <form>
              {registered ? (
                <>
                  <p className="pb-16">{registeredText}</p>
                  <Link href="/">
                    <a className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Return Home
                    </a>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={onRegister}
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  {buttonText}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}

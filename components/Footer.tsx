import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { ToggleEmbeddedContextDevTools } from '@uniformdev/context-devtools';
import Logo from './Logo';

const { serverRuntimeConfig } = getConfig();
const { uniformProjectId, uniformApiKey, uniformApiHost } = serverRuntimeConfig;

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-4">
          <div className="flex-1 mb-6">
            <Link prefetch={false} href="/">
              <a
                aria-label="Uniform"
                className="text-orange-600 no-underline hover:no-underline"
                href="https://uniform.dev"
              >
                <Logo />
              </a>
            </Link>
          </div>
          <p className="text-gray-900 text-right flex-1 leading-8">
            Uniform starter kit for Next.js © {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <ToggleEmbeddedContextDevTools
        initialSettings={{
          apiHost: uniformApiHost,
          apiKey: uniformApiKey,
          projectId: uniformProjectId,
        }}
      />
    </footer>
  );
};

export default Footer;

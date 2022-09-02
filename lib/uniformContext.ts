import { Context, ContextPlugin, enableContextDevTools, ManifestV2 } from '@uniformdev/context';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import type { NextPageContext } from 'next';
import manifest from './manifest.json';

export function createUniformContext(serverContext?: NextPageContext) {
  const plugins: ContextPlugin[] = [enableContextDevTools()];

  return new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins,
  });
}

import { Personalize } from '@uniformdev/context-react';
import { Hero } from './Hero';
import { formatPersonalizeVariants } from '../lib/formatPersonalizeVariants';
import { PersonalizedHeroesList, Hero as HeroProps } from '../graphql-types';

export function PersonalizedHeroList(fields: PersonalizedHeroesList) {
  if (!fields.uniformContextPersonalizationList || !fields.uniformContextPersonalizationList .length) {
    return null;
  }
  return (
    <Personalize
      name={fields.name ?? 'Default name for Personalized list of Heros'}
      variations={formatPersonalizeVariants<HeroProps>(fields.uniformContextPersonalizationList)}
      component={Hero}
    />
  );
}

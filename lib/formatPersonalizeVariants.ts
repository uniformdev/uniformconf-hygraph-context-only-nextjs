import { PersonalizedVariant } from '@uniformdev/context';
import { Node } from '../graphql-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatPersonalizeVariants<T extends Node & { uniformContextPersonalizationCriteria?: PersonalizedVariant['pz']}>(variants: T[]): (T & PersonalizedVariant)[] {
  console.log(variants);
  return variants.map((variant) => {
    const personalizedVariant: T & PersonalizedVariant = { ...variant, id: variant.id };
    if (variant.uniformContextPersonalizationCriteria) {
      personalizedVariant.pz = variant.uniformContextPersonalizationCriteria;
    }

    return personalizedVariant;
  });
}

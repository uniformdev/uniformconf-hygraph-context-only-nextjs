import React from 'react';
import { Personalize } from '@uniformdev/context-react';
import { Talk } from './Talk';
import { Talk as TalkProps, TalksList as TalksListProps } from '../graphql-types';
import { PersonalizedVariant } from '@uniformdev/context/*';
import { useScores } from '@uniformdev/context-react';

export function TalkList({ title, talks, numberToShow }: TalksListProps) {
  const scores = useScores();
  const hasScores = scores.techies > 0 || scores.nonTechies > 0;

  // for fun - personalizing the component title based on the tracker scores
  let headerTitle = title;
  if (scores.techies > 0) {
    headerTitle += ' for developers';
  } else if (scores.nonTechies > 0) {
    headerTitle += ' for marketers';
  }

  return (
    <fieldset>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            {headerTitle}
          </h1>
          <Personalize<TalkProps>
            name={title}
            count={numberToShow}
            variations={formatPersonalizeVariants(talks!, hasScores)}
            component={Talk}
          />
        </div>
      </section>
    </fieldset>
  );
}

export function formatPersonalizeVariants<T extends TalkProps | undefined>(
  variants: T[],
  hasScores: boolean
): (T & PersonalizedVariant)[] {
  const mappedVariants = variants.map((variant) => {
    const personalizedVariant: T & PersonalizedVariant = { ...variant, id: variant?.id } as T &
      PersonalizedVariant;
    // if (variant?.fields[PERSONALIZATION_CRITERIA_FIELD_ID]) {
    //   personalizedVariant.pz = [] as PersonalizedVariant['pz'];
    // }
    return personalizedVariant;
  });

  // if (hasScores) {
  //   return mappedVariants.filter((v) => v.pz);
  // }

  return mappedVariants;
}

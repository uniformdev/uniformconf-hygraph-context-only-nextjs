import { Personalize } from '@uniformdev/context-react';
import { TalkList } from './TalkList';
import { formatPersonalizeVariants } from '../lib/formatPersonalizeVariants';
import { PersonalizedTalksListList, TalksList as TalksListProps } from '../graphql-types';

export function PersonalizedTalksList(fields: PersonalizedTalksListList) {
  if (!fields.uniformContextPersonalizationList || !fields.uniformContextPersonalizationList .length) {
    return null;
  }
  return (
    <Personalize
      name={fields.name ?? 'Default name for Personalized list of Talk lists'}
      variations={formatPersonalizeVariants<TalksListProps>(fields.uniformContextPersonalizationList)}
      component={TalkList}
    />
  );
}

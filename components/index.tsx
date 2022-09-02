import { ComponentType } from 'react';
import { DefaultNotImplementedComponent } from './DefaultNotImplementedComponent';
import { Hero } from './Hero';
import { TalkList } from './TalkList';
import { WhyAttendTestPhotoLocation } from './WhyAttend';
import { Talk } from './Talk';
import { RegisterForm } from './RegisterForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalizedHeroList } from './PersonalizedHeroList';
import { PageComponents } from '../graphql-types';
import { PersonalizedTalksList } from './PersonalizedTalksList';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMapping = Record<string, ComponentType<any>>;

const mappings: ComponentMapping = {
  Hero: Hero,
  TalkList: TalkList,
  PersonalizedTalksListList: PersonalizedTalksList,
  Talk: Talk,
  WhyAttend: WhyAttendTestPhotoLocation,
  RegistrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
  PersonalizedHeroesList: PersonalizedHeroList,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveRenderer(hygraphEntry: PageComponents): ComponentType<PageComponents> {
  const componentImpl = mappings[hygraphEntry.__typename!];
  return componentImpl ?? DefaultNotImplementedComponent;
}

export default mappings;

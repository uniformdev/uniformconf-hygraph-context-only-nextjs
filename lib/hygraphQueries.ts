import { gql } from 'graphql-request'

export const allPagesQuery = gql`
  query AllPages {
    pages {
      id
      slug
      title
    }
  }
`

export const pageQuery = gql`
  fragment callToActionFields on CallToAction {
    __typename
    id
    heading1: heading
    subheading
    buttonLink
    buttonText1: buttonText
    buttonImage {
      ...imageFields
    }
  }

  fragment talkFields on Talk {
    id
    title
    description
    audience
  }

  fragment personalizedHeroFields on PersonalizedHeroesList {
    __typename
    id
    name
    uniformContextPersonalizationList {
      ...heroFields
    }
  }

  fragment personalisedTalksListFields on PersonalizedTalksListList {
    __typename
    id
    name
    uniformContextPersonalizationList {
      ...talksListFields
    }
  }

  fragment registrationFormField on RegistrationForm {
    __typename
    id
    heading
    buttonText
    registeredText
  }

  fragment talksListFields on TalksList {
    __typename
    id
    title
    titleWhenPersonalised
    numberToShow
    registerButtonText
    talks {
      ...talkFields
    }
    uniformContextPersonalizationCriteria
  }

  fragment whyAttendFields on WhyAttend {
    __typename
    id
    title
    description
    image {
      ...imageFields
    }
  }

  fragment heroFields on Hero {
    __typename
    id
    title
    description
    buttonText3: buttonText
    buttonLinkSlug
    buttonLinkSlug
    image {
      ...imageFields
    }
    uniformContextPersonalizationCriteria
  }

  fragment imageFields on Asset {
    id
    height
    url
    width
  }

  query PageQuery($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      slug
      components {
        ...callToActionFields
        ...heroFields
        ...whyAttendFields
        ...registrationFormField
        ...talksListFields
        ...personalizedHeroFields
        ...personalisedTalksListFields
      }
      uniformContextEnrichmentTagging
    }
  }
`

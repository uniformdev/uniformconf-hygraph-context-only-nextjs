# Uniform Context Contentful starter kit

This is Starter kit with a [Next.js](https://nextjs.org/) app enabled with [Uniform Context](https://docs.uniform.app/context/) and [Contenful](https://www.contentful.com/). This starter requires the [Uniform Context app](https://www.contentful.com/marketplace/app/uniform-optimize-for-contentful/) to be installed in your Contentful space..

## Getting Started

First, you need provide API keys to connect with empty Uniform App project and empty space in Contentful:

1. Copy `.env.example` into `.env` and fill all the keys

1. Enable SSR or SSG depending on NEXT_USE_SSR env variable, it is set to the SSG mode out of the box.
    See `.env.example`: 
    ```
    NEXT_USE_SSR=0
    ```

1. Run the following script to generate the slug page file:
    ```
    npm run generate:slug-page
    ```

### Setup Uniform Context

1. Import the Uniform Context definitions into your Uniform project (make sure your Uniform API key has permissions to write to Uniform Context):

    ```
    npm run push:context
    ```

1. Generate the Uniform Context manifest file locally by running this script:

    ```
    npm run generate:manifest
    ```

### Setup Contentful space

1. Import content model and content entries with assets (you may need to login into Contentful CLI):

    ```
    contentful space import --content-file ./scripts/export.json --space-id <YOUR_CONTENTFUL_SPACE_ID>
    ```

1. Install the Uniform app from marketplace or install the latest dev build of Uniform Context App https://github.com/uniformdev/platform/blob/canary/www/context-contentful/README.md

    > All configured fields for Context App should be automatically configured in App installation page

1. Make sure you apply the Uniform app to each field where Uniform is expected to be used:

    1. Open field settings
    1. Open the Appearance tab
    1. Select the Uniform app
    1. Confirm & Save the field changes.

    Repeat the following steps below for each of the models and field combination:

    ```
    - Page -> Enrichment Tags
    - Hero -> Personalization Criteria
    - Talk -> Personalization Criteria
    - Talk List -> Personalization Criteria
    ```
> For the security reason all automatically created fields in Content Types needs to manually configured to use Uniform Context in the Appearance section for each field.

1. Optional: pull latest Typescript types for content types:

    ```
    npm run generate:types
    ```

### How to run the app

1. Run dev server:

    ```
    npm run dev
    ```

1. Run the production build:

    ```
    npm run build
    npm run start
    ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export you local changes in Contentful and Uniform

1. Export latest Contentful content model and content (you may need to login into Contentful CLI first):

    ```
    contentful space export --config .\scripts\export-config.json --space-id <YOUR_CONTENTFUL_SPACE_ID>
    ```

1. Export the Uniform Context entities from your project:

    ```
    npm run pull:context
    ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

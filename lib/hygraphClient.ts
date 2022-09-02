import { GraphQLClient } from 'graphql-request'

const hygraphClient = (preview = false) => {
  if (!process.env.GRAPHCMS_URL) {
    throw new Error('GRAPHCMS_URL env variable is empty')
  }

  return new GraphQLClient(process.env.GRAPHCMS_URL, {
    headers: {
      ...(process.env.GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.GRAPHCMS_PREVIEW_TOKEN
            : process.env.GRAPHCMS_TOKEN
        }`
      })
    }
  })
}


export { hygraphClient }
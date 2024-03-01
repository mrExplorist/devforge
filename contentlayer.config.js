import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import GithubSlugger from 'github-slugger';
import readingTime from 'reading-time';
const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },

    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    updatedAt: {
      type: 'date',
      description: 'The date of the updation of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    image: {
      type: 'image',
      description: 'The image of the post',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      default: true,
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
});

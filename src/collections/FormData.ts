import { CollectionConfig } from 'payload/types';
import { lexicalEditor, LinkFeature, UploadFeature, BlocksFeature } from '@payloadcms/richtext-lexical';

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          LinkFeature({
            // Example showing how to customize the built-in fields
            // of the Link feature
            fields: [
              {
                name: 'rel',
                label: 'Rel Attribute',
                type: 'select',
                hasMany: true,
                options: ['noopener', 'noreferrer', 'nofollow'],
                admin: {
                  description:
                    'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                },
              },
            ],
          }),
          UploadFeature({
            collections: {
              uploads: {
                // Example showing how to customize the built-in fields
                // of the Upload feature
                fields: [
                  {
                    name: 'caption',
                    type: 'richText',
                    editor: lexicalEditor(),
                  },
                ],
              },
            },
          }),
          // This is incredibly powerful. You can re-use your Payload blocks
          // directly in the Lexical editor as follows:
          BlocksFeature({
            blocks: [],
          }),
        ],
      }),
    },
  ],
};

export default Pages;

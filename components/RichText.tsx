import { Block, BLOCKS, Document, Inline } from '@contentful/rich-text-types';
import RichTextAsset from './RichTextAsset';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const customMarkdownOptions = (content: Document) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Inline | Block) => (
      <RichTextAsset id={node.data.target.sys.id} assets={content.data.links.assets.block} />
    ),
  },
});

export function RichText({ content }: { content: Document }) {
  return <>{documentToReactComponents(content, customMarkdownOptions(content))}</>;
}

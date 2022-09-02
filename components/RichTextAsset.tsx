import Image from 'next/image';
import { Asset } from '../graphql-types';

export default function RichTextAsset({ id, assets }: { id: string; assets: Asset[] }) {
  const asset = assets?.find((asset) => asset.id === id);

  if (asset && asset.url) {
    return <Image src={asset.url} layout="fill" alt={asset.fileName} />;
  }

  return null;
}

import createImageSanityBuilder from '@sanity/image-url';

export const PROJECT_ID = 'jlf6c7o6';
export const DATASET = 'production';

const imageBuilder = createImageSanityBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});

export type ImageAsset = {
  _ref: string;
  _type: string;
};

export const imageUrlForPortableText = (asset: ImageAsset) => {
  const baseImageSourceConfig = imageBuilder.image(asset);

  const isGif = asset._ref.includes('gif');
  if (isGif) return baseImageSourceConfig.url();

  return baseImageSourceConfig.width(700).format('webp').url();
};

export const imageUrlBuilder = (src: string) => imageBuilder.image(src);

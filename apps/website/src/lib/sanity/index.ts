import imageUrlBuilderSanity from "@sanity/image-url";
import { sanityClient } from "sanity:client";

export type ImageAsset = {
  _ref: string;
  _type: string;
};

export const imageUrlForPortableText = (asset: ImageAsset) => {
  const baseImageSourceConfig =
    imageUrlBuilderSanity(sanityClient).image(asset);

  const isGif = asset._ref.includes("gif");
  if (isGif) return baseImageSourceConfig.url();

  return baseImageSourceConfig.width(700).format("webp").url();
};

export const imageUrlBuilder = (src: string) =>
  imageUrlBuilderSanity(sanityClient).image(src);

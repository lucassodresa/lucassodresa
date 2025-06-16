import { sanityClient } from '@/libs/axios.ts';
import type { PostModel } from '@/core/models/post.ts';
import type { SanityResponse } from '@/core/@types/sanity.ts';

const query = `*[_type == "post" && defined(slug)] | order(publishedAt desc)
{
  _id, 
  title, 
  "slug": slug.current,
  description,
  body,
  "mainImageUrl": mainImage.asset->url,
  author->{
    name,
    role,
    "imageUrl": image.asset->url
  },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  _updatedAt,
  _createdAt
}`;

export const loadAllPosts = async () => {
  const { data } = await sanityClient.get<SanityResponse<PostModel[]>>('/', {
    params: {
      query,
    },
  });

  return data.result;
};

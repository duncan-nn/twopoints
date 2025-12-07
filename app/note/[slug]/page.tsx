import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Skeleton from '@/components/Skeleton';
import { getPostCategories, getPostsByCategories, getSinglePost } from '@/lib/wordpress/post';
import Note from '@/components/Note';
import { stripOuterTags } from '@/lib/utils';
import RelatedNotes from '@/components/RelatedNotes';
import { NoteCategory } from '@/lib/types';

export const metadata: Metadata = {
  title: "Note | Insights & Ideas from TwoPoints Studio",
  description: "Read creative insights, brand strategy tips, and digital design trends from the minds behind TwoPoints Studio.",
};

const SingleNote = async ({ params, }: {params: Promise<{slug: string}>;}) => {
    const slug = (await params).slug;
    const post = await getSinglePost(slug);
    const relatedPosts = await getPostsByCategories(post.categories,1,10);
    const categories: NoteCategory[] = await getPostCategories();
  if (!post) {
    return notFound();
  }
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className='page-single-note'>
        <div className='header'>
            <div 
            className='note-thumbnail'
            style={{
                backgroundImage: `url('${featuredImage || "/post.png"}')`,
            }}></div>
            <div className='subject'>
                <div className='subject-tag'>
                    <span></span><h3 className='tag-text'>
                      {categories.find(cat => cat.id === post.categories[0])?.name || "Uncategorized"}
                    </h3>
                </div>
                <span className='title'><h1>{stripOuterTags(post.title.rendered)}</h1></span>
            </div>
            <div className='tag'>
            </div>
        </div>
        <div className='note-container'>
            <Note post={post}/>
            <Suspense fallback={<Skeleton/>}>
                {/* <RelatedPosts 
                relatedPosts = {filteredRelatedPosts}
            /> */}
            </Suspense>  
        </div>
        <RelatedNotes relatedPosts={relatedPosts.posts} categories={categories}/>
    </div>
  )
}

export default SingleNote
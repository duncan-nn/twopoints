'use client';
import { NoteCategory, Post } from '@/lib/types';
import Link from 'next/link';
// import { stripOuterTags } from '@/utils/util';
import React from 'react';
// import DOMPurify from "isomorphic-dompurify";

const RelatedNotes = ({
  relatedPosts,
  categories,
}: {
  relatedPosts: Post[],
  categories: NoteCategory[];
}) => {

    const special: { all?: NoteCategory; uncat?: NoteCategory } = {};
    const others: NoteCategory[] = [];

    for (const cat of categories) {
        if (cat.id === 21) {
            special.all = cat;
        } else if (cat.id === 1) {
            special.uncat = cat;
        } else {
            others.push(cat);
        }
    }

    const totalCount = others.reduce((sum, cat) => sum + cat.count, 0);

  const otherPostsWithFormattedDates = relatedPosts.map(post => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }));

  return (
      <div className='related-notes-section'>
        <div className='sidebar'>
            <div className='related-notes-head'>
                <span></span><h3 className='related-notes-text'>related notes</h3>
            </div>
            <div className='item-wrapper'>
                <Link href={`/notes`} className='sidebar-item'>
                  <h1>Explore all</h1><span className='count'>{totalCount}</span>
                </Link>
                {others.map((category) => {
                  return (
                      <Link key={category.id} href={`/notes?category=${category.slug}`} className='sidebar-item'>
                        <h1>{category.name}</h1><span className='count'>{category.count}</span>
                      </Link>
                  );
                })}
{/* 
                <Link href='/' className='sidebar-item'>
                <h1>web development</h1><span className='count'>14</span>
                </Link> */}

            </div>
        </div>
        <div className='related-notes-container'>
            <div className='related-notes'>
                {otherPostsWithFormattedDates.map((post) => {
                    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                    return (
                    <a key={post.id} href={`/note/${post.slug}`} className="related-note">
                        <div
                        className="note-thumbnail"
                        style={{
                            backgroundImage: `url('${featuredImage || "/post.png"}')`,
                        }}
                        > </div>
                        <div className="note-detail">
                        <div className='tag'>
                            <span></span><h3 className='tag-text'>
                              {/* {post.formattedDate} */}
                              {categories.find(cat => cat.id === post.categories[0])?.name || "Uncategorized"}
                              </h3>
                        </div>
                        <h3>{post.title.rendered}</h3>
                        </div>
                    </a>
                    );
                })}  
            </div>
        </div>
      </div>
  );
};

export default RelatedNotes;
      
      
      
    
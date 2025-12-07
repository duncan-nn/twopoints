import React, { Suspense } from "react";
import { Metadata } from "next";
import { getPostCategories, getPosts } from '@/lib/wordpress/post';
import HomeHeroSection from "@/components/HomeHeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurWorkSection from "@/components/OurWorkSection";
import OurExpertise from "@/components/OurExpertise";
import TextMarquee from "@/components/TextMarquee";
import BlogReview from "@/components/BlogReview";
import { NoteCategory } from "@/lib/types";
import Skeleton from "@/components/Skeleton";
import WhatsAppChat from "@/components/WhatsAppChat";

export const metadata: Metadata = {
  title: "TwoPoints Studio | Creative & Marketing Agency",
  description: "We help brands grow through strategy, design, virtual product photography, 3D visuals, and powerful digital marketing solutions.",
};

export default async function Home() {
  const categories: NoteCategory[] = await getPostCategories();
  
  const post_data = await getPosts("", 0, "", parseInt("1",10), 4,);
  const posts = post_data.posts;
  return (
    <div className="home-page">
      <HomeHeroSection />
      <WhoWeAreSection />
      <OurWorkSection />
      <OurExpertise />
      <TextMarquee />
      <Suspense fallback={<Skeleton/>}>
        <BlogReview posts={posts} categories={categories}/>
      </Suspense>
      <WhatsAppChat />
    </div>
  );
}

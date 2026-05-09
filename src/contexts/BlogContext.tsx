import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { BlogPost, blogPosts as defaultBlogPosts, featuredPost as defaultFeaturedPost } from '../app/data/blogPosts';

interface BlogContextType {
  posts: BlogPost[];
  featuredPost: BlogPost;
  createOrUpdatePost: (post: BlogPost) => void;
  deletePost: (slug: string) => void;
  getPost: (slug: string | undefined) => BlogPost | undefined;
  setFeaturedPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);
const STORAGE_KEY = 'honey_blog_posts';
const FEATURED_STORAGE_KEY = 'honey_blog_featured_post';

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const [featuredPost, setFeaturedPostState] = useState<BlogPost>(defaultFeaturedPost);

  useEffect(() => {
    try {
      const storedPosts = localStorage.getItem(STORAGE_KEY);
      const storedFeatured = localStorage.getItem(FEATURED_STORAGE_KEY);

      if (storedPosts) {
        setPosts(JSON.parse(storedPosts) as BlogPost[]);
      }

      if (storedFeatured) {
        setFeaturedPostState(JSON.parse(storedFeatured) as BlogPost);
      }
    } catch (error) {
      console.warn('Failed to load saved blog content:', error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem(FEATURED_STORAGE_KEY, JSON.stringify(featuredPost));
  }, [featuredPost]);

  const createOrUpdatePost = (post: BlogPost) => {
    setPosts((current) => {
      const index = current.findIndex((item) => item.slug === post.slug);
      if (index >= 0) {
        const next = [...current];
        next[index] = post;
        return next;
      }
      return [post, ...current];
    });
  };

  const deletePost = (slug: string) => {
    setPosts((current) => current.filter((post) => post.slug !== slug));
  };

  const getPost = (slug: string | undefined) => {
    if (!slug) return undefined;
    return posts.find((post) => post.slug === slug);
  };

  return (
    <BlogContext.Provider
      value={{ posts, featuredPost, getPost, createOrUpdatePost, deletePost, setFeaturedPost: setFeaturedPostState }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}

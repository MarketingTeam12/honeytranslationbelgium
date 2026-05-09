import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useBlog } from '../../contexts/BlogContext';

export function BlogPost() {
  const { getPost } = useBlog();
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#151249] mb-10 font-semibold hover:text-yellow-500"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="relative h-[360px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="p-10">
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-5xl font-bold text-[#151249] mb-6">{post.title}</h1>
            <p className="text-xl text-gray-700 mb-10">{post.excerpt}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

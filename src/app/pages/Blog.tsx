import { Calendar, ArrowRight, ChevronRight, Globe, Mail } from 'lucide-react';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../../contexts/BlogContext';

export function Blog() {
  const { posts: blogPosts, featuredPost } = useBlog();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent('New email subscription');
    const body = encodeURIComponent(`Please add this email to the subscription list:\n\n${newsletterEmail}`);
    window.location.href = `mailto:markerting@honeytranslation.com?subject=${subject}&body=${body}`;
    setNewsletterEmail('');
  };

  const categories = ['All', 'Translation', 'Localization', 'Business', 'Languages', 'Culture'];
  const postsPerPage = 3;

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const visiblePosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageToggle = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  return (
    <div className="pt-16">
      {/* SECTION 1: BLOG HERO */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-28 px-6 overflow-hidden">
        {/* Decorative world map pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm0 110c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z' fill='%23151249'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-md border border-gray-100 mb-8">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Latest Updates</span>
          </div>

          <h1 className="text-6xl md:text-7xl mb-8 font-bold text-[#151249]">
            Insights & Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore expert articles on translation, languages, global communication, and industry updates.
          </p>

          {/* Language icons decoration */}
          <div className="flex justify-center gap-3 mt-10 flex-wrap">
            {['📚', '🌍', '💬', '✍️', '🗣️'].map((icon, index) => (
              <div 
                key={index} 
                className="text-3xl hover:scale-125 transition-transform cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* SECTION 2: FEATURED BLOG POST */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl group hover:shadow-[0_20px_60px_rgba(21,18,73,0.15)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151249]/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-[#151249] mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6">
                  <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all font-bold">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CATEGORY FILTER BAR */}
      <section className="py-8 bg-gray-50 px-6 sticky top-16 z-40 border-b border-gray-200 backdrop-blur-sm bg-gray-50/95">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] shadow-lg shadow-yellow-400/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#151249] border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BLOG GRID */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#151249] rounded-full text-xs font-semibold shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#151249] mb-3 leading-tight group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {post.excerpt}
                  </p>

                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#151249] font-semibold hover:gap-3 transition-all group-hover:text-yellow-600">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {visiblePosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-[#151249] mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER SIGNUP */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-[#151249]" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Stay Updated With Language Insights
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Get expert translation tips, industry news, and exclusive content delivered to your inbox.
                  </p>
                </div>

                {/* Right - Form */}
                <div>
                  <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(event) => setNewsletterEmail(event.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 focus:border-yellow-400 focus:outline-none transition-all"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all font-bold text-lg"
                    >
                      Subscribe Now
                    </button>
                    <p className="text-white/60 text-xs text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PAGINATION */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-sm text-gray-500 mb-4">Page {currentPage} of {totalPages}</p>
          <button
            type="button"
            onClick={handlePageToggle}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#151249] text-white hover:bg-[#1e1a5e] transition-all"
          >
            {currentPage < totalPages ? 'More Pages' : 'Back to First Page'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

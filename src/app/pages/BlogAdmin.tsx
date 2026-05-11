import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit3, Lock, Plus, Save, Trash2, Unlock, UploadCloud } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlog } from '../../contexts/BlogContext';
import type { BlogPost } from '../data/blogPosts';

const blankPost: BlogPost = {
  slug: '',
  image: '',
  title: '',
  excerpt: '',
  category: '',
  date: '',
  readTime: '',
  content: ['']
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function BlogAdmin() {
  const { posts, createOrUpdatePost, deletePost } = useBlog();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [formValue, setFormValue] = useState<BlogPost>(blankPost);
  const [contentText, setContentText] = useState('');
  const [message, setMessage] = useState('');

  const { isAdmin, login, logout } = useAuth();
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const selectedPost = useMemo(
    () => posts.find((post) => post.slug === selectedSlug) ?? null,
    [posts, selectedSlug]
  );

  useEffect(() => {
    if (selectedPost) {
      setFormValue(selectedPost);
      setContentText(selectedPost.content.join('\n\n'));
    } else {
      setFormValue(blankPost);
      setContentText('');
    }
  }, [selectedPost]);

  const handleInputChange = (field: keyof BlogPost, value: string) => {
    setFormValue((current) => ({ ...current, [field]: value }));
  };

  const handleImageUpload = async (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFormValue((current) => ({ ...current, image: reader.result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const finalSlug = formValue.slug.trim() || makeSlug(formValue.title);
    if (!finalSlug || !formValue.title || !formValue.excerpt) {
      setMessage('Please provide a title, excerpt, and valid slug.');
      return;
    }

    const content = contentText
      .split(/\n{2,}|\r\n{2,}/)
      .map((line) => line.trim())
      .filter(Boolean);

    createOrUpdatePost({
      ...formValue,
      slug: finalSlug,
      content: content.length ? content : [''],
      date: formValue.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: formValue.readTime || '5 min read'
    });

    setSelectedSlug(finalSlug);
    setMessage('Post saved successfully.');
  };

  const handleDelete = () => {
    if (!selectedSlug) return;
    if (!window.confirm('Delete this post permanently?')) return;
    deletePost(selectedSlug);
    setSelectedSlug(null);
    setMessage('Post deleted successfully.');
  };

  const handleLogin = () => {
    if (!login(password.trim())) {
      setLoginError('Invalid admin password.');
      return;
    }
    setLoginError('');
    setPassword('');
  };

  if (!isAdmin) {
    return (
      <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
          <div className="mb-8 text-center">
            <Unlock className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h1 className="text-3xl font-bold text-[#151249]">Admin Login</h1>
            <p className="text-gray-600 mt-2">Only authorized admins can access the blog upload panel.</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#151249] mb-2">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>

            {loginError && <p className="text-sm text-red-600">{loginError}</p>}

            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-full bg-yellow-400 px-6 py-3 text-[#151249] font-semibold shadow-md hover:bg-yellow-500 transition-all"
            >
              Unlock Blog Admin
            </button>

            <div className="text-sm text-gray-500 text-center">
              Use the secret admin password to manage blog posts. This panel is restricted to admin use only.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#151249] font-semibold hover:text-yellow-500">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl font-bold text-[#151249] mt-4">Blog Admin Panel</h1>
            <p className="text-gray-600 mt-2 max-w-xl">
              Create, edit, and publish blog content for the blog section. Uploaded hero images are saved locally so the editor remains dynamic in the browser.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-[#151249] font-semibold shadow-sm hover:border-gray-300 transition-all"
            >
              <Lock className="w-4 h-4" />
              Logout
            </button>
            <button
              type="button"
              onClick={() => setSelectedSlug(null)}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-[#151249] font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              Create New Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-8">
          <aside className="space-y-4">
            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-[#151249]">Existing Posts</h2>
                  <p className="text-sm text-gray-500">Select a post to edit or delete.</p>
                </div>
                <Edit3 className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-3">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <button
                      key={post.slug}
                      type="button"
                      onClick={() => setSelectedSlug(post.slug)}
                      className={`w-full text-left rounded-2xl px-4 py-3 transition-all border ${selectedSlug === post.slug ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-semibold text-sm text-[#151249]">{post.title}</p>
                          <p className="text-xs text-gray-500 truncate">{post.slug}</p>
                        </div>
                        <span className="text-xs text-gray-400">{post.category || 'Uncategorized'}</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No saved blog posts yet.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#151249] mb-4">Tip</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Use the editor to draft article content, provide a hero image URL or upload an image directly, and save posts so they appear in the Blog page immediately.
              </p>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Title</span>
                  <input
                    value={formValue.title}
                    onChange={(event) => handleInputChange('title', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="Post title"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Slug</span>
                  <input
                    value={formValue.slug}
                    onChange={(event) => handleInputChange('slug', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="e.g. modern-translation-trends"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Category</span>
                  <input
                    value={formValue.category}
                    onChange={(event) => handleInputChange('category', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="Translation, Business, Culture"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Date</span>
                  <input
                    value={formValue.date}
                    onChange={(event) => handleInputChange('date', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="December 1, 2025"
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-semibold text-gray-700">Read Time</span>
                  <input
                    value={formValue.readTime}
                    onChange={(event) => handleInputChange('readTime', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="e.g. 7 min read"
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <span className="text-sm font-semibold text-gray-700">Excerpt</span>
                  <textarea
                    value={formValue.excerpt}
                    onChange={(event) => handleInputChange('excerpt', event.target.value)}
                    rows={3}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none resize-none"
                    placeholder="Short summary for the blog card"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 mt-6">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Image URL</span>
                  <input
                    value={formValue.image}
                    onChange={(event) => handleInputChange('image', event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none"
                    placeholder="https://... or upload below"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-gray-700">Upload Image</span>
                  <div className="flex items-center gap-3 rounded-2xl border border-dashed border-gray-300 p-4 bg-gray-50">
                    <UploadCloud className="w-5 h-5 text-gray-500" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageUpload(event.target.files?.[0] ?? undefined)}
                      className="w-full text-sm text-gray-700 file:mr-4 file:rounded-full file:border-0 file:bg-yellow-400 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#151249]"
                    />
                  </div>
                </label>
              </div>

              {formValue.image && (
                <div className="mt-6 rounded-3xl overflow-hidden border border-gray-200">
                  <img src={formValue.image} alt="Blog preview" className="w-full h-64 object-cover" />
                </div>
              )}

              <label className="block mt-6 space-y-2">
                <span className="text-sm font-semibold text-gray-700">Article Content</span>
                <textarea
                  value={contentText}
                  onChange={(event) => setContentText(event.target.value)}
                  rows={12}
                  className="w-full rounded-3xl border border-gray-200 px-4 py-4 focus:border-yellow-400 focus:ring-yellow-100 focus:outline-none font-sans"
                  placeholder="Write each paragraph separated by a blank line"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-[#151249] font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Save Post
                  </button>
                  {selectedSlug && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="ml-3 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-red-700 hover:bg-red-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Post
                    </button>
                  )}
                </div>
                {message && <p className="text-sm text-gray-600">{message}</p>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

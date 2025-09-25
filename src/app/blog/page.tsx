import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      slug: 'nest-todo-app',
      title: 'How to Build Your First NestJS TODO App with AI Assistance',
      description: 'Learn how to create a fully functional TODO application using NestJS framework with the help of AI tools.',
      date: '2025-09-19'
    },
    {
      slug: 'nest-todo-app/behind-the-scenes',
      title: 'NestJS: Behind the scenes',
      description: 'Learn how NestJS works under the hood by exploring the decorators used in a simple TODO App.',
      date: '2025-09-25'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand-600 mb-4 font-cv">
            Dev Journey
          </h1>
          <p className="text-xl text-text-600 font-cv">
            Thoughts, tutorials, and insights from my development experience
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-cv text-lg"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg border border-neutral-200 p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col space-y-4">
                <time className="text-sm text-text-500 font-cv">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-2xl font-bold text-text-900 font-cv">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-600 font-cv leading-relaxed">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold font-cv"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

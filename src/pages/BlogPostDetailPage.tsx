import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { ArrowLeft, Calendar, Clock, User, Home, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogContent";

// Simple inline markdown formatting function
const formatInlineMarkdown = (text: string) => {
  let html = text;
  // Bold **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // LaTeX / inline math formulas $Formula$
  html = html.replace(/\$(.*?)\$/g, '<code class="bg-[#faf6ed] text-stone-850 px-1 py-0.5 rounded font-mono text-xs font-bold">$1</code>');
  return html;
};

// Custom light parser for blog content structure
const renderMarkdownContent = (content: string) => {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Headings ### Title
    if (trimmed.startsWith("###")) {
      return (
        <h3 key={idx} className="font-display text-xl md:text-2xl font-black uppercase text-stone-900 mt-10 mb-4 tracking-tight border-b border-black/5 pb-2">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }

    // Horizontal Separator ---
    if (trimmed === "---") {
      return <hr key={idx} className="my-10 border-black/5" />;
    }

    // Tables
    if (trimmed.includes("|") && trimmed.includes("\n")) {
      const lines = trimmed.split("\n").filter(l => l.trim());
      const rows = lines.map(line => 
        line.split("|")
          .map(cell => cell.trim())
          .filter((_, i) => i > 0 && i < line.split("|").length - 1)
      );
      
      const headers = rows[0];
      const bodyRows = rows.slice(2);

      return (
        <div key={idx} className="my-8 border border-black/5 rounded-2xl overflow-hidden shadow-soft text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-black/5 font-bold text-stone-800 uppercase tracking-wider text-[9px]">
                {headers.map((h, i) => (
                  <th key={i} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((r, ri) => (
                <tr key={ri} className="border-b border-black/5 last:border-b-0 hover:bg-[#faf6ed]/40 transition-colors">
                  {r.map((c, ci) => (
                    <td 
                      key={ci} 
                      className="p-4 font-semibold text-stone-700" 
                      dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(c) }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Unordered List Items
    if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
      const items = trimmed.split("\n").map(l => l.replace(/^[\*\-]\s+/, "").trim());
      return (
        <ul key={idx} className="space-y-3.5 my-6 pl-6 list-disc text-stone-700 text-sm md:text-base font-medium">
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
          ))}
        </ul>
      );
    }

    // Ordered List Items
    if (/^\d+\./.test(trimmed)) {
      const items = trimmed.split("\n").map(l => l.replace(/^\d+\.\s+/, "").trim());
      return (
        <ol key={idx} className="space-y-3.5 my-6 pl-6 list-decimal text-stone-700 text-sm md:text-base font-medium">
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
          ))}
        </ol>
      );
    }

    // Default Paragraph text
    return (
      <p 
        key={idx} 
        className="text-sm md:text-base text-stone-700 leading-relaxed my-5 font-medium"
        dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
      />
    );
  });
};

const BlogPostDetailPage = () => {
  const { blogId } = useParams();
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Schema.org structured data (JSON-LD) for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": "https://www.mbfinishtech.com/favicon.png",
    "datePublished": "2026-08-12T12:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "M.B. Finishing Technologies",
      "url": "https://www.mbfinishtech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "M.B. Finishing Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mbfinishtech.com/favicon.png"
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.mbfinishtech.com/blog/${post.id}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Technical Blog | M.B. Finishing</title>
        <meta name="description" content={post.excerpt.slice(0, 150) + "..."} />
        <link rel="canonical" href={`https://www.mbfinishtech.com/blog/${post.id}`} />
        <meta name="keywords" content={`${post.keywords.join(", ")}, automatic buffing, M.B. Finishing`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | M.B. Finishing`} />
        <meta property="og:description" content={post.excerpt.slice(0, 150) + "..."} />
        <meta property="og:url" content={`https://www.mbfinishtech.com/blog/${post.id}`} />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | M.B. Finishing`} />
        <meta name="twitter:description" content={post.excerpt.slice(0, 150) + "..."} />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />

        {/* Blog Schema Script */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <SiteLayout>
        {/* Breadcrumbs Banner */}
        <div className="bg-[#faf6ed] pt-28 pb-4 md:pt-36 border-b border-black/5">
          <div className="container">
            <nav className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="size-3" /> Home
              </Link>
              <ChevronRight className="size-3 text-stone-400" />
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="size-3 text-stone-400" />
              <span className="text-stone-900 truncate max-w-[200px] md:max-w-none">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Blog post reader layout */}
        <section className="py-16 bg-[#faf6ed]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Back button */}
              <div className="mb-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-stone-800 hover:bg-stone-50 transition-colors shadow-soft"
                >
                  <ArrowLeft className="size-3.5" /> Back to Blog
                </Link>
              </div>

              {/* White reading paper wrapper */}
              <article className="bg-white rounded-[2.5rem] border border-black/5 p-6 md:p-12 shadow-soft">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-b border-black/5 pb-6 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-primary" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5 text-primary" /> {post.author}
                  </span>
                </div>

                {/* H1 Main Heading */}
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-stone-950 font-black uppercase tracking-tight leading-[1.1] mb-6">
                  {post.title}
                </h1>

                {/* Introductory paragraph */}
                <p className="text-base md:text-lg text-stone-500 font-semibold italic border-l-4 border-primary pl-4 my-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Body Content rendering */}
                <div className="mt-8 font-medium">
                  {renderMarkdownContent(post.content)}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA inquiry form */}
        <div className="bg-white border-t border-black/5">
          <div className="container pt-16 -mb-12 text-center">
            <div className="industrial-badge mx-auto mb-4">Request Quotation</div>
            <h2 className="font-display text-4xl leading-none tracking-tight text-stone-950 uppercase font-black">
              Interested in our Polishing Automation?
            </h2>
            <p className="mt-4 text-sm text-stone-500 max-w-xl mx-auto font-medium">
              Submit your production guidelines and sizing metrics below, and our engineering team will build a custom machinery quote.
            </p>
          </div>
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default BlogPostDetailPage;

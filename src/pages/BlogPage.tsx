import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogContent";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Technical Metal Polishing Guides & Blogs | M.B. Finishing</title>
        <meta
          name="description"
          content="Explore technical guides, engineering studies, and industry updates on automatic buffing, mirror finish parameters, surface roughness, and sheet polishers."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/blog" />
        <meta name="keywords" content="metal polishing blog, buffing guides, vessel polishing machine, sheet polisher automation, mirror finish Ra" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technical Metal Polishing Guides & Blogs | M.B. Finishing" />
        <meta property="og:description" content="Explore B2B technical guides and industry updates on metal polishing automation, surface finish standards, and buffing machinery." />
        <meta property="og:url" content="https://www.mbfinishtech.com/blog" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Metal Polishing Guides & Blogs | M.B. Finishing" />
        <meta name="twitter:description" content="Read our latest engineering guides on achieving mirror finishes and automating sheet polishing." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <PageBanner
          title="Technical Blog"
          subtitle="Insights, engineering guides, and updates on automatic metal polishing technology."
        />

        <section className="py-20 bg-[#faf6ed]">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group hover-lift overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-6 md:p-8 shadow-soft flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Meta Indicators */}
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-primary" /> {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900 leading-tight group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      <User className="size-3.5 text-stone-400" /> By {post.author.split(" ")[0]}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-stone-950 text-white hover:bg-primary hover:text-stone-950 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all shadow-md group-hover:translate-x-0.5"
                    >
                      Read Post <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export default BlogPage;

import { articles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return articles.map((a) => ({ id: String(a.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const article = articles.find((a) => a.id === Number(id))
  if (!article) return {}

  return {
    title: `${article.title} | eFiche`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function BlogDetail({ params }: Props) {
  const { id } = await params
  const article = articles.find((a) => a.id === Number(id))
  if (!article) notFound()

  const related = articles.filter((a) => a.id !== article.id).slice(0, 2)
  const paragraphs = article.content.trim().split('\n').filter(Boolean)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative w-full h-[55vh] min-h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-page gap-4">
          <span className="px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-medium tracking-wide">
            {article.category}
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-white max-w-3xl leading-snug">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <Image src={article.author.avatar} alt={article.author.name} width={40} height={40} className="rounded-full object-cover border-2 border-white/30" />
            <div className="text-left">
              <p className="text-white text-sm font-semibold">{article.author.name}</p>
              <p className="text-white/60 text-xs">{article.date} &nbsp;·&nbsp; {article.readTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="px-4 md:px-page py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="font-mono text-2xl font-bold text-primary mt-10 mb-4">{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={i} className="font-semibold text-primary mt-6 mb-1">{line.replace(/\*\*/g, '')}</p>
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-gray-600 leading-relaxed ml-4 list-disc">{line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
            }
            return <p key={i} className="text-gray-600 leading-relaxed mb-4">{line}</p>
          })}
        </div>

        {/* Author card */}
        <div className="mt-16 p-6 rounded-2xl border border-gray-100 bg-gray-50 flex items-center gap-5">
          <Image src={article.author.avatar} alt={article.author.name} width={64} height={64} className="rounded-full object-cover" />
          <div>
            <p className="font-semibold text-primary">{article.author.name}</p>
            <p className="text-secondary text-sm">{article.author.role}</p>
            <p className="text-gray-500 text-sm mt-1">Published on {article.date}</p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-secondary text-sm font-medium hover:underline">
            ← Back to News &amp; Events
          </Link>
        </div>
      </main>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="px-4 md:px-page py-16 bg-gray-50">
          <h2 className="font-mono text-2xl font-bold text-primary mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((r) => (
              <Link key={r.id} href={`/blog/${r.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/5 min-h-48 relative overflow-hidden">
                  <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm text-white text-xs font-medium">
                    {r.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between w-full sm:w-3/5">
                  <div>
                    <h3 className="font-bold text-primary text-sm leading-snug mb-2 group-hover:text-secondary transition-colors">{r.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <Image src={r.author.avatar} alt={r.author.name} width={28} height={28} className="rounded-full object-cover grayscale" />
                    <p className="text-gray-400 text-xs">{r.author.name} · {r.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}

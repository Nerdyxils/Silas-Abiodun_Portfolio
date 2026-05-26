import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        category: data.category as string,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as string,
    content,
  }
}

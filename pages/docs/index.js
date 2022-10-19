import DocsLayout from '@/layouts/DocsLayout'

import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const docs = await getAllFilesFrontMatter('docs')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, docs, posts, pagination } }
}

export default function DocsHome({ docs, posts, pagination }) {
  return (
    <DocsLayout>
      <SectionContainer>
        <ListLayout docs={docs} posts={posts} title="Explore the docs" pagination={pagination} />
      </SectionContainer>
    </DocsLayout>
  )
}

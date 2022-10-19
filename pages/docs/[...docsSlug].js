import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

export async function getStaticPaths() {
  const posts = getFiles('docs')
  return {
    paths: posts.map((p) => ({
      params: {
        docsSlug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allFrontMatter = await getAllFilesFrontMatter('docs')
  const postIndex = allFrontMatter.findIndex(
    (post) => formatSlug(post.slug) === params.docsSlug.join('/')
  )
  const prev = allFrontMatter[postIndex + 1] || null
  const next = allFrontMatter[postIndex - 1] || null
  const post = await getFileBySlug('docs', params.docsSlug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)
  return { props: { post, authorDetails, prev, next, allFrontMatter } }
}

export default function Docs({ post, authorDetails, prev, next, allFrontMatter }) {
  const { mdxSource, frontMatter } = post
  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={'DocsLayout'}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          allFrontMatter={allFrontMatter}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              Under construction
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}

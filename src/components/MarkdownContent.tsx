import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownContentProps = {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content space-y-4 text-text">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="font-heading pt-4 text-2xl font-bold text-primary">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-heading pt-2 text-xl font-semibold text-text">{children}</h3>
          ),
          p: ({ children }) => <p className="text-text-muted leading-relaxed">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc space-y-1 pl-5 text-text-muted">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-1 pl-5 text-text-muted">{children}</ol>
          ),
          a: ({ href, children }) => (
            <a href={href} className="font-medium text-accent underline-offset-2 hover:underline">
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-secondary/40 px-1.5 py-0.5 text-sm text-primary">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

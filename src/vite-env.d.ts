/// <reference types="vite/client" />

interface ImportMeta {
  readonly glob: {
    (
      pattern: string,
      options?: {
        query?: string
        import?: string
        eager?: boolean
      },
    ): Record<string, unknown>
  }
}

declare module '*.md?raw' {
  const content: string
  export default content
}

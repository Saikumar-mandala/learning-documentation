import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// import rehypeRaw from 'rehype-raw';
import { useState, useEffect } from 'react';
import 'highlight.js/styles/github-dark.css';

interface MarkdownViewerProps {
    filePath: string;
    title?: string;
}

export default function MarkdownViewer({ filePath, title }: MarkdownViewerProps) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(filePath)
            .then(res => {
                if (!res.ok) throw new Error('Failed to load documentation');
                return res.text();
            })
            .then(text => {
                console.log('Markdown loaded successfully:', filePath);
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error('Markdown load error:', err, 'Path:', filePath);
                setError(err.message);
                setLoading(false);
            });
    }, [filePath]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-12">
                <div className="text-center">
                    <i className="fa-solid fa-spinner fa-spin text-4xl text-blue-500 mb-4"></i>
                    <p className="text-gray-600">Loading documentation...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <i className="fa-solid fa-circle-exclamation text-red-500 text-2xl mr-2"></i>
                <span className="text-red-700">Error: {error}</span>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            {title && (
                <div className="mb-6 pb-4 border-b-2 border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <i className="fa-solid fa-book text-blue-600"></i>
                        {title}
                    </h1>
                </div>
            )}

            <div className="markdown-content prose prose-lg max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 border-b-2 border-blue-500 pb-2" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-800" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700" {...props} />,
                        p: ({ node, ...props }) => <p className="my-3 text-gray-700 leading-relaxed" {...props} />,
                        ul: ({ node, ...props }) => <ul className="my-4 ml-6 list-disc space-y-2" {...props} />,
                        ol: ({ node, ...props }) => <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                        code: ({ node, inline, className, children, ...props }: any) => {
                            if (inline) {
                                return (
                                    <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" {...props}>
                                        {children}
                                    </code>
                                );
                            }
                            return (
                                <code className={`${className} block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 whitespace-pre-wrap break-words`} {...props}>
                                    {children}
                                </code>
                            );
                        },
                        pre: ({ node, ...props }) => <pre className="my-4" {...props} />,
                        blockquote: ({ node, ...props }) => (
                            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 bg-blue-50 py-2" {...props} />
                        ),
                        table: ({ node, ...props }) => (
                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full border border-gray-300" {...props} />
                            </div>
                        ),
                        thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
                        tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-200" {...props} />,
                        tr: ({ node, ...props }) => <tr className="hover:bg-gray-50" {...props} />,
                        th: ({ node, ...props }) => <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300" {...props} />,
                        td: ({ node, ...props }) => <td className="px-4 py-2 text-gray-700 border border-gray-300" {...props} />,
                        a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

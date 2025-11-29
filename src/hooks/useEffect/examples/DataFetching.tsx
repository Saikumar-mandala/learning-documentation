import { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

const DataFetching = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Define async function inside effect
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // Simulate network delay for better demo
                await new Promise(resolve => setTimeout(resolve, 1500));

                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPosts(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array = run once on mount

    const handleRefresh = () => {
        setPosts([]);
        setLoading(true);
        // Re-trigger fetch by remounting or calling function
        // Here we just manually call it again for demo simplicity
        // In real app, you might use a refresh dependency
        const fetchPosts = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError('Failed to refresh');
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    };

    return (
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                    1️⃣ Data Fetching (Run Once)
                </h3>
                <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg transition-all disabled:opacity-50"
                >
                    🔄 Refresh
                </button>
            </div>

            <div className="bg-white bg-opacity-90 rounded-lg p-6 min-h-[200px]">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-full py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                        <p className="text-blue-600 font-semibold">Fetching data...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-8 text-red-500">
                        <p className="text-xl font-bold">❌ Error</p>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {posts.map(post => (
                            <div key={post.id} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
                                <h4 className="font-bold text-gray-800 text-lg mb-1 capitalize">
                                    {post.title.substring(0, 30)}...
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {post.body.substring(0, 60)}...
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    <span className="text-purple-300">useEffect</span>(() =&gt; &#123;
                </p>
                <p className="text-white text-sm font-mono ml-4 mb-1">
                    fetchData();
                </p>
                <p className="text-white text-sm font-mono">
                    &#125;, []); <span className="text-gray-400">// Empty array = Runs ONLY on mount</span>
                </p>
            </div>
        </div>
    );
};

export default DataFetching;

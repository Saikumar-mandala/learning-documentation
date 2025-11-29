import MarkdownViewer from '../components/MarkdownViewer';

const CSSPage = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-brands fa-css3-alt text-blue-500"></i>
                        The Ultimate CSS Cheat Sheet
                    </h1>
                    <p className="text-lg md:text-xl text-blue-200">
                        Your quick reference for everything CSS, from Flexbox to Grid and beyond.
                    </p>
                </div>

                <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-8 border border-white border-opacity-20">
                    <MarkdownViewer filePath="/docs/css/CSSCheatSheet.md" />
                </div>
            </div>
        </div>
    );
};

export default CSSPage;

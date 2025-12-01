import MarkdownViewer from '../components/MarkdownViewer';

const TailwindPage = () => {
    return (
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 min-h-screen p-1 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-solid fa-wind text-white"></i>
                        The Ultimate Tailwind CSS Cheat Sheet
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100">
                        Rapidly build modern websites without ever leaving your HTML.
                    </p>
                </div>

                <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl p-1 md:p-8 border border-white border-opacity-20">
                    <MarkdownViewer filePath="/docs/css/TailwindCheatSheet.md" />
                </div>
            </div>
        </div>
    );
};

export default TailwindPage;

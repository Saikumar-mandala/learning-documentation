import MarkdownViewer from '../components/MarkdownViewer';

const BootstrapPage = () => {
    return (
        <div className="bg-gradient-to-br from-purple-700 to-indigo-800 min-h-screen p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-brands fa-bootstrap text-purple-300"></i>
                        The Ultimate Bootstrap 5 Cheat Sheet
                    </h1>
                    <p className="text-lg md:text-xl text-purple-200">
                        All classes, components, and utilities in one place.
                    </p>
                </div>

                <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-8 border border-white border-opacity-20">
                    <MarkdownViewer filePath="/docs/css/BootstrapCheatSheet.md" />
                </div>
            </div>
        </div>
    );
};

export default BootstrapPage;

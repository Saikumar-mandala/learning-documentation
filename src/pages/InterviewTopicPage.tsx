import MarkdownViewer from '../components/MarkdownViewer';

interface InterviewTopicPageProps {
    title: string;
    icon: string;
    iconColor: string;
    description: string;
    filePath: string;
    gradient: string;
}

const InterviewTopicPage = ({ title, icon, iconColor, description, filePath, gradient }: InterviewTopicPageProps) => {
    return (
        <div className={`min-h-screen ${gradient} p-1 md:p-6`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className={`${icon} ${iconColor}`}></i>
                        {title} Interview Questions
                    </h1>
                    <p className="text-lg md:text-xl text-white text-opacity-80">
                        {description}
                    </p>
                </div>

                <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl p-1 md:p-8 border border-white border-opacity-20">
                    <MarkdownViewer filePath={filePath} />
                </div>
            </div>
        </div>
    );
};

export default InterviewTopicPage;

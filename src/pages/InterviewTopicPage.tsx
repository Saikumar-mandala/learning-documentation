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
        <div className={`min-h-screen ${gradient} py-12`}>
            <div className="container-fluid">
                <div className="mb-8 text-center px-4">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 tracking-tighter sm:tracking-normal leading-none uppercase">
                        <i className={`${icon} ${iconColor} text-4xl sm:text-6xl`}></i>
                        {title} Questions
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

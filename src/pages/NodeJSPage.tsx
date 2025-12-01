import React from 'react';
import MarkdownViewer from '../components/MarkdownViewer';

const NodeJSPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 py-12 px-1 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-brands fa-node text-green-500"></i> Node.js Mastery
                    </h1>
                    <p className="text-xl md:text-2xl text-green-200 mb-4">
                        Server-Side JavaScript for Modern Web Apps
                    </p>
                    <p className="text-base md:text-lg text-white max-w-3xl mx-auto opacity-90">
                        Master the Event Loop, Streams, Modules, and build scalable backend applications.
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl overflow-hidden border border-white border-opacity-10 shadow-2xl">
                    <MarkdownViewer filePath="/docs/interview/nodejs-questions.md" />
                </div>
            </div>
        </div>
    );
};

export default NodeJSPage;

import { useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import MarkdownViewer from '../../../components/MarkdownViewer';

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Modal Dialog</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                </div>
                <div className="text-gray-600">{children}</div>
            </div>
        </div>,
        document.body
    );
}

const PortalsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-door-open mr-2"></i>Portals</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-cyan-600"></i>
                                Portals Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/06-portals/PortalsConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 transition-all"
                    >
                        Open Portal Modal
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                        Click the button to open a modal rendered via Portal (outside this component's DOM hierarchy).
                    </p>
                </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <p>This modal is rendered using <code className="bg-gray-100 px-2 py-1 rounded">createPortal()</code>!</p>
                    <p className="mt-2">It renders directly into <code className="bg-gray-100 px-2 py-1 rounded">document.body</code>, not inside the parent component.</p>
                </Modal>
            </div>
        </div>
    );
};

export default PortalsExample;

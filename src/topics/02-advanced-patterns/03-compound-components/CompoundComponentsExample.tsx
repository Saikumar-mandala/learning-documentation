import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const TabsContext = createContext<{ activeIndex: number; setActiveIndex: (i: number) => void } | undefined>(undefined);

function Tabs({ children }: { children: ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">{children}</div>
        </TabsContext.Provider>
    );
}

function TabList({ children }: { children: ReactNode }) {
    return <div className="flex border-b">{children}</div>;
}

function Tab({ children, index }: { children: ReactNode; index: number }) {
    const context = useContext(TabsContext);
    if (!context) throw new Error('Tab must be used within Tabs');
    const { activeIndex, setActiveIndex } = context;
    const isActive = activeIndex === index;

    return (
        <button
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-3 font-semibold transition-all ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
        >
            {children}
        </button>
    );
}

function TabPanels({ children }: { children: ReactNode }) {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabPanels must be used within Tabs');
    const panels = Array.isArray(children) ? children : [children];
    return <div className="p-6">{panels[context.activeIndex]}</div>;
}

function TabPanel({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

const CompoundComponentsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-cubes mr-2"></i>Compound Components</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-violet-600"></i>
                                Compound Components Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/03-compound-components/CompoundComponentsConcepts.md" />
                    </div>
                )}

                <Tabs>
                    <TabList>
                        <Tab index={0}>Profile</Tab>
                        <Tab index={1}>Settings</Tab>
                        <Tab index={2}>Messages</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><div className="text-gray-800"><h3 className="font-bold text-lg">Profile</h3><p>Your profile information here.</p></div></TabPanel>
                        <TabPanel><div className="text-gray-800"><h3 className="font-bold text-lg">Settings</h3><p>Configure your preferences.</p></div></TabPanel>
                        <TabPanel><div className="text-gray-800"><h3 className="font-bold text-lg">Messages</h3><p>Your messages appear here.</p></div></TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
};

export default CompoundComponentsExample;

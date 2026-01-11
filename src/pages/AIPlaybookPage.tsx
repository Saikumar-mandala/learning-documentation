import React, { useState, useMemo } from 'react';
import { promptsData, type PromptItem } from '../data/promptsData';

const PromptCard = ({ prompt }: { prompt: PromptItem }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl">
            <div className="md:flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-800 group-hover:bg-indigo-500/5 transition-colors">
                <h3 className="text-lg font-bold text-white flex items-center gap-3 mb-4 md:mb-0">
                    <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono">
                        #{prompt.id}
                    </span>
                    {prompt.title}
                </h3>
                <button
                    onClick={handleCopy}
                    className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${copied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20'
                        }`}
                >
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                    {copied ? 'Copied!' : 'Copy Prompt'}
                </button>
            </div>
            <div className="p-6">
                <div className="relative">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 pointer-events-none">
                        <i className="fa-solid fa-terminal text-4xl"></i>
                    </div>
                    <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
                        {prompt.content}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const AIPlaybookPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const filteredSections = useMemo(() => {
        return promptsData.map(section => ({
            ...section,
            prompts: section.prompts.filter(prompt =>
                prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prompt.content.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(section => section.prompts.length > 0);
    }, [searchTerm]);

    const tabs = ['All', ...promptsData.map(s => s.title.split(' – ')[0].trim())];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
            {/* Premium Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/20 blur-[120px] rounded-full animate-bounce [animation-duration:8s]"></div>
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-blue-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative container-fluid py-20 space-y-24">

                {/* Header / Hero Section */}
                <header className="relative text-center space-y-10 py-12">
                    {/* Decorative Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in duration-700">
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                            The Engineering Playbook v2.0
                        </span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-white animate-in slide-in-from-top-8 duration-700 fill-mode-both">
                            Master the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                                Art of Prompting
                            </span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700 fill-mode-both px-4">
                            Unlock professional-grade engineering workflows with our curated library of
                            <span className="text-white font-semibold"> 80+ battle-tested AI prompts </span>
                            designed for modern full-stack development.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-4 animate-in fade-in duration-1000 delay-500 fill-mode-both">
                        <div className="text-center group">
                            <div className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors">80+</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Prompts</div>
                        </div>
                        <div className="w-px h-12 bg-slate-800 hidden md:block"></div>
                        <div className="text-center group">
                            <div className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">6</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Categories</div>
                        </div>
                        <div className="w-px h-12 bg-slate-800 hidden md:block"></div>
                        <div className="text-center group">
                            <div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">100%</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Optimized</div>
                        </div>
                    </div>
                </header>

                {/* Search and Navigation Bar */}
                <div className="sticky top-6 z-50 animate-in slide-in-from-top-12 duration-1000 delay-700 fill-mode-both">
                    <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-2 rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-2">
                        <div className="relative flex-1">
                            <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-slate-500"></i>
                            <input
                                type="text"
                                placeholder="Search resources, topics, or stack..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border-none rounded-3xl py-4 pl-14 pr-6 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                        <div className="flex gap-1 overflow-x-auto p-1 bg-black/20 rounded-3xl scrollbar-none">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeTab === tab
                                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-105'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {tab === 'All' ? 'Library' : tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-16">
                    {filteredSections.map((section, idx) => {
                        const shortTitle = section.title.split(' – ')[0].trim();
                        if (activeTab !== 'All' && activeTab !== shortTitle) return null;

                        return (
                            <section key={idx} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
                                    <h2 className="text-xl font-bold text-slate-400 tracking-widest uppercase">
                                        {section.title}
                                    </h2>
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {section.prompts.map((prompt) => (
                                        <PromptCard key={prompt.id} prompt={prompt} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {filteredSections.length === 0 && (
                        <div className="text-center py-20 space-y-4">
                            <div className="text-6xl text-slate-700">
                                <i className="fa-solid fa-face-frown"></i>
                            </div>
                            <p className="text-slate-500 text-xl font-medium">No prompts found matching "{searchTerm}"</p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-indigo-400 hover:text-indigo-300 font-bold"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="text-center py-12 border-t border-slate-800">
                    <p className="text-slate-500 text-sm">
                        Designed for high-performance development workflows.
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default AIPlaybookPage;

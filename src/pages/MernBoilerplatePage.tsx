import React, { useState } from 'react';
import { mernBoilerplateData } from '../data/mernBoilerplateData';
import type { BoilerplateSnippet } from '../data/mernBoilerplateData';

const MernBoilerplatePage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const categories = ['All', ...new Set(mernBoilerplateData.map(s => s.category))];

    const filteredSnippets: BoilerplateSnippet[] = activeCategory === 'All'
        ? mernBoilerplateData
        : mernBoilerplateData.filter(s => s.category === activeCategory);

    const handleCopy = (code: string, id: number) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#0a0f18] text-slate-300 font-sans selection:bg-indigo-500/30">
            {/* Premium Header */}
            <header className="relative py-24 px-6 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full animate-pulse"></div>
                </div>

                <div className="relative z-10 container-fluid text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-indigo-400">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                        Project Starter
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        MERN <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Boilerplate</span> Lab
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Stop writing the same auth and database logic over and over. Copy premium, battle-tested boilerplate for every project.
                    </p>
                </div>
            </header>

            <main className="container-fluid py-12 space-y-12">
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory border-b border-white/5">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 snap-center whitespace-nowrap ${activeCategory === cat
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                : 'bg-white/5 text-slate-500 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Snippets Grid */}
                <div className="grid grid-cols-1 gap-8">
                    {filteredSnippets.map((snippet) => (
                        <div key={snippet.id} className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-10">
                                <div className="md:w-1/3 space-y-6">
                                    <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                                        {snippet.category}
                                    </div>
                                    <h3 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">
                                        {snippet.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {snippet.description}
                                    </p>
                                    <button
                                        onClick={() => handleCopy(snippet.code, snippet.id)}
                                        className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-3 ${copiedId === snippet.id
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-white/5 text-white hover:bg-indigo-600'
                                            }`}
                                    >
                                        <i className={`fa-solid ${copiedId === snippet.id ? 'fa-check' : 'fa-copy'}`}></i>
                                        {copiedId === snippet.id ? 'Copied to Clipboard!' : 'Copy Boilerplate'}
                                    </button>
                                </div>

                                <div className="md:w-2/3 space-y-6">
                                    <div className="relative rounded-3xl overflow-hidden bg-[#05090f] border border-white/5 group-hover:border-indigo-500/20 transition-all">
                                        <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center px-4 gap-1.5 border-b border-white/5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                            <span className="ml-auto text-[10px] text-slate-600 font-mono font-bold uppercase tracking-tighter">
                                                {snippet.language}
                                            </span>
                                        </div>
                                        <pre className="p-10 pt-16 text-xs text-indigo-300 font-mono leading-relaxed overflow-x-auto scrollbar-thin scrollbar-thumb-white/10">
                                            <code>{snippet.code}</code>
                                        </pre>
                                    </div>

                                    {/* Code Explanation Section */}
                                    <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <div className="h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-[10px]">
                                                <i className="fa-solid fa-lightbulb"></i>
                                            </div>
                                            <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">How it works</p>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed italic">
                                            {snippet.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer CTA */}
            <footer className="max-w-7xl mx-auto py-24 px-6 text-center">
                <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-white">Ready to Build Next Big Thing?</h2>
                        <p className="text-indigo-100 max-w-2xl mx-auto text-lg opacity-80">
                            Combine these snippets with the MERN Roadmap to launch your professional SaaS in record time.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MernBoilerplatePage;

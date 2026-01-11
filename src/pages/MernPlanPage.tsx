import React, { useState } from 'react';
import { interviewData } from '../data/interviewData';
import { machineCodingData } from '../data/machineCodingData';
import { arrayMethodsQuestions } from '../data/arrayMethodsQuestions';

const MernPlanPage: React.FC = () => {
    const [bibleView, setBibleView] = useState<'cards' | 'explorer'>('cards');
    const [selectedCategory, setSelectedCategory] = useState<string>("Basic Concept Questions");

    const bibleCategories = [
        "Basic Concept Questions", "Callback & Parameters", "Coding Questions (Very Common)",
        "Object & Real-World Scenarios", "Map vs Other Methods (High Value)", "Advanced & Tricky Questions",
        "Edge Case & Output Questions", "Polyfill & Internal Working", "React / Frontend Interview Questions",
        "Common Mistakes (Interview Favorite)", "Rapid-Fire One Liners"
    ];

    return (
        <div className="min-h-screen py-8 md:py-20">
            <div className="container-fluid space-y-16 md:space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-pulse">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Job-Friendly • Production-Focused
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tighter sm:tracking-tight leading-none">
                        30-Day MERN <br className="sm:hidden" /> + Next.js Plan
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A comprehensive roadmap to take you from a React beginner to an interview-ready Full Stack developer in 30 days.
                    </p>
                </header>

                {/* Weekly Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PlanCard
                        week="WEEK 1"
                        title="Strong Foundations"
                        tagline="Reality Check Week"
                        color="blue"
                        items={[
                            { title: "JavaScript (30-40 min)", desc: "map, filter, reduce, async/await, Promise flow, Closures (important for React)" },
                            { title: "React Core (60 min)", desc: "Functional components, useState, useEffect (deep dive), Controlled forms, Conditional rendering, Lists + keys" }
                        ]}
                        outcome="JS interview fear खत्म।"
                        task="Simple CRUD UI (no backend yet)"
                    />

                    <PlanCard
                        week="WEEK 2"
                        title="Next.js Core"
                        tagline="Differentiator Week"
                        color="indigo"
                        items={[
                            { title: "Routing & Rendering", desc: "App Router, Dynamic routes, Client vs Server Components, SSR vs SSG (when & why)" },
                            { title: "Data Fetching", desc: "Server component fetch, Loading & error UI, Caching (basic understanding)" }
                        ]}
                        outcome="Modern Next.js Architecture mastery."
                        task="Create Next.js app, SSR page + Client component, Dynamic route page"
                    />

                    <PlanCard
                        week="WEEK 3"
                        title="Backend + Auth"
                        tagline="Most Important"
                        color="purple"
                        items={[
                            { title: "Node + Express", desc: "MVC structure, Middleware flow, Centralized error handling, Proper status codes" },
                            { title: "Authentication", desc: "Login/Signup, JWT, HttpOnly cookies, Role-based access (E2E)" }
                        ]}
                        outcome="Full control over user flow & security."
                        task="Auth APIs, Protected routes, Role check middleware"
                    />

                    <PlanCard
                        week="WEEK 4"
                        title="Full MERN Integration"
                        tagline="Interview Ready"
                        color="pink"
                        items={[
                            { title: "Advanced Features", desc: "Pagination, Search & filters, API error handling, Loading states, Logout flow" },
                            { title: "Final Polish", desc: "README with explanation, Clean folder structure, Deployment prep" }
                        ]}
                        outcome="Resume + Interview ready project."
                        task="Complete MERN + Next.js app with full functionality"
                    />
                </div>

                {/* Interview Simulator Section */}
                <section className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-16 space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest">
                                <i className="fa-solid fa-microphone-lines"></i> Live Session
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                Interview <span className="text-indigo-400">Simulator</span>
                            </h2>
                            <p className="text-slate-400 max-w-xl">
                                Master the "Art of Explanation". We've structured these questions from a 2-year experience perspective.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-black/40 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl">
                                <i className="fa-solid fa-user-tie"></i>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Interviewer Mode</p>
                                <p className="text-sm text-white font-black">Senior Arch</p>
                            </div>
                        </div>
                    </header>

                    <InterviewSimulator />
                </section>

                {/* Machine Coding Lab Section */}
                <section className="space-y-12 py-12">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20">
                            The Lab
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter sm:tracking-tight leading-none">
                            Machine <br className="sm:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Coding Lab</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Can you build these in 60 minutes? No libraries, just pure logic and state management.
                        </p>
                    </div>

                    <MachineCodingLab />
                </section>

                {/* Project Section */}
                <section className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-white">Project: Admin + User Management System</h2>
                            <p className="text-slate-400">The definitive project to showcase your full-stack skills.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-slate-300">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-blue-400 border-l-4 border-blue-400 pl-4">Tech Stack</h3>
                                <ul className="space-y-2 font-mono text-sm pl-4">
                                    <li>Next.js (frontend)</li>
                                    <li>Node + Express (backend)</li>
                                    <li>MongoDB</li>
                                    <li>JWT Auth</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-2 space-y-4">
                                <h3 className="text-xl font-semibold text-indigo-400 border-l-4 border-indigo-400 pl-4">Non-Negotiable Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 text-sm">
                                    <FeatureItem title="Authentication" desc="Signup/Login, HttpOnly cookies, Token expiry" />
                                    <FeatureItem title="Authorization" desc="Admin/User roles, Protected pages" />
                                    <FeatureItem title="Admin Panel" desc="Pagination, Search, Update/Delete users" />
                                    <FeatureItem title="User Dashboard" desc="Profile update, Protected dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mastering Core Logic Section */}
                <section className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Mastering Core Logic</h2>
                            <p className="text-slate-400 max-w-xl text-lg italic">"Logic clear equals interview clear."</p>
                        </div>

                        {/* View Toggle Menu */}
                        <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm self-start md:self-auto">
                            <button
                                onClick={() => setBibleView('cards')}
                                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${bibleView === 'cards' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                <i className="fa-solid fa-layer-group mr-2"></i> Card View
                            </button>
                            <button
                                onClick={() => setBibleView('explorer')}
                                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${bibleView === 'explorer' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                <i className="fa-solid fa-list-check mr-2"></i> Bible Explorer
                            </button>
                        </div>
                    </div>

                    {bibleView === 'explorer' && (
                        /* Bible Selection Menu */
                        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory animate-in slide-in-from-top-4 duration-500">
                            {bibleCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tight whitespace-nowrap transition-all border snap-center ${selectedCategory === cat
                                        ? 'bg-purple-600 border-purple-400 text-white shadow-xl shadow-purple-600/20'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-purple-500/30 hover:text-white'
                                        }`}
                                >
                                    {cat.replace(/ \(.*\)/, '')}
                                </button>
                            ))}
                        </div>
                    )}

                    {bibleView === 'cards' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-700">
                            <ConceptCard
                                title="map()"
                                desc="Changes each item, returns new array, length stays same."
                                formula="array.map(item => newItem)"
                                hindi="Har item ko change karta hai."
                                questions={machineCodingData.filter(q => q.title.toLowerCase().includes('map') || q.id === 12)}
                                interviewData={arrayMethodsQuestions.find(d => d.method === 'map')}
                            />
                            <ConceptCard
                                title="filter()"
                                desc="Keeps matching items, removes others, returns new array."
                                formula="array.filter(item => condition)"
                                hindi="Condition match honey par rakhta hai."
                                questions={machineCodingData.filter(q => q.title.toLowerCase().includes('filter'))}
                                interviewData={arrayMethodsQuestions.find(d => d.method === 'filter')}
                            />
                            <ConceptCard
                                title="reduce()"
                                desc="Combines all items into one value using accumulator."
                                formula="array.reduce((acc, curr) => ..., init)"
                                hindi="Sabko mila kar ek value banata hai."
                                questions={machineCodingData.filter(q => q.title.toLowerCase().includes('reduce') || [9, 10, 11, 15].includes(q.id))}
                                interviewData={arrayMethodsQuestions.find(d => d.method === 'reduce')}
                            />
                        </div>
                    ) : (
                        /* Bible Explorer View */
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                            {arrayMethodsQuestions.map((methodData) => (
                                <div key={methodData.method} className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 space-y-8 hover:border-purple-500/20 transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-3xl font-black text-purple-400 tracking-tighter uppercase">{methodData.method}()</h3>
                                        <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xs font-mono">
                                            {methodData.sections.find(s => s.title === selectedCategory)?.questions.length || 0}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <p className="text-[10px] text-purple-400/60 font-black uppercase tracking-[0.2em]">Questions in {selectedCategory.split(' ')[0]}</p>
                                            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                                                {methodData.sections.find(s => s.title === selectedCategory)?.questions.map((q) => (
                                                    <div key={q.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl group/q hover:bg-white/5 transition-all">
                                                        <div className="flex gap-3">
                                                            <span className="text-[10px] text-slate-600 font-mono mt-0.5">#{q.id}</span>
                                                            <p className="text-sm text-slate-300 group-hover/q:text-white transition-colors leading-relaxed font-medium">
                                                                {q.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {(!methodData.sections.find(s => s.title === selectedCategory)) && (
                                                    <div className="text-center py-10 opacity-30 italic text-sm">No questions in this category.</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Footer Note */}
                <footer className="text-center py-10 border-t border-slate-800">
                    <p className="text-slate-500 font-medium italic">
                        "2 years experience developer = Not expert, but understands full flow & can debug issues."
                    </p>
                    <p className="text-emerald-400 mt-4 font-bold text-xl">अब सिर्फ execution बाकी है।</p>
                </footer>

            </div>
        </div>
    );
};

// Sub-components
const PlanCard = ({ week, title, tagline, items, outcome, task, color }: any) => {
    const colors: any = {
        blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400',
        indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-400',
        purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400',
        pink: 'from-pink-500/20 to-pink-600/5 border-pink-500/30 text-pink-400',
    };

    return (
        <div className={`bg-gradient-to-br ${colors[color]} border rounded-3xl p-6 space-y-6 hover:scale-[1.02] transition-transform duration-300 shadow-xl`}>
            <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">{week}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 uppercase font-bold tracking-tighter">{tagline}</span>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <ul className="space-y-4">
                    {items.map((item: any, idx: number) => (
                        <li key={idx} className="space-y-1">
                            <span className="text-sm font-semibold block text-slate-100">{item.title}</span>
                            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pt-4 space-y-3 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">OUTCOME</span>
                    <span className="text-slate-300 italic">{outcome}</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                    <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold whitespace-nowrap">TASK</span>
                    <span className="text-slate-300">{task}</span>
                </div>
            </div>
        </div>
    );
};

const InterviewSimulator = () => {
    const [activeTopic, setActiveTopic] = useState(interviewData[0].topic);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const currentSection = interviewData.find(s => s.topic === activeTopic);

    return (
        <div className="space-y-8 relative">
            {/* Topic Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/5">
                {interviewData.map((section) => (
                    <button
                        key={section.topic}
                        onClick={() => {
                            setActiveTopic(section.topic);
                            setExpandedId(null);
                        }}
                        className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTopic === section.topic
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                            : 'text-slate-500 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {section.topic}
                    </button>
                ))}
            </div>

            {/* Questions List */}
            <div className="grid grid-cols-1 gap-4">
                {currentSection?.questions.map((q) => (
                    <div
                        key={q.id}
                        className={`group bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${expandedId === q.id ? ' ring-2 ring-indigo-500/50' : ''
                            }`}
                    >
                        <div
                            onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                            className="p-6 cursor-pointer flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${q.type === 'viva' ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
                                    }`}>
                                    {q.type}
                                </span>
                                <h3 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">
                                    {q.question}
                                </h3>
                            </div>
                            <div className={`transition-transform duration-300 ${expandedId === q.id ? 'rotate-180 text-indigo-400' : 'text-slate-600'}`}>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        {expandedId === q.id && (
                            <div className="p-6 pt-0 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                                    <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Candidate's Answer</p>
                                    <p className="text-slate-300 leading-relaxed text-sm">{q.answer}</p>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">
                                        <i className="fa-solid fa-lightbulb"></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest leading-none mb-1">Interviewer's Tip</p>
                                        <p className="text-xs text-indigo-300 italic">"{q.interviewerTip}"</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const MachineCodingLab = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machineCodingData.map((challenge) => (
                <div key={challenge.id} className="group bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 space-y-8 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>

                    <div className="flex justify-between items-start">
                        <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${challenge.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400' :
                            challenge.difficulty === 'Mid' ? 'bg-orange-500/10 text-orange-400' :
                                'bg-red-500/10 text-red-400'
                            }`}>
                            {challenge.difficulty}
                        </div>
                        <div className="text-slate-500 text-xs font-bold font-mono">
                            <i className="fa-regular fa-clock mr-2"></i>{challenge.timeLimit}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                            {challenge.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {challenge.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Requirements</p>
                            <ul className="grid grid-cols-1 gap-2">
                                {challenge.requirements.map((req, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                                        <i className="fa-solid fa-check text-emerald-500/40 mt-0.5"></i>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Logic Hint</p>
                            <p className="text-xs text-slate-300 italic">"{challenge.logicHint}"</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
const FeatureItem = ({ title, desc }: any) => (
    <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
        <span className="text-indigo-300 font-semibold block">{title}</span>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

const ConceptCard = ({ title, desc, formula, hindi, questions, interviewData }: any) => {
    const [showQuestions, setShowQuestions] = useState(false);

    return (
        <div className="bg-slate-900/60 border border-white/5 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] space-y-6 hover:border-blue-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>

            <div className="space-y-2">
                <h3 className="text-2xl font-black text-blue-400 tracking-tight">{title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed italic">"{hindi}"</p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>

            <div className="font-mono text-[11px] bg-black/60 p-4 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-inner">
                {formula}
            </div>

            {/* Selection Tabs */}
            <div className="flex gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
                <button
                    onClick={() => setShowQuestions(false)}
                    className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${!showQuestions ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                    Coding Lab
                </button>
                <button
                    onClick={() => setShowQuestions(true)}
                    className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${showQuestions ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                    Interview Bible
                </button>
            </div>

            {!showQuestions ? (
                /* Machine Coding Section */
                <div className="space-y-4 animate-in fade-in duration-500">
                    {questions && questions.length > 0 && (
                        <>
                            <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em]">Machine Coding Rounds</p>
                            <ul className="space-y-2">
                                {questions.map((q: any) => (
                                    <li key={q.id} className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
                                        <div className="h-5 w-5 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-[8px] flex-shrink-0 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all">
                                            <i className="fa-solid fa-code"></i>
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[11px] text-slate-200 font-bold leading-none">{q.title}</p>
                                            <p className="text-[9px] text-slate-500 font-medium uppercase tracking-tighter italic">{q.difficulty} • {q.timeLimit}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ) : (
                /* Interview Questions Section */
                <div className="space-y-6 animate-in fade-in duration-500 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                    {interviewData?.sections.map((section: any, idx: number) => (
                        <div key={idx} className="space-y-3">
                            <h4 className="text-[10px] text-purple-400 font-black uppercase tracking-widest border-b border-purple-500/20 pb-1">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.questions.map((q: any) => (
                                    <li key={q.id} className="flex items-start gap-3 group/q cursor-help">
                                        <span className="text-[9px] text-slate-600 mt-1 font-mono">Q{q.id}.</span>
                                        <p className="text-[11px] text-slate-400 group-hover/q:text-slate-200 transition-colors leading-relaxed">
                                            {q.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MernPlanPage;

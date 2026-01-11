import { Link } from 'react-router-dom';

const InterviewPrepPage = () => {
    const topics = [
        {
            id: 'react',
            title: 'React',
            icon: 'fa-brands fa-react',
            color: 'text-blue-400',
            bg: 'bg-blue-900',
            desc: 'Hooks, Virtual DOM, Components',
            link: '/interview/react'
        },
        {
            id: 'javascript',
            title: 'JavaScript',
            icon: 'fa-brands fa-js',
            color: 'text-yellow-400',
            bg: 'bg-yellow-900',
            desc: 'ES6+, Closures, Async/Await',
            link: '/interview/javascript'
        },
        {
            id: 'css',
            title: 'CSS',
            icon: 'fa-brands fa-css3-alt',
            color: 'text-blue-500',
            bg: 'bg-blue-800',
            desc: 'Flexbox, Grid, Box Model',
            link: '/interview/css'
        },
        {
            id: 'html',
            title: 'HTML',
            icon: 'fa-brands fa-html5',
            color: 'text-orange-500',
            bg: 'bg-orange-900',
            desc: 'Semantics, Accessibility, SEO',
            link: '/interview/html'
        },
        {
            id: 'challenges',
            title: '100 Challenges',
            icon: 'fa-solid fa-code',
            color: 'text-green-400',
            bg: 'bg-green-900',
            desc: 'Easy to Hard Coding Problems',
            link: '/interview/challenges'
        },
        {
            id: 'nodejs',
            title: 'Node.js',
            icon: 'fa-brands fa-node',
            color: 'text-green-500',
            bg: 'bg-emerald-900',
            desc: 'Event Loop, Express, Streams',
            link: '/interview/nodejs'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12">
            <div className="container-fluid">
                <div className="text-center mb-12 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter sm:tracking-normal">
                        <i className="fa-solid fa-user-graduate mr-4 text-purple-400"></i>
                        Interview <br className="sm:hidden" /> Prep
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Master your frontend interview with these A to Z questions and answers, explained in simple English.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            to={topic.link}
                            className={`${topic.bg} bg-opacity-30 backdrop-blur-lg border border-white border-opacity-10 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className={`text-6xl mb-6 ${topic.color} group-hover:animate-bounce`}>
                                    <i className={topic.icon}></i>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
                                <p className="text-gray-300">{topic.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterviewPrepPage;

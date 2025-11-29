import { Link } from 'react-router-dom';

const ReactPage = () => {
    const hooks = [
        {
            name: 'useState',
            description: 'Manage state in functional components',
            icon: 'fa-solid fa-box',
            path: '/use-state',
            color: 'from-blue-500 to-blue-700',
            available: true
        },
        {
            name: 'useEffect',
            description: 'Handle side effects in your components',
            icon: 'fa-solid fa-bolt',
            path: '/use-effect',
            color: 'from-purple-500 to-purple-700',
            available: true
        },
        {
            name: 'useContext',
            description: 'Access context values easily',
            icon: 'fa-solid fa-globe',
            path: '/use-context',
            color: 'from-green-500 to-green-700',
            available: true
        },
        {
            name: 'useReducer',
            description: 'Manage complex state logic',
            icon: 'fa-solid fa-gears',
            path: '/use-reducer',
            color: 'from-yellow-500 to-yellow-700',
            available: true
        },
        {
            name: 'useCallback',
            description: 'Memoize callback functions',
            icon: 'fa-solid fa-rotate',
            path: '/use-callback',
            color: 'from-pink-500 to-pink-700',
            available: true
        },
        {
            name: 'useRef',
            description: 'Reference DOM elements and persist values',
            icon: 'fa-solid fa-thumbtack',
            path: '/use-ref',
            color: 'from-indigo-500 to-indigo-700',
            available: true
        },
        {
            name: 'useMemo',
            description: 'Memoize expensive calculations',
            icon: 'fa-solid fa-floppy-disk',
            path: '/use-memo',
            color: 'from-red-500 to-red-700',
            available: true
        },
        {
            name: 'useLayoutEffect',
            description: 'Synchronous effect hook',
            icon: 'fa-solid fa-palette',
            path: '/use-layout-effect',
            color: 'from-teal-500 to-teal-700',
            available: true
        },
        {
            name: 'useImperativeHandle',
            description: 'Customize exposed ref values',
            icon: 'fa-solid fa-gamepad',
            path: '/use-imperative-handle',
            color: 'from-violet-500 to-violet-700',
            available: true
        },
        {
            name: 'useDebugValue',
            description: 'Display labels in React DevTools',
            icon: 'fa-solid fa-bug',
            path: '/use-debug-value',
            color: 'from-gray-500 to-gray-700',
            available: true
        },
        {
            name: 'useId',
            description: 'Generate unique IDs for accessibility',
            icon: 'fa-solid fa-fingerprint',
            path: '/use-id',
            color: 'from-cyan-500 to-blue-600',
            available: true
        },
        {
            name: 'useTransition',
            description: 'Non-blocking state updates',
            icon: 'fa-solid fa-hourglass-half',
            path: '/use-transition',
            color: 'from-orange-500 to-red-600',
            available: true
        },
        {
            name: 'useDeferredValue',
            description: 'Defer updating values',
            icon: 'fa-solid fa-clock',
            path: '/use-deferred-value',
            color: 'from-green-500 to-teal-600',
            available: true
        },
        {
            name: 'useSyncExternalStore',
            description: 'Subscribe to external stores',
            icon: 'fa-solid fa-plug',
            path: '/use-sync-external-store',
            color: 'from-purple-500 to-pink-600',
            available: true
        },
        {
            name: 'useInsertionEffect',
            description: 'CSS-in-JS style injection',
            icon: 'fa-solid fa-syringe',
            path: '/use-insertion-effect',
            color: 'from-pink-500 to-rose-600',
            available: true
        },
    ];

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-solid fa-fish"></i> React Hooks Mastery
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-4">
                        Learn All React Hooks with Real-Time Examples
                    </p>
                    <p className="text-base md:text-lg text-purple-200 max-w-3xl mx-auto">
                        Master React hooks through comprehensive explanations, practical examples,
                        and interactive demonstrations. Each hook is explained with crystal-clear
                        concepts and real-world use cases.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/javascript" className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-center">
                            <i className="fa-brands fa-js mr-2"></i> JavaScript Prerequisites
                        </Link>
                        <Link to="/css" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-center">
                            <i className="fa-brands fa-css3-alt mr-2"></i> CSS Cheat Sheet
                        </Link>
                        <Link to="/bootstrap" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-center">
                            <i className="fa-brands fa-bootstrap mr-2"></i> Bootstrap
                        </Link>
                        <Link to="/tailwind" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-center">
                            <i className="fa-solid fa-wind mr-2"></i> Tailwind
                        </Link>
                    </div>
                </div>

                {/* Core Concepts Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center border-b border-white border-opacity-20 pb-4">
                        <i className="fa-solid fa-cubes mr-3"></i> Core Concepts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/core/jsx">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-masks-theater"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">JSX</h3>
                                <p className="text-white text-opacity-90">Syntax, Expressions, and Fragments</p>
                            </div>
                        </Link>
                        <Link to="/core/components">
                            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-puzzle-piece"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Components</h3>
                                <p className="text-white text-opacity-90">Functional Components & Composition</p>
                            </div>
                        </Link>
                        <Link to="/core/props">
                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-gift"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Props</h3>
                                <p className="text-white text-opacity-90">Passing Data, Types, and Defaults</p>
                            </div>
                        </Link>
                        <Link to="/core/state">
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-camera"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">State</h3>
                                <p className="text-white text-opacity-90">Immutability & Updates</p>
                            </div>
                        </Link>
                        <Link to="/core/events">
                            <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-computer-mouse"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Events</h3>
                                <p className="text-white text-opacity-90">Handling & Propagation</p>
                            </div>
                        </Link>
                        <Link to="/core/conditional">
                            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-code-branch"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Conditional</h3>
                                <p className="text-white text-opacity-90">If, Ternary, && Logic</p>
                            </div>
                        </Link>
                        <Link to="/core/lists">
                            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-list-ol"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Lists</h3>
                                <p className="text-white text-opacity-90">Keys & Reconciliation</p>
                            </div>
                        </Link>
                        <Link to="/core/forms">
                            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-4xl mb-3"><i className="fa-solid fa-pen-to-square"></i></div>
                                <h3 className="text-2xl font-bold text-white mb-2">Forms</h3>
                                <p className="text-white text-opacity-90">Controlled vs Uncontrolled</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Advanced Patterns Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center border-b border-white border-opacity-20 pb-4">
                        <i className="fa-solid fa-diagram-project mr-3"></i> Advanced Patterns
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/patterns/custom-hooks">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-puzzle-piece"></i></div>
                                <h3 className="text-lg font-bold text-white">Custom Hooks</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/context">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-diagram-project"></i></div>
                                <h3 className="text-lg font-bold text-white">Context Pattern</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/compound-components">
                            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-cubes"></i></div>
                                <h3 className="text-lg font-bold text-white">Compound Components</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/render-props">
                            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-arrow-pointer"></i></div>
                                <h3 className="text-lg font-bold text-white">Render Props</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/hocs">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-layer-group"></i></div>
                                <h3 className="text-lg font-bold text-white">HOCs</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/portals">
                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-door-open"></i></div>
                                <h3 className="text-lg font-bold text-white">Portals</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/error-boundaries">
                            <div className="bg-gradient-to-br from-red-500 to-rose-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-shield-halved"></i></div>
                                <h3 className="text-lg font-bold text-white">Error Boundaries</h3>
                            </div>
                        </Link>
                        <Link to="/patterns/forward-refs">
                            <div className="bg-gradient-to-br from-lime-500 to-green-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                                <h3 className="text-lg font-bold text-white">Forward Refs</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Performance Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center border-b border-white border-opacity-20 pb-4">
                        <i className="fa-solid fa-gauge-high mr-3"></i> Performance Optimization
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/performance/react-memo">
                            <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-rocket"></i></div>
                                <h3 className="text-lg font-bold text-white">React.memo</h3>
                            </div>
                        </Link>
                        <Link to="/performance/code-splitting">
                            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-scissors"></i></div>
                                <h3 className="text-lg font-bold text-white">Code Splitting</h3>
                            </div>
                        </Link>
                        <Link to="/performance/virtualization">
                            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-list"></i></div>
                                <h3 className="text-lg font-bold text-white">Virtualization</h3>
                            </div>
                        </Link>
                        <Link to="/performance/bundle-analysis">
                            <div className="bg-gradient-to-br from-gray-600 to-slate-700 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white border-opacity-20">
                                <div className="text-3xl mb-2"><i className="fa-solid fa-chart-pie"></i></div>
                                <h3 className="text-lg font-bold text-white">Bundle Analysis</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Hooks Grid */}
                <h2 className="text-4xl font-bold text-white mb-8 text-center border-b border-white border-opacity-20 pb-4">
                    <i className="fa-solid fa-fish-fins mr-3"></i> React Hooks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hooks.map((hook) => (
                        <div
                            key={hook.name}
                            className={`relative group ${hook.available
                                ? 'hover:scale-105 cursor-pointer'
                                : 'opacity-60 cursor-not-allowed'
                                } transition-all duration-300`}
                        >
                            {hook.available ? (
                                <Link to={hook.path}>
                                    <div className={`bg-gradient-to-br ${hook.color} p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20 backdrop-blur-sm`}>
                                        <div className="text-6xl mb-4"><i className={hook.icon}></i></div>
                                        <h3 className="text-3xl font-bold text-white mb-3">
                                            {hook.name}
                                        </h3>
                                        <p className="text-white text-opacity-90 text-lg">
                                            {hook.description}
                                        </p>
                                        <div className="mt-6 inline-block px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white font-semibold">
                                            Explore <i className="fa-solid fa-arrow-right ml-2"></i>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className={`bg-gradient-to-br ${hook.color} p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20 backdrop-blur-sm`}>
                                    <div className="text-6xl mb-4"><i className={hook.icon}></i></div>
                                    <h3 className="text-3xl font-bold text-white mb-3">
                                        {hook.name}
                                    </h3>
                                    <p className="text-white text-opacity-90 text-lg">
                                        {hook.description}
                                    </p>
                                    <div className="mt-6 inline-block px-4 py-2 bg-white bg-opacity-10 rounded-lg text-white font-semibold">
                                        Coming Soon
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        <i className="fa-solid fa-book-open mr-3"></i> What You'll Learn
                    </h2>
                    <ul className="space-y-3 text-white text-lg">
                        <li className="flex items-start">
                            <span className="mr-3 text-2xl"><i className="fa-solid fa-check-circle text-green-400"></i></span>
                            <span>Deep understanding of each React hook's purpose and use cases</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-2xl"><i className="fa-solid fa-check-circle text-green-400"></i></span>
                            <span>Real-time interactive examples demonstrating practical applications</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-2xl"><i className="fa-solid fa-check-circle text-green-400"></i></span>
                            <span>Crystal-clear explanations with step-by-step code walkthroughs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-2xl"><i className="fa-solid fa-check-circle text-green-400"></i></span>
                            <span>Best practices and common patterns for each hook</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-2xl"><i className="fa-solid fa-check-circle text-green-400"></i></span>
                            <span>Performance optimization techniques and tips</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReactPage;

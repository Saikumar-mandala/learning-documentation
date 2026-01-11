import { Link } from 'react-router-dom';

const JavascriptPage = () => {
    return (
        <div className="py-12">
            <div className="container-fluid">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse flex flex-col md:flex-row items-center justify-center gap-4">
                        <i className="fa-brands fa-js text-yellow-400"></i> JavaScript Mastery
                    </h1>
                    <p className="text-xl md:text-2xl text-yellow-200 mb-4">
                        Master the Essentials Before Diving into React
                    </p>
                    <p className="text-base md:text-lg text-white max-w-3xl mx-auto">
                        A solid foundation in JavaScript is the key to becoming a successful React developer.
                        Explore these essential topics to level up your skills.
                    </p>
                    <div className="mt-8">
                        <Link to="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-center w-full md:w-auto">
                            <i className="fa-brands fa-react mr-2"></i> Go to React Hooks
                        </Link>
                    </div>
                </div>

                {/* JavaScript Prerequisites Section */}
                <div className="mb-16 bg-gradient-to-r from-yellow-500 to-orange-600 p-8 rounded-3xl shadow-2xl border-2 border-white border-opacity-30">
                    <h2 className="text-4xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                        <i className="fa-brands fa-js text-5xl"></i>
                        JavaScript Prerequisites
                    </h2>
                    <p className="text-xl text-white text-center mb-6">
                        Essential concepts you need to know.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <Link to="/js/variables">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">📦</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Variables</h3>
                                <p className="text-white text-opacity-90">Let, Const, and Data Types</p>
                            </div>
                        </Link>
                        <Link to="/js/operators">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">➕</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Operators</h3>
                                <p className="text-white text-opacity-90">Arithmetic, Logical & Ternary</p>
                            </div>
                        </Link>
                        <Link to="/js/control-flow">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🚦</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Control Flow</h3>
                                <p className="text-white text-opacity-90">If, Else, Switch & Loops</p>
                            </div>
                        </Link>
                        <Link to="/js/functions">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🔨</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Functions</h3>
                                <p className="text-white text-opacity-90">Arrow Fn, Default Params & HOFs</p>
                            </div>
                        </Link>
                        <Link to="/js/scope">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🔭</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Scope & Closures</h3>
                                <p className="text-white text-opacity-90">Block Scope, Closures & 'this'</p>
                            </div>
                        </Link>
                        <Link to="/js/objects">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">📦</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Objects</h3>
                                <p className="text-white text-opacity-90">Methods, Destructuring & Spread</p>
                            </div>
                        </Link>
                        <Link to="/js-roadmap">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🗺️</div>
                                <h3 className="text-2xl font-bold text-white mb-2">JavaScript Roadmap</h3>
                                <p className="text-white text-opacity-90">Complete learning path with all essential JS topics</p>
                            </div>
                        </Link>
                        <Link to="/js/arrow-functions">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">➡️</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Arrow Functions</h3>
                                <p className="text-white text-opacity-90">Master the concise syntax essential for React</p>
                            </div>
                        </Link>
                        <Link to="/js/destructuring">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">📦</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Destructuring</h3>
                                <p className="text-white text-opacity-90">Unpack values from arrays and objects</p>
                            </div>
                        </Link>
                        <Link to="/js/spread-rest">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">...</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Spread & Rest</h3>
                                <p className="text-white text-opacity-90">Expand and collect elements with ...</p>
                            </div>
                        </Link>
                        <Link to="/js/promises">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">⏳</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Promises & Async</h3>
                                <p className="text-white text-opacity-90">Callbacks, Promises & Async/Await</p>
                            </div>
                        </Link>
                        <Link to="/js/dom">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🌳</div>
                                <h3 className="text-2xl font-bold text-white mb-2">DOM Manipulation</h3>
                                <p className="text-white text-opacity-90">Virtual DOM & useRef</p>
                            </div>
                        </Link>
                        <Link to="/js/modules">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">📦</div>
                                <h3 className="text-2xl font-bold text-white mb-2">ES6 Modules</h3>
                                <p className="text-white text-opacity-90">Import, Export & Default</p>
                            </div>
                        </Link>
                        <Link to="/js/array-methods">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🔧</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Array Methods</h3>
                                <p className="text-white text-opacity-90">Map, Filter, Reduce & More</p>
                            </div>
                        </Link>
                        <Link to="/js/string-methods">
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white border-opacity-30">
                                <div className="text-4xl mb-3">🔡</div>
                                <h3 className="text-2xl font-bold text-white mb-2">String Methods</h3>
                                <p className="text-white text-opacity-90">Split, Replace, Template Literals</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavascriptPage;

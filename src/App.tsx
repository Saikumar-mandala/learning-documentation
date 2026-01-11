import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import JavascriptPage from './pages/JavascriptPage';
import ReactPage from './pages/ReactPage';
import CSSPage from './pages/CSSPage';
import BootstrapPage from './pages/Bootstrap';
import TailwindPage from './pages/TailwindSS';
import InterviewPrepPage from './pages/InterviewPrepPage';
import InterviewTopicPage from './pages/InterviewTopicPage';
import NodeJSPage from './pages/NodeJSPage';
import JSRoadmap from './javascript/00-js-roadmap/JSRoadmap';
import ArrowFunctionsPage from './javascript/02-es6-features/ArrowFunctionsPage';
import DestructuringPage from './javascript/02-es6-features/DestructuringPage';
import SpreadRestPage from './javascript/02-es6-features/SpreadRestPage';
import AsyncAwaitPage from './javascript/03-async/AsyncAwaitPage';
import ArrayMethodsPage from './javascript/01-basics/ArrayMethodsPage';
import StringMethodsPage from './javascript/01-basics/StringMethodsPage';
import VariablesPage from './javascript/01-basics/VariablesPage';
import OperatorsPage from './javascript/01-basics/OperatorsPage';
import ControlFlowPage from './javascript/01-basics/ControlFlowPage';
import FunctionsPage from './javascript/02-functions/FunctionsPage';
import ScopePage from './javascript/02-functions/ScopePage';
import ObjectsPage from './javascript/03-objects/ObjectsPage';
import PromisesPage from './javascript/03-async/PromisesPage';
import DomPage from './javascript/04-dom/DomPage';
import ModulesPage from './javascript/05-modules/ModulesPage';
import UseStateExamples from './hooks/useState/UseStateExamples';
import UseEffectExamples from './hooks/useEffect/UseEffectExamples';
import UseContextExamples from './hooks/useContext/UseContextExamples';
import UseReducerExamples from './hooks/useReducer/UseReducerExamples';
import UseCallbackExamples from './hooks/useCallback/UseCallbackExamples';
import UseRefExamples from './hooks/useRef/UseRefExamples';
import UseMemoExamples from './hooks/useMemo/UseMemoExamples';
import UseLayoutEffectExamples from './hooks/useLayoutEffect/UseLayoutEffectExamples';
import UseImperativeHandleExamples from './hooks/useImperativeHandle/UseImperativeHandleExamples';
import UseDebugValueExamples from './hooks/useDebugValue/UseDebugValueExamples';
import UseIdExamples from './hooks/useId/UseIdExamples';
import UseTransitionExamples from './hooks/useTransition/UseTransitionExamples';
import UseDeferredValueExamples from './hooks/useDeferredValue/UseDeferredValueExamples';
import UseSyncExternalStoreExamples from './hooks/useSyncExternalStore/UseSyncExternalStoreExamples';
import UseInsertionEffectExamples from './hooks/useInsertionEffect/UseInsertionEffectExamples';
import JSXExample from './topics/01-core-concepts/01-jsx/JSXExample';
import ComponentExample from './topics/01-core-concepts/02-components/ComponentExample';
import PropsExample from './topics/01-core-concepts/03-props/PropsExample';
import StateExample from './topics/01-core-concepts/04-state/StateExample';
import EventExample from './topics/01-core-concepts/05-events/EventExample';
import ConditionalExample from './topics/01-core-concepts/06-conditional-rendering/ConditionalExample';
import ListExample from './topics/01-core-concepts/07-lists/ListExample';
import FormExample from './topics/01-core-concepts/08-forms/FormExample';
import CustomHooksExample from './topics/02-advanced-patterns/01-custom-hooks/CustomHooksExample';
import ContextPatternExample from './topics/02-advanced-patterns/02-context-pattern/ContextPatternExample';
import CompoundComponentsExample from './topics/02-advanced-patterns/03-compound-components/CompoundComponentsExample';
import RenderPropsExample from './topics/02-advanced-patterns/04-render-props/RenderPropsExample';
import HOCsExample from './topics/02-advanced-patterns/05-hocs/HOCsExample';
import PortalsExample from './topics/02-advanced-patterns/06-portals/PortalsExample';
import ErrorBoundariesExample from './topics/02-advanced-patterns/07-error-boundaries/ErrorBoundariesExample';
import ForwardRefsExample from './topics/02-advanced-patterns/08-forward-refs/ForwardRefsExample';
import ReactMemoExample from './topics/03-performance/01-react-memo/ReactMemoExample';
import CodeSplittingExample from './topics/03-performance/02-code-splitting/CodeSplittingExample';
import VirtualizationExample from './topics/03-performance/03-virtualization/VirtualizationExample';
import BundleAnalysisExample from './topics/03-performance/04-bundle-analysis/BundleAnalysisExample';
import MernPlanPage from './pages/MernPlanPage';
import AIPlaybookPage from './pages/AIPlaybookPage';
import MernBoilerplatePage from './pages/MernBoilerplatePage';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Navigation Header */}
        <nav className="bg-[#0f172a] border-b border-white/10 sticky top-0 z-[100] shadow-2xl">
          <div className="container-fluid">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-200">
                  <i className="fa-solid fa-fish"></i>
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors uppercase tracking-tighter sm:tracking-normal">
                    React Hooks <span className="hidden sm:inline">Mastery</span>
                  </h1>
                  <p className="text-[8px] sm:text-xs text-blue-200 opacity-75 font-bold uppercase tracking-widest">Learning Guide</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-home"></i>
                  <span>Home</span>
                </Link>

                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-book"></i>
                  <span>Docs</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>

                <Link
                  to="/nodejs"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-brands fa-node text-green-400"></i>
                  <span>Node.js</span>
                </Link>

                <Link
                  to="/interview"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-user-graduate"></i>
                  <span>Interview Prep</span>
                </Link>

                <Link
                  to="/mern-plan"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-calendar-check text-blue-400"></i>
                  <span>30-Day Plan</span>
                </Link>

                <Link
                  to="/ai-playbook"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-robot text-purple-400"></i>
                  <span>AI Playbook</span>
                </Link>
                <Link
                  to="/mern-boilerplate"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-semibold"
                >
                  <i className="fa-solid fa-code-branch text-emerald-400"></i>
                  <span>Boilerplate</span>
                </Link>

              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all active:scale-95"
              >
                <i className={`fa-solid text-xl transition-transform duration-300 ${mobileMenuOpen ? 'fa-times rotate-90' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`md:hidden fixed inset-0 top-20 bg-[#0f172a] z-[90] transition-all duration-500 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
            <div className="container-fluid py-8 flex flex-col gap-3">
              {[
                { to: "/", icon: "fa-home", label: "Home" },
                { to: "/nodejs", icon: "fa-node", label: "Node.js", color: "text-green-400" },
                { to: "/interview", icon: "fa-user-graduate", label: "Interview Prep" },
                { to: "/mern-plan", icon: "fa-calendar-check", label: "30-Day Plan", color: "text-blue-400" },
                { to: "/ai-playbook", icon: "fa-robot", label: "AI Playbook", color: "text-purple-400" },
                { to: "/mern-boilerplate", icon: "fa-code-branch", label: "Boilerplate", color: "text-emerald-400" }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white hover:bg-white/10 active:scale-95 transition-all text-lg font-black uppercase tracking-widest"
                >
                  <i className={`fa-solid ${link.icon} w-8 ${link.color || ''}`}></i>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<ReactPage />} />
          <Route path="/javascript" element={<JavascriptPage />} />
          <Route path="/css" element={<CSSPage />} />
          <Route path="/bootstrap" element={<BootstrapPage />} />
          <Route path="/tailwind" element={<TailwindPage />} />
          <Route path="/interview" element={<InterviewPrepPage />} />
          <Route path="/interview/react" element={<InterviewTopicPage title="React" icon="fa-brands fa-react" iconColor="text-blue-400" description="Hooks, Virtual DOM, Components" filePath="/docs/interview/react-questions.md" gradient="bg-gradient-to-br from-blue-900 to-slate-900" />} />
          <Route path="/interview/javascript" element={<InterviewTopicPage title="JavaScript" icon="fa-brands fa-js" iconColor="text-yellow-400" description="ES6+, Closures, Async/Await" filePath="/docs/interview/javascript-questions.md" gradient="bg-gradient-to-br from-yellow-900 to-orange-900" />} />
          <Route path="/interview/css" element={<InterviewTopicPage title="CSS" icon="fa-brands fa-css3-alt" iconColor="text-blue-500" description="Flexbox, Grid, Box Model" filePath="/docs/interview/css-questions.md" gradient="bg-gradient-to-br from-blue-900 to-indigo-900" />} />
          <Route path="/interview/html" element={<InterviewTopicPage title="HTML" icon="fa-brands fa-html5" iconColor="text-orange-500" description="Semantics, Accessibility, SEO" filePath="/docs/interview/html-questions.md" gradient="bg-gradient-to-br from-orange-900 to-red-900" />} />
          <Route path="/interview/challenges" element={<InterviewTopicPage title="100 Coding Challenges" icon="fa-solid fa-code" iconColor="text-green-400" description="Master JavaScript with 100 practical coding problems from Easy to Hard." filePath="/docs/interview/js-100-challenges.md" gradient="bg-gradient-to-br from-green-900 to-emerald-900" />} />
          <Route path="/interview/nodejs" element={<InterviewTopicPage title="Node.js" icon="fa-brands fa-node" iconColor="text-green-500" description="Event Loop, Express, Streams, Modules" filePath="/docs/interview/nodejs-questions.md" gradient="bg-gradient-to-br from-emerald-900 to-green-900" />} />
          <Route path="/nodejs" element={<NodeJSPage />} />
          <Route path="/js-roadmap" element={<JSRoadmap />} />

          {/* JavaScript Topics */}
          <Route path="/js/arrow-functions" element={<ArrowFunctionsPage />} />
          <Route path="/js/destructuring" element={<DestructuringPage />} />
          <Route path="/js/spread-rest" element={<SpreadRestPage />} />
          <Route path="/js/async-await" element={<AsyncAwaitPage />} />
          <Route path="/js/array-methods" element={<ArrayMethodsPage />} />
          <Route path="/js/string-methods" element={<StringMethodsPage />} />
          <Route path="/js/variables" element={<VariablesPage />} />
          <Route path="/js/operators" element={<OperatorsPage />} />
          <Route path="/js/control-flow" element={<ControlFlowPage />} />
          <Route path="/js/functions" element={<FunctionsPage />} />
          <Route path="/js/scope" element={<ScopePage />} />
          <Route path="/js/objects" element={<ObjectsPage />} />
          <Route path="/js/promises" element={<PromisesPage />} />
          <Route path="/js/dom" element={<DomPage />} />
          <Route path="/js/modules" element={<ModulesPage />} />
          <Route path="/use-state" element={<UseStateExamples />} />
          <Route path="/use-effect" element={<UseEffectExamples />} />
          <Route path="/use-context" element={<UseContextExamples />} />
          <Route path="/use-reducer" element={<UseReducerExamples />} />
          <Route path="/use-callback" element={<UseCallbackExamples />} />
          <Route path="/use-ref" element={<UseRefExamples />} />
          <Route path="/use-memo" element={<UseMemoExamples />} />
          <Route path="/use-layout-effect" element={<UseLayoutEffectExamples />} />
          <Route path="/use-imperative-handle" element={<UseImperativeHandleExamples />} />
          <Route path="/use-debug-value" element={<UseDebugValueExamples />} />

          {/* React 18+ Hooks */}
          <Route path="/use-id" element={<UseIdExamples />} />
          <Route path="/use-transition" element={<UseTransitionExamples />} />
          <Route path="/use-deferred-value" element={<UseDeferredValueExamples />} />
          <Route path="/use-sync-external-store" element={<UseSyncExternalStoreExamples />} />
          <Route path="/use-insertion-effect" element={<UseInsertionEffectExamples />} />

          {/* Core Concepts */}
          <Route path="/core/jsx" element={<JSXExample />} />
          <Route path="/core/components" element={<ComponentExample />} />
          <Route path="/core/props" element={<PropsExample />} />
          <Route path="/core/state" element={<StateExample />} />
          <Route path="/core/events" element={<EventExample />} />
          <Route path="/core/conditional" element={<ConditionalExample />} />
          <Route path="/core/lists" element={<ListExample />} />
          <Route path="/core/forms" element={<FormExample />} />

          {/* Advanced Patterns */}
          <Route path="/patterns/custom-hooks" element={<CustomHooksExample />} />
          <Route path="/patterns/context" element={<ContextPatternExample />} />
          <Route path="/patterns/compound-components" element={<CompoundComponentsExample />} />
          <Route path="/patterns/render-props" element={<RenderPropsExample />} />
          <Route path="/patterns/hocs" element={<HOCsExample />} />
          <Route path="/patterns/portals" element={<PortalsExample />} />
          <Route path="/patterns/error-boundaries" element={<ErrorBoundariesExample />} />
          <Route path="/patterns/forward-refs" element={<ForwardRefsExample />} />

          {/* Performance */}
          <Route path="/performance/react-memo" element={<ReactMemoExample />} />
          <Route path="/performance/code-splitting" element={<CodeSplittingExample />} />
          <Route path="/performance/virtualization" element={<VirtualizationExample />} />
          <Route path="/performance/bundle-analysis" element={<BundleAnalysisExample />} />
          <Route path="/mern-plan" element={<MernPlanPage />} />
          <Route path="/ai-playbook" element={<AIPlaybookPage />} />
          <Route path="/mern-boilerplate" element={<MernBoilerplatePage />} />
        </Routes>

      </div>
    </Router >
  );
}

export default App;

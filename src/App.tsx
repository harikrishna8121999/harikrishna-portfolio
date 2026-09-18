import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import ClickSpark from './components/ClickSpark';

/**
 * Every route is lazy-loaded. The home route gets an artificial 2.5s floor so the
 * loading animation always plays through — see ARCHITECTURE.md "Key Architectural Decisions".
 */
const withMinDelay = <T,>(factory: () => Promise<T>, ms = 0): Promise<T> =>
  Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, ms))]).then(([mod]) => mod);

const Home = lazy(() => withMinDelay(() => import('./pages/home/Home'), 2500));
const ProjectsLayout = lazy(() => withMinDelay(() => import('./pages/ProjectsLayout')));
const BlogLayout = lazy(() => withMinDelay(() => import('./pages/blogs/BlogLayout')));
const ResumeLayout = lazy(() => withMinDelay(() => import('./pages/resume/ResumeLayout')));
const AnalyticsLayout = lazy(() => withMinDelay(() => import('./pages/analytics/AnalyticsLayout')));
const PageNotFound = lazy(() => withMinDelay(() => import('./pages/notFound/PageNotFound')));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ClickSpark sparkColor="#ffffffff" sparkSize={12} sparkRadius={20}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectsLayout />} />
            <Route path="/blogs" element={<BlogLayout />} />
            <Route path="/resume" element={<ResumeLayout />} />
            <Route path="/analytics" element={<AnalyticsLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Analytics />
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;

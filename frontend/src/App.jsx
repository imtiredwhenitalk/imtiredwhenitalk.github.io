import React, { useEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomizerDrawer from './components/CustomizerDrawer.jsx';
import { ThemeProvider, useTheme } from './components/ThemeProvider.jsx';
import Home from './pages/Home.jsx';
import Features from './pages/Features.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';

function PageShell({ children }) {
  const { animations } = useTheme();
  const variants = useMemo(
    () => ({
      initial: { opacity: 0, y: animations ? 10 : 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: animations ? -10 : 0 }
    }),
    [animations]
  );
  return (
    <motion.main
      className="min-h-[calc(100vh-72px)]"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: animations ? 0.35 : 0 }}
    >
      {children}
    </motion.main>
  );
}

function AppInner() {
  const location = useLocation();
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Smooth scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar onOpenCustomizer={() => setCustomizerOpen(true)} />
      <CustomizerDrawer open={customizerOpen} onClose={() => setCustomizerOpen(false)} />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><Home /></PageShell>} />
          <Route path="/features" element={<PageShell><Features /></PageShell>} />
          <Route path="/pricing" element={<PageShell><Pricing /></PageShell>} />
          <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
          <Route path="*" element={<PageShell><Home /></PageShell>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

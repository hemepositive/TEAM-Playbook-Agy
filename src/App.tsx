import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SpecialtyProvider } from './context/SpecialtyContext';
import { DocsLayout } from './components/DocsLayout';
import { LandingPage } from './pages/LandingPage';
import { PlaybookPage } from './pages/PlaybookPage';
import { Cases } from './pages/Cases';
import { ReferencePage } from './pages/ReferencePage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SpecialtyProvider>
        <Router>
          <Routes>
            {/* Home / Specialty Switcher Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Documentation Pages wrapped inside DocsLayout */}
            <Route
              path="/docs/*"
              element={
                <DocsLayout>
                  <Routes>
                    <Route path="reference/:slug" element={<ReferencePage />} />
                    <Route path=":procedure/cases" element={<Cases />} />
                    <Route path=":module" element={<PlaybookPage />} />
                    <Route path="*" element={<Navigate to="overview" replace />} />
                  </Routes>
                </DocsLayout>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </SpecialtyProvider>
    </ThemeProvider>
  );
};

export default App;

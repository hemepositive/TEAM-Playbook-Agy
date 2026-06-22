import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SpecialtyProvider } from './context/SpecialtyContext';
import { DocsLayout } from './components/DocsLayout';
import { LandingPage } from './pages/LandingPage';
import { Overview } from './pages/Overview';
import { Fundamentals } from './pages/Fundamentals';
import { LEJR } from './pages/LEJR';
import { HipFracture } from './pages/HipFracture';
import { SpinalFusion } from './pages/SpinalFusion';
import { CABG } from './pages/CABG';
import { MajorBowel } from './pages/MajorBowel';

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
                    <Route path="overview" element={<Overview />} />
                    <Route path="fundamentals" element={<Fundamentals />} />
                    <Route path="lejr" element={<LEJR />} />
                    <Route path="hip-fracture" element={<HipFracture />} />
                    <Route path="spinal-fusion" element={<SpinalFusion />} />
                    <Route path="cabg" element={<CABG />} />
                    <Route path="major-bowel" element={<MajorBowel />} />
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

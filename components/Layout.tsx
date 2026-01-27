
import React from 'react';
import { AppStep } from '../types';
import { STEP_METADATA, COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: AppStep;
  setStep: (step: AppStep) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentStep, setStep }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-surface p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-[#faf6ea] flex items-center justify-center">
                <span className="text-primary font-bold">R</span>
            </div>
            <h1 className="text-lg font-extrabold uppercase tracking-tighter">ReflectHE</h1>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            {STEP_METADATA.map((meta) => (
              <button
                key={meta.step}
                onClick={() => setStep(meta.step)}
                className={`text-xs uppercase tracking-widest font-semibold px-2 py-1 transition-all border-b-2 ${
                  currentStep === meta.step 
                    ? 'border-surface text-surface' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {meta.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile Progress Bar */}
        <div className="mt-4 h-1 bg-gray-700 w-full overflow-hidden">
            <div 
                className="h-full bg-teal-400 transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / STEP_METADATA.length) * 100}%` }}
            />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-8">
        {children}
      </main>

      {/* Footer Controls */}
      <footer className="sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            disabled={currentStep === AppStep.INTRO}
            onClick={() => setStep(currentStep - 1)}
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center space-x-2 ${
              currentStep === AppStep.INTRO 
                ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400' 
                : 'bg-primary text-surface hover:scale-105 active:scale-95'
            }`}
          >
             <span>Back</span>
          </button>
          
          <div className="text-sm font-medium text-gray-500">
            Step {currentStep + 1} of {STEP_METADATA.length}
          </div>

          <button
            disabled={currentStep === AppStep.RESOURCES}
            onClick={() => setStep(currentStep + 1)}
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center space-x-2 ${
              currentStep === AppStep.RESOURCES 
                ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400' 
                : 'bg-primary text-surface hover:scale-105 active:scale-95'
            }`}
          >
             <span>{currentStep === AppStep.INTRO ? "Start Walkthrough" : "Continue"}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

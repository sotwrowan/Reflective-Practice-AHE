import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import { AppStep } from './types';
import { 
  GraduationCap, 
  Users, 
  User, 
  BookOpen, 
  MessageSquare, 
  RefreshCw, 
  Target, 
  Lightbulb,
  FileText,
  Search,
  Sparkles,
  CheckCircle,
  ChevronRight,
  Zap,
  Check,
  X,
  Trophy,
  Filter,
  BrainCircuit,
  HelpCircle,
  Award,
  Layers,
  Settings,
  ShieldCheck,
  Globe,
  MessagesSquare,
  Info,
  ArrowRight
} from 'lucide-react';
import { COLORS, READINGS, CREATIVE_EXAMPLES, PAGE_SPECIFIC_EXAMPLES, PSF_AREAS, PSF_KNOWLEDGE, PSF_VALUES, BROOKFIELD_LENSES, GIBBS_STAGES, SCHON_LENSES, ROLFE_STAGES, KOLB_STAGES, ModelDetail } from './constants';
import { getReflectiveAdvice } from './services/geminiService';

const DisciplinaryExampleCard: React.FC<{ step: AppStep }> = ({ step }) => {
  const example = PAGE_SPECIFIC_EXAMPLES[step];
  if (!example) return null;
  return (
    <div className="bg-white p-6 rounded-3xl border border-teal-100 shadow-sm space-y-3 h-full flex flex-col justify-center">
      <div className="flex items-center space-x-2 text-teal-600">
        <Award className="w-5 h-5" />
        <h5 className="font-black text-xs uppercase tracking-widest">{example.title}</h5>
      </div>
      <p className="text-gray-600 font-medium italic leading-relaxed text-sm">"{example.body}"</p>
    </div>
  );
};

const ModelInteractiveSection: React.FC<{ 
  title: string; 
  subtitle: string; 
  stages: ModelDetail[]; 
  step: AppStep; 
  selectedStage: ModelDetail | null; 
  onSelect: (stage: ModelDetail) => void;
  detailRef: React.RefObject<HTMLDivElement | null>;
}> = ({ title, subtitle, stages, step, selectedStage, onSelect, detailRef }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="border-l-4 border-teal-400 pl-6">
         <h3 className="text-3xl font-black text-primary uppercase">{title}</h3>
         <p className="text-gray-500 font-medium">{subtitle}</p>
      </div>
      
      <div className={`grid grid-cols-1 ${stages.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => onSelect(stage)}
            className={`bg-white p-8 rounded-3xl shadow-xl border-2 transition-all flex flex-col items-start text-left group hover:-translate-y-2 relative overflow-hidden h-44 ${
              selectedStage?.id === stage.id ? 'border-teal-500 ring-8 ring-teal-500/10' : 'border-gray-100 hover:border-teal-200'
            }`}
          >
            <div className={`w-12 h-12 ${stage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {stage.icon}
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">{stage.title}</h4>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{stage.subtitle}</p>
            
            <div className="absolute bottom-6 right-8 flex items-center text-teal-600 font-black text-[10px] uppercase tracking-tighter">
              <span>{selectedStage?.id === stage.id ? 'VIEWING NOW' : 'TAP TO VIEW'}</span>
              <ChevronRight className="w-3 h-3 ml-1" />
            </div>
          </button>
        ))}
      </div>

      <div ref={detailRef}>
        {selectedStage ? (
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-teal-50 animate-in fade-in zoom-in-95 duration-500 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-10">
              <div className="flex items-center gap-8">
                <div className={`w-24 h-24 ${selectedStage.color} rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-inner`}>
                  {/* Fixed TypeScript error by adding <any> to ReactElement cast to allow className property */}
                  {React.cloneElement(selectedStage.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
                </div>
                <div>
                  <h4 className="text-4xl font-black text-primary uppercase tracking-tighter leading-none mb-2">{selectedStage.title}</h4>
                  <p className="text-teal-600 font-black uppercase tracking-[0.25em] text-xs">{selectedStage.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {selectedStage.psfMapping.map((code) => (
                  <span key={code} className="bg-primary text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-md">
                    {code}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3 text-teal-600">
                  <Info className="w-6 h-6" />
                  <h5 className="font-black uppercase tracking-widest text-xs">Core Theoretical Concept</h5>
                </div>
                <p className="text-xl text-primary font-medium leading-relaxed italic border-l-4 border-teal-100 pl-6">
                  "{selectedStage.description}"
                </p>
              </div>
              <div className="lg:col-span-3 space-y-8">
                <div className="flex items-center gap-3 text-teal-600">
                  <Zap className="w-6 h-6" />
                  <h5 className="font-black uppercase tracking-widest text-xs">Critical Reflective Questions</h5>
                </div>
                <ul className="grid gap-4">
                  {selectedStage.criticalReflectiveQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 bg-teal-50/30 rounded-[2rem] text-gray-700 transition-hover hover:bg-teal-50 transition-colors border border-teal-50/50 shadow-sm group">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-black shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className="font-semibold leading-snug italic text-primary/80">"{q}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-primary/5 p-16 rounded-[4rem] border-4 border-dashed border-primary/10 flex flex-col items-center justify-center text-center space-y-6">
            <ArrowRight className="w-16 h-16 text-primary/20 animate-bounce" />
            <p className="text-2xl font-black text-primary/40 uppercase tracking-tighter">
              Select a stage above to explore <br/> the critical details of this model.
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
        <div className="space-y-6">
          <DisciplinaryExampleCard step={step} />
        </div>
        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center">
            <Lightbulb className="w-10 h-10 text-teal-300 mb-4" />
            <p className="text-lg italic leading-snug">"Reflective practice transforms raw experience into professional knowledge through systematic inquiry and critical theory aligned with the PSF 2023."</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.INTRO);
  const [discipline, setDiscipline] = useState('');
  const [userContext, setUserContext] = useState('');
  const [advice, setAdvice] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filterRole, setFilterRole] = useState<string>('All');
  
  // Model specific selection states
  const [selectedBrookfieldLens, setSelectedBrookfieldLens] = useState<ModelDetail | null>(null);
  const [selectedGibbsStage, setSelectedGibbsStage] = useState<ModelDetail | null>(null);
  const [selectedSchonLens, setSelectedSchonLens] = useState<ModelDetail | null>(null);
  const [selectedRolfeStage, setSelectedRolfeStage] = useState<ModelDetail | null>(null);
  const [selectedKolbStage, setSelectedKolbStage] = useState<ModelDetail | null>(null);

  const detailRef = useRef<HTMLDivElement>(null);

  // Auto scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset all selections
    setSelectedBrookfieldLens(null); 
    setSelectedGibbsStage(null);
    setSelectedSchonLens(null);
    setSelectedRolfeStage(null);
    setSelectedKolbStage(null);
    setAdvice(null);
  }, [step]);

  // Generic effect for scrolling to detail view
  const handleStageSelect = (stage: ModelDetail, setter: (s: ModelDetail) => void) => {
    setter(stage);
    // Timeout to allow DOM update before scroll
    setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleGetAdvice = async () => {
    if (!discipline || !userContext) return;
    setIsLoading(true);
    try {
      const result = await getReflectiveAdvice(discipline, "PSF 2023 Reflection Critique", userContext);
      setAdvice(result);
    } catch (error) {
      console.error(error);
      alert("Failed to get advice. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredExamples = filterRole === 'All' 
    ? CREATIVE_EXAMPLES 
    : CREATIVE_EXAMPLES.filter(ex => ex.role === filterRole);

  const renderContent = () => {
    switch (step) {
      case AppStep.INTRO:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in fade-in duration-700">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-200/50 rounded-full blur-3xl animate-pulse"></div>
              <h2 className="relative text-5xl md:text-7xl font-black text-primary uppercase leading-tight tracking-tighter">
                Reflective <br/> Practices
              </h2>
            </div>
            <p className="max-w-2xl text-xl text-gray-600 font-medium leading-relaxed">
              Reflection is the core of a PSF 2023 fellowship claim. This walkthrough helps you frame your creative practice within the modern global standard for higher education.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl pt-8">
              {[
                { icon: <Target className="w-6 h-6" />, text: "Analyse Experience" },
                { icon: <Users className="w-6 h-6" />, text: "Consider Perspectives" },
                { icon: <RefreshCw className="w-6 h-6" />, text: "Drive Improvement" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center space-y-3">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">{item.icon}</div>
                  <span className="font-bold text-sm uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case AppStep.PSF_2023:
        return (
          <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <div className="border-l-4 border-primary pl-6">
               <h3 className="text-3xl font-black text-primary uppercase">PSF 2023 Dimensions</h3>
               <p className="text-gray-500 font-medium">Professional Standards Framework for teaching and supporting learning in higher education.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-md border border-teal-50 space-y-4">
                <div className="flex items-center space-x-2 text-teal-600">
                  <Layers className="w-6 h-6" />
                  <h4 className="font-black uppercase tracking-widest text-sm">Areas of Activity (A)</h4>
                </div>
                <div className="space-y-2">
                  {PSF_AREAS.map(a => (
                    <div key={a.code} className="text-xs group leading-tight mb-2">
                      <span className="font-black text-teal-600">{a.code}:</span> <span className="text-gray-600">{a.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-50 space-y-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Settings className="w-6 h-6" />
                  <h4 className="font-black uppercase tracking-widest text-sm">Core Knowledge (K)</h4>
                </div>
                <div className="space-y-2">
                  {PSF_KNOWLEDGE.map(k => (
                    <div key={k.code} className="text-xs leading-tight mb-2">
                      <span className="font-black text-blue-600">{k.code}:</span> <span className="text-gray-600">{k.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-md border border-purple-50 space-y-4">
                <div className="flex items-center space-x-2 text-purple-600">
                  <ShieldCheck className="w-6 h-6" />
                  <h4 className="font-black uppercase tracking-widest text-sm">Professional Values (V)</h4>
                </div>
                <div className="space-y-2">
                  {PSF_VALUES.map(v => (
                    <div key={v.code} className="text-xs leading-tight mb-2">
                      <span className="font-black text-purple-600">{v.code}:</span> <span className="text-gray-600">{v.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#262E3E] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                 <Globe className="w-20 h-20 text-teal-400 shrink-0" />
                 <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase italic">Why PSF 2023?</h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      The Professional Standards Framework 2023 (PSF) replaces the older UKPSF. It places higher emphasis on digital technology, equity, and collaboration. Fellowship claims must now map to these specific 15 dimensions using accurate terminology.
                    </p>
                 </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        );

      case AppStep.BROOKFIELD:
        return (
          <ModelInteractiveSection 
            title="Brookfield’s Reflective Lenses (1995)"
            subtitle="Click each card to uncover deep, accurate insights for your fellowship claim."
            stages={BROOKFIELD_LENSES}
            step={AppStep.BROOKFIELD}
            selectedStage={selectedBrookfieldLens}
            onSelect={(s) => handleStageSelect(s, setSelectedBrookfieldLens)}
            detailRef={detailRef}
          />
        );

      case AppStep.GIBBS:
        return (
          <ModelInteractiveSection 
            title="Gibbs’ Reflective Cycle (1988)"
            subtitle="A systematic loop for evidencing K3 and A5. Click each stage for Critical Questions."
            stages={GIBBS_STAGES}
            step={AppStep.GIBBS}
            selectedStage={selectedGibbsStage}
            onSelect={(s) => handleStageSelect(s, setSelectedGibbsStage)}
            detailRef={detailRef}
          />
        );

      case AppStep.SCHON:
        return (
          <ModelInteractiveSection 
            title="Schön (1983 / 1991)"
            subtitle="Reflection for direct interactions (A2 and K2). Explore the three core concepts."
            stages={SCHON_LENSES}
            step={AppStep.SCHON}
            selectedStage={selectedSchonLens}
            onSelect={(s) => handleStageSelect(s, setSelectedSchonLens)}
            detailRef={detailRef}
          />
        );

      case AppStep.ROLFE:
        return (
          <ModelInteractiveSection 
            title="Rolfe et al. (2001)"
            subtitle="A powerful three-level framework for evidencing A3 and A4 outcomes."
            stages={ROLFE_STAGES}
            step={AppStep.ROLFE}
            selectedStage={selectedRolfeStage}
            onSelect={(s) => handleStageSelect(s, setSelectedRolfeStage)}
            detailRef={detailRef}
          />
        );

      case AppStep.KOLB:
        return (
          <ModelInteractiveSection 
            title="Kolb’s Learning Cycle (1984)"
            subtitle="Experiential Learning: transforms HE practice into K1 and A1 evidence."
            stages={KOLB_STAGES}
            step={AppStep.KOLB}
            selectedStage={selectedKolbStage}
            onSelect={(s) => handleStageSelect(s, setSelectedKolbStage)}
            detailRef={detailRef}
          />
        );

      case AppStep.EXAMPLES:
        return (
          <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <div className="border-l-4 border-teal-400 pl-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
               <div>
                  <h3 className="text-3xl font-black text-primary uppercase">PSF 2023 Case Studies</h3>
                  <p className="text-gray-500 font-medium">Real-world scenarios showing the integration of modern dimensions.</p>
               </div>
               <div className="flex items-center space-x-2 bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
                  <Filter className="w-4 h-4 text-gray-400 ml-3" />
                  {['All', 'Lecturing', 'Leadership', 'Professional Services', 'Technical Services'].map(role => (
                    <button
                      key={role}
                      onClick={() => setFilterRole(role)}
                      className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter transition-all ${
                        filterRole === role ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
               </div>
            </div>
            
            <div className="grid gap-8">
               {filteredExamples.length > 0 ? filteredExamples.map((example, i) => (
                 <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row group animate-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-primary text-white p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
                       <span className="text-teal-400 font-black uppercase text-[10px] tracking-widest mb-2 px-3 py-1 bg-white/10 rounded-full">{example.role}</span>
                       <h4 className="text-2xl font-black leading-tight group-hover:scale-105 transition-transform">{example.title}</h4>
                    </div>
                    <div className="p-8 md:w-2/3 space-y-6">
                       <div className="space-y-2">
                          <h5 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2">
                             <FileText className="w-3 h-3" /> THE SCENARIO
                          </h5>
                          <p className="text-gray-700 font-medium leading-relaxed">{example.scenario}</p>
                       </div>
                       <div className="space-y-2 border-t border-gray-100 pt-6">
                          <h5 className="text-xs font-black uppercase text-teal-600 flex items-center gap-2">
                             <BrainCircuit className="w-3 h-3" /> THE REFLECTION
                          </h5>
                          <p className="text-primary italic font-medium leading-relaxed">"{example.reflection}"</p>
                       </div>
                    </div>
                 </div>
               )) : (
                 <div className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest">No examples found for this role.</div>
               )}
            </div>
          </div>
        );

      case AppStep.AI_LAB:
        return (
          <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <div className="border-l-4 border-primary pl-6">
               <h3 className="text-3xl font-black text-primary italic underline decoration-teal-400 uppercase">PSF 2023 Practise Lab</h3>
               <p className="text-gray-500 font-medium">Get a coaching critique on your reflection based on the models and PSF 2023.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4 border border-gray-100">
                  <label className="block">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Your Role and/or Discipline</span>
                    <input 
                      type="text" 
                      placeholder="e.g. Senior Lecturer in Fine Art..."
                      className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:ring-primary focus:border-primary font-bold text-sm"
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block italic underline decoration-teal-300">Share Your Experience for Coaching</span>
                    <p className="text-[10px] text-gray-400 mb-3 leading-tight uppercase font-black tracking-tighter bg-gray-50 p-3 rounded-lg border border-gray-100">
                      Write freely about a teaching or support experience below. The coach will critique your reflection and help you align it with the PSF and deeper reflective models. 
                      <span className="text-teal-600 block mt-1">Don't worry about perfect phrasing; focus on the 'What', 'So What', and 'Now What'.</span>
                    </p>
                    <textarea 
                      rows={6}
                      placeholder="I was teaching/supporting a session on.../I was leading a project on...."
                      className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:ring-primary focus:border-primary font-medium text-sm leading-relaxed"
                      value={userContext}
                      onChange={(e) => setUserContext(e.target.value)}
                    />
                  </label>
                  <button
                    onClick={handleGetAdvice}
                    disabled={isLoading || !discipline || !userContext}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-2 hover:opacity-90 disabled:opacity-50 transition-all shadow-xl"
                  >
                    {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <MessagesSquare className="w-5 h-5" />}
                    <span>GET COACHING CRITIQUE</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2">
                {advice ? (
                  <div className="bg-white p-8 rounded-[3rem] shadow-2xl space-y-8 animate-in zoom-in-95 duration-300 border border-gray-100">
                    <div className="border-b border-gray-100 pb-8">
                       <div className="flex items-center space-x-3 mb-4">
                         <BrainCircuit className="w-7 h-7 text-teal-500" />
                         <h4 className="text-xs font-black text-teal-600 tracking-widest uppercase">Coaching Feedback & Critique</h4>
                       </div>
                       <p className="text-xl text-primary font-bold leading-relaxed">{advice.analysis}</p>
                    </div>
                    
                    <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100">
                       <h4 className="text-[10px] font-black text-blue-500 mb-4 flex items-center gap-2 tracking-[0.2em] uppercase">
                         <ShieldCheck className="w-4 h-4" /> PSF 2023 Dimension Mapping
                       </h4>
                       <div className="flex flex-wrap gap-3">
                         {advice.tips.map((tip: string, i: number) => (
                           <div key={i} className="bg-white border-2 border-blue-100 px-4 py-3 rounded-2xl text-xs font-black text-blue-800 shadow-sm transition-transform hover:scale-105">
                             {tip}
                           </div>
                         ))}
                       </div>
                    </div>

                    <div className="bg-primary p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                       <h4 className="text-[10px] font-black text-teal-400 mb-6 flex items-center gap-2 tracking-[0.3em] uppercase">
                         <Zap className="w-4 h-4" /> Critical Coaching Questions
                       </h4>
                       <ul className="space-y-6 relative z-10">
                          {advice.questions.map((q: string, i: number) => (
                            <li key={i} className="flex items-start gap-4">
                               <div className="w-8 h-8 bg-teal-400/20 text-teal-400 rounded-xl flex items-center justify-center font-black shrink-0 border border-teal-400/30 shadow-inner">?</div>
                               <span className="font-bold text-gray-200 text-lg italic leading-snug">{q}</span>
                            </li>
                          ))}
                       </ul>
                       <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
                          <MessagesSquare className="w-64 h-64" />
                       </div>
                    </div>
                    
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] leading-tight">
                        IMPORTANT: THE PRACTISE LAB PROVIDES COACHING CRITIQUE. <br/> DRAFT YOUR APPLICATION CLAIM IN YOUR OWN PROFESSIONAL VOICE.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full border-4 border-dashed border-gray-100 rounded-[4rem] flex flex-col items-center justify-center text-gray-300 p-16 text-center bg-white/50">
                    <Sparkles className="w-20 h-20 mb-6 opacity-20 animate-pulse" />
                    <p className="font-black text-2xl uppercase tracking-tighter leading-tight">Share your HE experience <br/> to start the coaching critique.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case AppStep.RESOURCES:
        return (
          <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <div className="border-l-4 border-teal-400 pl-6">
               <h3 className="text-3xl font-black text-primary uppercase">Readings & References</h3>
               <p className="text-gray-500 font-medium">Foundational texts for your Fellowship application.</p>
            </div>
            <div className="grid gap-6">
              {READINGS.map((reading) => (
                <a 
                  key={reading.id} 
                  href={reading.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="space-y-1 pr-8">
                    <span className="text-xs font-black text-teal-600 uppercase tracking-widest">{reading.author} ({reading.year})</span>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors uppercase tracking-tight">{reading.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-2 max-w-2xl">{reading.summary}</p>
                  </div>
                  <div className="mt-4 md:mt-0 shrink-0">
                    <div className="flex items-center space-x-2 text-primary font-black uppercase text-xs tracking-widest">
                       <span>VIEW PDF</span>
                       <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-12 bg-[#262E3E] rounded-[3rem] text-center space-y-6 shadow-2xl">
              <GraduationCap className="w-16 h-16 text-teal-400 mx-auto" />
              <h3 className="text-3xl font-black text-white uppercase italic">Ready to begin your PSF 2023 claim?</h3>
              <p className="text-gray-400 max-w-xl mx-auto font-medium">You've explored the models and mapped them to the current Professional Standards. Success in Fellowship comes from consistent, evaluative practice.</p>
              <button 
                onClick={() => setStep(AppStep.INTRO)}
                className="bg-teal-400 text-primary px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                RETURN TO START
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout currentStep={step} setStep={setStep}>
      {renderContent()}
    </Layout>
  );
};

export default App;
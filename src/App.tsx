import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Github, Menu, X, Box, History, Layers } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(true);
  const [activeView, setActiveView] = useState<'project' | 'blueprints' | 'about'>('project');
  const [lang, setLang] = useState<'EN' | 'PL'>('EN');

  const projects = [
    {
      title: 'Neon Protocol',
      description: {
        EN: 'High-fidelity cyberpunk action RPG developed in Unreal Engine 5. Leveraging Nanite and Lumen for cinematic real-time environments and advanced C++ gameplay systems.',
        PL: 'Wysokiej jakości cyberpunkowy RPG akcji stworzony w Unreal Engine 5. Wykorzystuje technologie Nanite i Lumen do tworzenia kinowych środowisk w czasie rzeczywistym oraz zaawansowane systemy rozgrywki w C++.'
      },
      youtubeId: 'qC5K9Sst_Y8',
      blueprintId: '5xilzbur',
      blueprintTitle: {
        EN: 'Core Player Controller / Movement System',
        PL: 'Główny kontroler gracza / System poruszania się'
      },
      tags: ['Unreal Engine 5', 'C++', 'Lumen', 'Niagara'],
      githubUrl: '#',
      year: '2024',
      status: {
        EN: 'Completed',
        PL: 'Ukończono'
      },
      updates: [
        { date: '2024.05.20', note: { EN: 'Implemented advanced Niagara fluid simulation for environmental effects.', PL: 'Zaimplementowano zaawansowaną symulację płynów Niagara dla efektów środowiskowych.' } },
        { date: '2024.04.15', note: { EN: 'Optimized C++ core loops, reducing CPU overhead by 15%.', PL: 'Zoptymalizowano główne pętle C++, redukując obciążenie procesora o 15%.' } },
        { date: '2024.03.01', note: { EN: 'Initial integration of Lumen dynamic global illumination.', PL: 'Wstępna integracja dynamicznego oświetlenia globalnego Lumen.' } }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [selectedProject, activeView]);

  const currentProject = projects[selectedProject];

  const handleProjectSelect = (index: number) => {
    if (selectedProject !== index || activeView !== 'project') {
      setIsAnimate(false);
    }
    setSelectedProject(index);
    setIsMobileMenuOpen(false);
    setActiveView('project');
  };

  const handleAboutSelect = () => {
    if (activeView !== 'about') {
      setIsAnimate(false);
    }
    setActiveView('about');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex selection:bg-white selection:text-black">
      <Sidebar 
        projects={projects} 
        selectedProject={selectedProject} 
        onSelectProject={handleProjectSelect} 
        onSelectAbout={handleAboutSelect}
        lang={lang}
      />

      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-zinc-800 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center text-black">
            <Box size={18} />
          </div>
          <span className="font-bold tracking-tighter uppercase text-sm">SEBASTIAN ZDZIEBKO</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 pt-24 px-6 overflow-y-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">Directives</p>
          <nav className="space-y-1">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => handleProjectSelect(index)}
                className={`w-full text-left p-6 transition-all border border-zinc-900 ${
                  selectedProject === index
                    ? 'bg-white text-black'
                    : 'bg-transparent text-zinc-500'
                }`}
              >
                <div className="font-bold text-lg mb-1 uppercase tracking-widest">{project.title}</div>
                <div className={`text-[10px] uppercase tracking-tighter ${selectedProject === index ? 'opacity-60' : 'text-zinc-600'}`}>
                  {project.tags.join(' / ')}
                </div>
              </button>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 md:ml-72 min-h-screen pt-16 md:pt-0">
        <div className="fixed top-8 right-8 z-50">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'PL' : 'EN')}
            className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            {lang}
          </button>
        </div>

        <div className={`max-w-6xl mx-auto p-6 md:p-16 lg:p-20 transition-all duration-500 ${isAnimate ? 'opacity-100' : 'opacity-0'}`}>
          {activeView === 'about' ? (
            <div className="pt-20">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white bg-zinc-900 px-4 py-1.5 border border-zinc-800">
                  {lang === 'EN' ? 'PROFILE' : 'PROFIL'}
                </span>
                <span className="h-px flex-1 bg-zinc-900"></span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-16 tracking-tighter leading-none uppercase italic">
                {lang === 'EN' ? 'Sebastian' : 'Sebastian'}
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-8">
                  <p className="text-2xl md:text-4xl text-zinc-100 leading-tight font-bold mb-12 uppercase tracking-tight italic">
                    {lang === 'EN' 
                      ? 'Unreal Engine Developer specializing in C++ and high-fidelity real-time systems.' 
                      : 'Deweloper Unreal Engine specjalizujący się w C++ i wysokiej jakości systemach czasu rzeczywistego.'}
                  </p>
                  <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium mb-12 tracking-wide">
                    {lang === 'EN'
                      ? 'With over 5 years of experience in game development, I focus on creating immersive experiences through advanced gameplay mechanics, optimization, and cutting-edge visual technologies.'
                      : 'Z ponad 5-letnim doświadczeniem w tworzeniu gier, skupiam się na budowaniu immersyjnych doświadczeń poprzez zaawansowaną mechanikę rozgrywki, optymalizację i najnowocześniejsze technologie wizualne.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white bg-zinc-900 px-4 py-1.5 border border-zinc-800">
                {currentProject.title}
              </span>
              <span className="h-px flex-1 bg-zinc-900"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                {currentProject.year}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-16 tracking-tighter leading-none uppercase italic">
              {currentProject.title}
            </h1>

            <div className="border-y border-zinc-900 bg-zinc-900">
              <div className="bg-black p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">
                  {lang === 'EN' ? 'Project Status' : 'Status Projektu'}
                </p>
                <p className="text-xl font-bold text-white tracking-widest uppercase italic">{currentProject.status[lang]}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden bg-black mb-24 border border-zinc-800">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentProject.youtubeId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
              title={currentProject.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-8">
              {activeView === 'project' ? (
                <>
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 whitespace-nowrap">
                      {lang === 'EN' ? 'Description' : 'Opis'}
                    </h2>
                    <div className="h-px w-full bg-zinc-900"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 bg-zinc-900 border border-zinc-900 p-px mb-12">
                    {currentProject.tags.map((tag) => (
                      <span key={tag} className="px-6 py-3 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium mb-20 tracking-wide">
                    {currentProject.description[lang]}
                  </p>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3 mb-6">
                      <History size={18} className="text-white" />
                      <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                        {lang === 'EN' ? 'Updates' : 'Aktualizacje'}
                      </h2>
                    </div>
                    <div className="border border-zinc-800 divide-y divide-zinc-900">
                      {currentProject.updates.map((update, idx) => (
                        <div key={idx} className="p-6 bg-zinc-900/20 flex flex-col md:flex-row gap-4 md:gap-10">
                          <span className="text-[10px] font-black text-zinc-500 tabular-nums min-w-20">{update.date}</span>
                          <p className="text-xs text-zinc-300 font-medium tracking-wide uppercase">{update.note[lang]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-12">
                  <div className="flex items-center gap-4">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">
                      {lang === 'EN' ? 'Blueprints Examples' : 'Przykłady Blueprintów'}
                    </h2>
                    <div className="h-px w-full bg-zinc-900"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-6">
                      {currentProject.blueprintTitle[lang]}
                    </h3>
                    <div className="relative aspect-video w-full bg-black border border-zinc-800 overflow-hidden">
                    {currentProject.blueprintId ? (
                      <iframe
                        src={`https://blueprintue.com/render/${currentProject.blueprintId}/`}
                        className="w-full h-full border-0 overflow-hidden"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600 text-[10px] font-black uppercase tracking-widest">
                        {lang === 'EN' ? 'Blueprint data not found' : 'Nie znaleziono danych blueprintu'}
                      </div>
                    )}
                  </div>
                </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-4 space-y-1">
              <a href={currentProject.githubUrl} className="group block p-8 bg-white text-black transition-all hover:bg-zinc-200">
                <div className="flex items-center justify-between font-black text-sm uppercase tracking-[0.3em]">
                  {lang === 'EN' ? 'Core Repository' : 'Repozytorium'} <Github size={20} className="shrink-0" />
                </div>
              </a>
              
              <button 
                onClick={() => setActiveView(activeView === 'project' ? 'blueprints' : 'project')}
                className={`w-full group block p-8 border border-zinc-800 transition-all hover:border-white ${activeView === 'blueprints' ? 'bg-zinc-900 text-white' : 'bg-transparent text-zinc-500'}`}
              >
                <div className="flex items-center justify-between font-black text-sm uppercase tracking-[0.3em]">
                  {activeView === 'blueprints' 
                    ? (lang === 'EN' ? 'Return to Project' : 'Powrót do Projektu') 
                    : (lang === 'EN' ? 'Blueprints Examples' : 'Przykłady Blueprintów')} 
                  <Layers size={20} className={`shrink-0 ${activeView === 'blueprints' ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`} />
                </div>
              </button>
            </div>
          </div>
          </>
          )}

          <footer className="pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">
                  {lang === 'EN' ? 'Email' : 'Email'}
                </p>
                <a href="mailto:hello@example.com" className="text-white font-bold text-sm hover:text-zinc-300 transition-colors tracking-widest">HELLO@EXAMPLE.COM</a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">
                  {lang === 'EN' ? 'Tel' : 'Tel'}
                </p>
                <p className="text-white font-bold text-sm tracking-widest">+44 (0) 20 7946 0123</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;

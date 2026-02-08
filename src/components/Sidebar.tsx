import { Terminal, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  tags: string[];
}

interface SidebarProps {
  projects: Project[];
  selectedProject: number;
  onSelectProject: (index: number) => void;
  onSelectAbout: () => void;
  lang: 'EN' | 'PL';
}

const Sidebar = ({ projects, selectedProject, onSelectProject, onSelectAbout, lang }: SidebarProps) => {
  return (
    <aside className="w-72 h-screen bg-[#0a0a0a] border-r border-zinc-800 fixed left-0 top-0 overflow-y-auto hidden md:flex flex-col z-20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-white flex items-center justify-center text-black">
            <Terminal size={22} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-lg font-bold text-white block leading-none tracking-tight">SEBASTIAN ZDZIEBKO</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">UE DEVELOPER</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6 px-4">Directives</p>
          <nav className="space-y-1">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => onSelectProject(index)}
                className={`w-full text-left px-4 py-5 transition-all duration-200 group relative border-b border-zinc-900 ${
                  selectedProject === index
                    ? 'bg-zinc-900 text-white'
                    : 'hover:bg-zinc-900/50 text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`font-bold text-xs mb-1 transition-colors uppercase tracking-widest ${
                      selectedProject === index ? 'text-white' : 'text-inherit'
                    }`}>
                      {project.title}
                    </div>
                    <div className="text-[9px] font-medium opacity-40 uppercase tracking-tighter">
                      {project.tags[0]} / {project.tags[1]}
                    </div>
                  </div>
                  <ChevronRight 
                    size={14} 
                    className={`shrink-0 transition-all duration-300 ${
                      selectedProject === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} 
                  />
                </div>
                {selectedProject === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto p-8 border-t border-zinc-900">
        <button 
          onClick={onSelectAbout}
          className="w-full group block p-5 bg-white text-black hover:bg-zinc-200 transition-all text-left"
        >
          <div className="font-bold text-xs flex items-center justify-between uppercase tracking-widest">
            {lang === 'EN' ? 'About Me' : 'O Mnie'}
            <ChevronRight size={16} className="shrink-0 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

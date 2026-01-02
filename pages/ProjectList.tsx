
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROJECTS } from '../constants';
import { ProjectStatus } from '../types';

const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('Tất cả');
  const [search, setSearch] = useState('');

  const filteredProjects = MOCK_PROJECTS.filter(p => {
    const matchesFilter = filter === 'Tất cả' || p.status === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-40 bg-white border-b border-fb-divider px-4 py-3 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-primary tracking-tight">Danh sách dự án</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 relative">
          <span className="material-symbols-outlined text-[24px] fill-1">notifications</span>
          <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      <div className="bg-white px-4 py-3 mb-4 shadow-sm">
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-fb-text-sec text-[20px]">search</span>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-2 border-none rounded-full bg-fb-bg text-fb-text placeholder-fb-text-sec focus:ring-0 text-[15px]"
            placeholder="Tìm kiếm dự án..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {['Tất cả', ProjectStatus.IN_PROGRESS, ProjectStatus.COMPLETED, ProjectStatus.PENDING].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-1.5 text-[14px] font-semibold rounded-full whitespace-nowrap transition-colors ${
                filter === btn
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-fb-text-sec'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/project/${p.id}`)}
            className="block bg-white rounded-xl shadow-card border border-transparent p-4 active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  p.status === ProjectStatus.COMPLETED ? 'bg-green-100 text-green-600' :
                  p.status === ProjectStatus.PENDING ? 'bg-gray-100 text-gray-500' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <span className="material-symbols-outlined fill-1 text-[24px]">
                    {p.status === ProjectStatus.COMPLETED ? 'domain' :
                     p.status === ProjectStatus.PENDING ? 'storefront' :
                     'apartment'}
                  </span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-fb-text leading-tight mb-0.5">{p.name}</h3>
                  <p className="text-[13px] text-fb-text-sec flex items-center gap-1">
                    {p.location} • <span className={`font-medium ${
                      p.status === ProjectStatus.COMPLETED ? 'text-green-600' :
                      p.status === ProjectStatus.PENDING ? 'text-gray-500' :
                      'text-blue-600'
                    }`}>{p.status}</span>
                  </p>
                </div>
              </div>
              <button className="text-fb-text-sec p-2 -mr-2">
                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-fb-divider/40">
              <div>
                <p className="text-[12px] font-medium text-fb-text-sec mb-1">Nhân sự</p>
                <div className="flex items-center -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://picsum.photos/seed/user1/40" alt="user" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://picsum.photos/seed/user2/40" alt="user" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    +{p.personnelCount - 2}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-medium text-fb-text-sec mb-0.5">Lương tuần</p>
                <p className="text-[15px] font-bold text-fb-text">
                  {p.weeklySalary > 0 ? `${p.weeklySalary.toLocaleString()} ₫` : '--'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-24 right-4 w-14 h-14 bg-primary text-white rounded-full shadow-floating flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>
    </div>
  );
};

export default ProjectList;

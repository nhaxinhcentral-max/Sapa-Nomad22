
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = MOCK_PROJECTS.find(p => p.id === id) || MOCK_PROJECTS[0];

  return (
    <div className="pb-32 bg-fb-bg min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-fb-divider px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-[17px] font-bold text-fb-text">Tổng quan Dự án</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 relative">
            <span className="material-symbols-outlined text-[20px] fill-1">notifications</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      <main className="p-4 space-y-4">
        {/* Project Header Card */}
        <section className="bg-white rounded-xl shadow-card p-4 space-y-4 border border-fb-divider/20">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="inline-flex px-2.5 py-0.5 bg-primary-soft text-primary rounded text-[12px] font-bold">
                {project.status}
              </span>
              <h2 className="text-[22px] font-bold text-fb-text leading-tight">{project.name}</h2>
              <div className="flex items-center text-fb-text-sec text-[14px]">
                <span className="material-symbols-outlined text-[18px] mr-1 text-fb-text-sec fill-1">location_on</span>
                {project.location}
              </div>
            </div>
            <button className="text-fb-text-sec w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>

          <div className="space-y-4 pt-2">
            {[
              { role: 'Chủ nhiệm (KTS)', name: project.manager, img: 'https://picsum.photos/seed/man1/100' },
              { role: 'Kỹ sư', name: project.engineer, img: 'https://picsum.photos/seed/eng1/100' },
              { role: 'Dự toán', name: project.estimator, img: 'https://picsum.photos/seed/est1/100' },
            ].map(r => (
              <div key={r.role} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-fb-divider/40">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-fb-text-sec">{r.role}</p>
                  <p className="font-bold text-fb-text text-[15px]">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Cards */}
        <section className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl shadow-card border border-fb-divider/20 flex flex-col justify-between min-h-[120px] relative overflow-hidden group active:scale-95 transition-transform cursor-pointer">
            <div className="absolute -right-4 -top-4 opacity-5 transform rotate-12 group-hover:opacity-10">
              <span className="material-symbols-outlined text-[100px] text-primary">payments</span>
            </div>
            <div className="mb-2">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[20px] fill-1">payments</span>
              </div>
              <p className="text-[13px] font-bold text-fb-text-sec">Tổng Lương Tuần</p>
            </div>
            <p className="text-[20px] font-bold text-fb-text tracking-tight">{project.weeklySalary.toLocaleString()} ₫</p>
          </div>
          
          <button 
            onClick={() => navigate(`/attendance/${project.id}`)}
            className="bg-white p-4 rounded-xl shadow-card border border-fb-divider/20 flex flex-col justify-center items-center text-center active:bg-gray-50 transition-all h-full group active:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px] fill-1">calendar_month</span>
            </div>
            <p className="text-[15px] font-bold text-fb-text">Bảng chấm công</p>
          </button>
        </section>

        {/* Weekly Payroll Preview */}
        <section className="bg-white rounded-xl shadow-card border border-fb-divider/20 overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b border-fb-divider/20">
            <h3 className="text-[17px] font-bold text-fb-text">Bảng lương tuần 1</h3>
            <button 
              onClick={() => navigate('/payroll')}
              className="text-[14px] font-bold text-primary px-2 py-1 rounded hover:bg-primary-soft transition"
            >
              Xem tất cả
            </button>
          </div>
          
          <div className="bg-gray-50 px-4 py-2 grid grid-cols-12 gap-2 text-[11px] font-bold text-fb-text-sec uppercase tracking-wider border-b border-fb-divider/20">
            <div className="col-span-6">Nhân viên</div>
            <div className="col-span-3 text-center">Giờ làm</div>
            <div className="col-span-3 text-right">Thành tiền</div>
          </div>

          <div className="divide-y divide-fb-divider/20">
            {project.workers.slice(0, 3).map(w => (
              <div 
                key={w.id} 
                onClick={() => navigate(`/worker/${w.id}`)}
                className="p-3 px-4 grid grid-cols-12 gap-2 items-center hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="col-span-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
                    <img src={w.avatar} alt={w.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="truncate">
                    <p className="text-[14px] font-bold text-fb-text truncate">{w.name}</p>
                    <p className="text-[11px] text-fb-text-sec">{w.role}</p>
                  </div>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-[13px] font-bold text-fb-text">50h</span>
                </div>
                <div className="col-span-3 text-right">
                  <p className="text-[14px] font-bold text-fb-text">{(w.hourlyRate * 50 / 1000000).toFixed(2)} Tr</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-fb-divider/20">
            <button className="w-full py-2 bg-primary-soft text-primary font-bold rounded-lg text-[14px] hover:bg-blue-100 transition">
              Xem thêm
            </button>
          </div>
        </section>

        {/* Approval Timeline */}
        <section className="bg-white rounded-xl shadow-card border border-fb-divider/20 p-5">
          <h3 className="text-[16px] font-bold text-fb-text mb-6">Trạng thái phê duyệt</h3>
          <div className="relative px-2">
            <div className="absolute left-0 right-0 top-[18px] h-[4px] bg-gray-200 z-0 rounded-full"></div>
            <div className="absolute left-0 w-[55%] top-[18px] h-[4px] bg-primary z-0 rounded-full transition-all duration-500"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => navigate('/approval')}>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm ring-4 ring-white transition-all scale-110">
                  <span className="material-symbols-outlined text-white text-[20px] fill-1">person</span>
                </div>
                <span className="text-[12px] font-bold text-primary mt-1">Kỹ sư</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => navigate('/approval')}>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm ring-4 ring-white transition-all">
                  <span className="material-symbols-outlined text-white text-[20px] fill-1">analytics</span>
                </div>
                <span className="text-[12px] font-bold text-primary mt-1">Dự toán</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => navigate('/approval')}>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm ring-4 ring-white transition-all">
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">paid</span>
                </div>
                <span className="text-[12px] font-bold text-fb-text-sec mt-1">Kế toán</span>
              </div>
            </div>
          </div>
        </section>

        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-[16px]">
          <span className="material-symbols-outlined text-[20px] fill-1">add_task</span>
          Cập nhật Tiến độ
        </button>
      </main>
    </div>
  );
};

export default ProjectDetail;

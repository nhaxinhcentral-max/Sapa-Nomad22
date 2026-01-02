
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROJECTS, MOCK_WORKERS } from '../constants';

const Approval: React.FC = () => {
  const navigate = useNavigate();
  const project = MOCK_PROJECTS[0];
  const [approved, setApproved] = useState(false);

  return (
    <div className="pb-32 bg-fb-bg min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-fb-divider h-14 flex items-center justify-between px-2 max-w-md mx-auto">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-icons-round text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-[17px] font-bold text-fb-text truncate px-2">Phê duyệt & Xác nhận</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-icons-round text-[24px]">more_horiz</span>
        </button>
      </header>

      <main className="px-4 py-4 space-y-4">
        {/* Project Context */}
        <section className="bg-white rounded-xl p-4 shadow-card border border-fb-divider/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-[11px] font-bold text-primary mb-1 uppercase tracking-widest">Dự án</h2>
              <p className="text-[18px] font-bold text-fb-text leading-tight">{project.name}</p>
            </div>
            <div className="bg-primary-soft text-primary text-[13px] font-bold px-3 py-1.5 rounded-full">Tuần 1</div>
          </div>
          <div className="bg-fb-bg rounded-xl p-3 space-y-3 border border-fb-divider/20">
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-fb-text-sec">Chủ nhiệm</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-fb-text-sec">NT</div>
                <span className="text-[13px] font-bold text-fb-text">{project.manager}</span>
              </div>
            </div>
            <div className="w-full h-px bg-white/50"></div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-fb-text-sec">Kỹ sư</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-fb-text-sec">VH</div>
                <span className="text-[13px] font-bold text-fb-text">{project.engineer}</span>
              </div>
            </div>
            <div className="w-full h-px bg-white/50"></div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-fb-text-sec">Thời gian</span>
              <span className="text-[13px] font-bold text-fb-text">05/01/2026 - 10/01/2026</span>
            </div>
          </div>
        </section>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-xl shadow-card border border-fb-divider/10 flex flex-col justify-between min-h-[8rem]">
            <div className="flex items-start justify-between">
              <span className="text-fb-text-sec text-[13px] font-bold">Nhân sự</span>
              <div className="w-9 h-9 rounded-full bg-fb-bg flex items-center justify-center text-primary">
                <span className="material-icons-round text-[20px]">groups</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-[26px] font-extrabold text-fb-text block tracking-tight">10</span>
              <span className="text-success text-[11px] flex items-center mt-2 font-bold bg-green-50 w-fit px-1.5 py-0.5 rounded">
                <span className="material-icons-round text-[14px] mr-1">check_circle</span> Đủ công
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-card border border-fb-divider/10 flex flex-col justify-between min-h-[8rem]">
            <div className="flex items-start justify-between">
              <span className="text-fb-text-sec text-[13px] font-bold">Tổng lương</span>
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                <span className="material-icons-round text-[20px]">payments</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-[26px] font-extrabold text-primary block tracking-tight">34.2tr</span>
              <span className="text-warning text-[11px] font-bold bg-yellow-50 px-1.5 py-0.5 rounded inline-flex items-center mt-2">
                <span className="material-icons-round text-[14px] mr-1">hourglass_empty</span> Chờ duyệt
              </span>
            </div>
          </div>
        </div>

        {/* Worker Breakdown */}
        <section className="bg-white rounded-xl shadow-card border border-fb-divider/10 overflow-hidden">
          <div className="px-4 py-3 border-b border-fb-bg flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-fb-text text-[15px]">Chi tiết nhân sự</h3>
            <button className="text-primary hover:bg-primary-soft px-2 py-1 rounded text-[13px] font-bold transition-colors flex items-center">
              Xem tất cả <span className="material-icons-round text-sm ml-0.5">chevron_right</span>
            </button>
          </div>
          <div className="divide-y divide-fb-bg">
            {MOCK_WORKERS.slice(0, 3).map(w => (
              <div key={w.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group active:bg-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-[11px] border border-fb-divider/50">
                      {w.initials}
                    </div>
                    {w.rating && (
                      <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-[2px] shadow-sm">
                        <span className="material-icons-round text-warning text-[12px] block">star</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-fb-text text-[15px] group-hover:text-primary transition-colors">{w.name}</p>
                    <p className="text-[12px] text-fb-text-sec mt-0.5">{w.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-fb-text text-[14px]">{(w.hourlyRate * 50).toLocaleString()}</p>
                  <p className="text-[10px] text-fb-text-sec bg-fb-bg px-2 py-0.5 rounded inline-block mt-1 font-bold">50h</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-[14px] font-bold text-primary bg-white hover:bg-gray-50 transition-colors border-t border-fb-bg">
            Xem thêm 7 nhân sự
          </button>
        </section>

        {/* Toggle List */}
        <section className="space-y-3 pt-2">
          <h3 className="font-bold text-[17px] text-fb-text px-1">Quy trình phê duyệt</h3>
          
          <div className="bg-white p-4 rounded-xl shadow-card border-l-4 border-success flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-success">
                  <span className="material-icons-round">engineering</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px] shadow-sm">
                  <span className="material-icons-round text-success text-[16px]">check_circle</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-fb-text text-[15px]">Kỹ sư</p>
                <p className="text-[12px] text-fb-text-sec">Võ Văn Hùng • <span className="text-success font-bold">Đã duyệt</span></p>
              </div>
            </div>
            <div className="w-11 h-6 bg-success rounded-full relative">
              <div className="absolute top-[2px] right-[2px] bg-white rounded-full h-5 w-5"></div>
            </div>
          </div>

          <div className={`bg-white p-4 rounded-xl shadow-card border-2 transition-all ${approved ? 'border-success' : 'border-primary/40'} flex items-center justify-between relative ring-4 ring-primary/5`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${approved ? 'bg-green-50 text-success' : 'bg-primary-soft text-primary animate-pulse'}`}>
                <span className="material-icons-round">{approved ? 'check_circle' : 'calculate'}</span>
              </div>
              <div>
                <p className="font-bold text-fb-text text-[15px]">Dự toán</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${approved ? 'bg-success' : 'bg-warning animate-pulse'}`}></span>
                  <p className="text-[12px] text-fb-text-sec">{approved ? 'Bạn đã phê duyệt' : 'Chờ phê duyệt của bạn'}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setApproved(!approved)}
              className={`w-11 h-6 rounded-full transition-colors relative ${approved ? 'bg-success' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-all ${approved ? 'right-[2px]' : 'left-[2px]'}`}></div>
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl border border-fb-divider/30 flex items-center justify-between opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="material-icons-round">account_balance_wallet</span>
              </div>
              <div>
                <p className="font-bold text-gray-500 text-[15px]">Kế toán</p>
                <p className="text-[12px] text-gray-400 font-medium">Chờ dự toán duyệt</p>
              </div>
            </div>
            <div className="w-11 h-6 bg-gray-200 rounded-full relative grayscale opacity-50">
              <div className="absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5"></div>
            </div>
          </div>
        </section>
        
        <div className="pt-4">
          <button className={`w-full py-4 rounded-xl font-bold text-[16px] shadow-md transition-all active:scale-95 ${approved ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500 pointer-events-none'}`}>
            Hoàn tất xác nhận
          </button>
        </div>
      </main>
    </div>
  );
};

export default Approval;

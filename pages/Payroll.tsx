
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROJECTS, MOCK_WORKERS } from '../constants';

const Payroll: React.FC = () => {
  const navigate = useNavigate();
  const project = MOCK_PROJECTS[0];

  return (
    <div className="pb-32 bg-fb-bg min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-fb-divider shadow-sm px-4 h-14 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <h1 className="text-[17px] font-bold text-fb-text">Bảng lương Tuần</h1>
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-icons-round text-2xl">search</span>
        </button>
      </header>

      <main className="px-4 py-4 space-y-4">
        {/* Project Card */}
        <div className="bg-white rounded-xl shadow-card p-4 border border-fb-divider/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center">
              <span className="material-icons-round text-2xl">apartment</span>
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-fb-text leading-tight">{project.name}</h2>
              <span className="text-[13px] text-primary font-bold">Đang thi công</span>
            </div>
          </div>
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex justify-between items-center text-[13px]">
            <div>
              <span className="text-fb-text-sec">Chủ nhiệm:</span>
              <span className="font-bold text-fb-text ml-1">{project.manager}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 text-fb-text-sec text-[11px] font-bold">Lương + Tiến độ</span>
          </div>
        </div>

        {/* Total Highlight */}
        <div className="bg-primary rounded-xl p-6 shadow-md text-white">
          <div className="text-center">
            <p className="text-blue-100 text-[13px] font-bold mb-1 opacity-90 uppercase tracking-wider">Tổng chi phí lương tuần 1</p>
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">34,289,000 <span className="text-xl font-medium">đ</span></h3>
            <div className="inline-flex items-center justify-center bg-white/20 rounded-lg px-4 py-2 backdrop-blur-md border border-white/20">
              <span className="material-icons-round text-sm mr-2">date_range</span>
              <span className="text-[14px] font-bold">05/01 - 10/01/2026</span>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button className="flex-none px-4 py-2 rounded-full bg-primary-soft text-primary text-[14px] font-bold">Tất cả (10)</button>
          <button className="flex-none px-4 py-2 rounded-full bg-white text-fb-text-sec text-[14px] font-bold border border-fb-divider/50 shadow-sm">Đã duyệt</button>
          <button className="flex-none px-4 py-2 rounded-full bg-white text-fb-text-sec text-[14px] font-bold border border-fb-divider/50 shadow-sm">Chờ duyệt</button>
        </div>

        {/* Worker List */}
        <div className="space-y-3">
          {MOCK_WORKERS.map(w => (
            <div key={w.id} className="bg-white rounded-xl shadow-card overflow-hidden border border-fb-divider/10 active:scale-[0.99] transition-transform cursor-pointer" onClick={() => navigate(`/worker/${w.id}`)}>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="relative">
                      <img src={w.avatar} alt={w.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px] shadow-sm">
                        <span className="material-icons-round text-primary text-sm">verified</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-fb-text leading-tight">{w.name}</h4>
                      <div className="flex items-center gap-2 text-fb-text-sec text-[12px] mt-1">
                        <span>{w.role}</span>
                        {w.rank && (
                          <span className="text-primary font-bold bg-primary-soft px-1.5 py-0.5 rounded text-[10px] uppercase">{w.rank}</span>
                        )}
                        {w.rating && (
                          <span className="flex items-center gap-0.5 text-warning font-bold">
                            <i className="material-icons-round text-[14px]">star</i>
                            {w.rating}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-primary font-bold text-[16px]">{(w.hourlyRate * 50).toLocaleString()} đ</span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-fb-bg mx-4"></div>
              <div className="px-4 py-3 space-y-2.5">
                <div className="flex justify-between items-center text-[13px]">
                  <div className="flex items-center text-fb-text-sec gap-2">
                    <span className="material-icons-round text-[18px]">schedule</span>
                    <span>Công nhật</span>
                  </div>
                  <div className="font-bold text-fb-text">
                    50h <span className="text-fb-text-sec text-xs mx-1 font-normal">x</span> {w.hourlyRate.toLocaleString()} đ
                  </div>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <div className="flex items-center text-fb-text-sec gap-2">
                    <span className="material-icons-round text-[18px]">account_balance</span>
                    <span>Chuyển khoản</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-fb-text">
                    <span className="material-icons-round text-xs text-primary">circle</span>
                    <span>ACB •••• {w.bankAccount.slice(-4)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Approval Flow */}
        <section className="mt-8 space-y-3">
          <h3 className="text-[15px] font-bold text-fb-text-sec px-1 mb-2">Trạng thái phê duyệt</h3>
          <div className="bg-white rounded-xl shadow-card divide-y divide-fb-bg border border-fb-divider/10">
            {[
              { role: 'Kỹ sư', name: project.engineer, status: 'Đã duyệt', img: 'https://picsum.photos/seed/e1/60', ok: true },
              { role: 'Dự toán', name: project.estimator, status: 'Đã duyệt', img: 'https://picsum.photos/seed/e2/60', ok: true },
              { role: 'Kế toán', name: 'Đang chờ xác nhận...', status: 'Chờ', img: 'https://picsum.photos/seed/e3/60', ok: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img src={s.img} alt={s.name} className={`w-10 h-10 rounded-full object-cover ${!s.ok ? 'grayscale opacity-50' : ''}`} />
                  <div>
                    <p className="font-bold text-fb-text text-[14px]">{s.role}</p>
                    <p className={`text-xs ${!s.ok ? 'text-fb-text-sec italic' : 'text-fb-text-sec'}`}>{s.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold ${s.ok ? 'text-success' : 'text-fb-text-sec'}`}>{s.status}</span>
                  {s.ok ? (
                    <span className="material-icons-round text-success text-xl">check_circle</span>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-fb-divider"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-24 right-6 bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full shadow-floating active:scale-95 transition-all z-40 flex items-center justify-center">
        <span className="material-icons-round text-2xl">download</span>
      </button>
    </div>
  );
};

export default Payroll;

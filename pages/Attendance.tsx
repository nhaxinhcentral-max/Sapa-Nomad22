
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_PROJECTS } from '../constants';

const Attendance: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = MOCK_PROJECTS.find(p => p.id === projectId) || MOCK_PROJECTS[0];
  const worker = project.workers[0];

  const days = [
    { label: 'T2', date: '05', active: true },
    { label: 'T3', date: '06' },
    { label: 'T4', date: '07', dot: true },
    { label: 'T5', date: '08' },
    { label: 'T6', date: '09' },
    { label: 'T7', date: '10' },
  ];

  // Giả lập dữ liệu tuần
  const weeklyHours = 45.5;
  const targetHours = 48;
  const weeklyEarnings = weeklyHours * worker.hourlyRate;

  return (
    <div className="pb-32 bg-fb-bg min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-fb-divider px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-bold text-primary tracking-tight">Bảng Chấm Công</h1>
          <p className="text-xs text-fb-text-sec">Dự án: {project.name}</p>
        </div>
      </header>

      {/* Profile Header */}
      <div className="bg-white px-4 py-4 mb-4 border-b border-fb-divider">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-fb-divider">
              <img src={worker.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-base font-bold text-fb-text leading-tight">{worker.name}</h2>
              <p className="text-xs text-fb-text-sec">{worker.role}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex text-yellow-400 mb-1">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons-round text-xs">star</span>)}
            </div>
            <span className="text-[10px] bg-gray-100 text-fb-text-sec px-2 py-0.5 rounded font-bold border border-fb-divider">
              {worker.rank}
            </span>
          </div>
        </div>

        {/* Date Selector */}
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2 min-w-max pb-2">
            {days.map(d => (
              <button
                key={d.date}
                className={`flex flex-col items-center justify-center w-14 py-3 rounded-xl transition-colors relative ${
                  d.active ? 'bg-primary text-white shadow-sm' : 'bg-gray-50 text-fb-text-sec'
                }`}
              >
                <span className="text-[11px] font-semibold mb-1 uppercase opacity-80">{d.label}</span>
                <span className="text-lg font-bold">{d.date}</span>
                {d.dot && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>}
                {d.active && <div className="w-1 h-1 bg-white rounded-full mt-1.5"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="px-4 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-fb-text">Hôm nay</h3>
          <span className="text-xs font-semibold bg-green-50 text-success px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-green-100">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            Đang làm việc
          </span>
        </div>

        {/* Morning Session */}
        <div className="bg-white rounded-xl shadow-card p-4">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-1 w-10 pt-1">
              <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="material-icons-round text-primary text-xl">wb_sunny</span>
              </div>
              <div className="h-20 w-0.5 bg-fb-divider/50 mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-fb-text text-base">Buổi Sáng</h4>
                  <span className="text-xs text-fb-text-sec">Ca chính • 06:30 - 12:00</span>
                </div>
                <div className="bg-primary-soft px-2 py-1 rounded text-primary font-bold text-xs">5.5h</div>
              </div>
              <div className="bg-fb-bg rounded-lg p-3 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-sm font-medium text-fb-text-sec">Vào ca</span>
                  </div>
                  <span className="text-sm font-bold text-fb-text font-mono">06:30</span>
                </div>
                <div className="pl-4 border-l-2 border-fb-divider py-1 ml-1">
                  <img src="https://picsum.photos/seed/site1/200" className="w-24 h-24 rounded-lg object-cover border border-fb-divider" alt="check-in" />
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-fb-divider/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-fb-text-sec">Ra ca</span>
                  </div>
                  <span className="text-sm font-bold text-fb-text font-mono">12:00</span>
                </div>
              </div>
              <button className="mt-3 w-full py-2 flex items-center justify-center gap-2 text-primary bg-primary-soft hover:bg-blue-100 rounded-lg transition-colors font-bold text-sm">
                <span className="material-icons-round text-lg">add_a_photo</span>
                Thêm ảnh / Video
              </button>
            </div>
          </div>
        </div>

        {/* Afternoon Session */}
        <div className="bg-white rounded-xl shadow-card p-4">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-1 w-10 pt-1">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                <span className="material-icons-round text-orange-500 text-xl">wb_twilight</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-fb-text text-base">Buổi Chiều</h4>
                  <span className="text-xs text-fb-text-sec">Ca phụ • 13:00 - 17:30</span>
                </div>
                <div className="bg-primary-soft px-2 py-1 rounded text-primary font-bold text-xs">4.5h</div>
              </div>
              <div className="bg-fb-bg rounded-lg p-3 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-sm font-medium text-fb-text-sec">Vào ca</span>
                  </div>
                  <span className="text-sm font-bold text-fb-text font-mono">13:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-fb-divider/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-medium text-fb-text-sec">Ra ca</span>
                  </div>
                  <span className="text-sm font-bold text-fb-text-sec font-mono">--:--</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Summary Card */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="p-4 border-b border-fb-divider">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-lg text-fb-text">Tổng kết hôm nay</h4>
              <div className="w-8 h-8 bg-primary-soft rounded-full flex items-center justify-center text-primary">
                <span className="material-icons-round text-lg">insights</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-3xl font-bold tracking-tight text-primary">9h</h3>
              <span className="text-sm text-fb-text-sec">/ 8h chỉ tiêu</span>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-fb-divider">
            <div className="p-4">
              <p className="text-[11px] text-fb-text-sec font-bold uppercase tracking-wide mb-1">Lương dự kiến</p>
              <p className="font-bold text-lg text-fb-text">{(9 * worker.hourlyRate).toLocaleString()} đ</p>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-fb-text-sec font-bold uppercase tracking-wide mb-1">Công việc</p>
              <p className="font-medium text-sm text-fb-text truncate">Lắp đặt cốt pha</p>
            </div>
          </div>
        </div>

        {/* NEW: Weekly Summary Section */}
        <div className="bg-white rounded-xl shadow-card p-4 border border-primary/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-[17px] text-fb-text">Tóm tắt lương tuần này</h4>
            <span className="text-[11px] font-bold bg-primary-soft text-primary px-2 py-1 rounded uppercase tracking-wider">Tuần 01</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="space-y-1">
              <p className="text-[12px] text-fb-text-sec font-medium">Tổng giờ tích lũy</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-fb-text">{weeklyHours}h</span>
                <span className="text-[13px] text-fb-text-sec">/ {targetHours}h</span>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-[12px] text-fb-text-sec font-medium">Lương tuần ước tính</p>
              <p className="text-2xl font-bold text-primary">{weeklyEarnings.toLocaleString()} đ</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[12px]">
              <span className="text-fb-text-sec font-medium">Tiến độ hoàn thành công tuần</span>
              <span className="font-bold text-fb-text">{Math.round((weeklyHours / targetHours) * 100)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000" 
                style={{ width: `${Math.min((weeklyHours / targetHours) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-fb-divider flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-success">
                <span className="material-icons-round text-[18px]">event_available</span>
              </div>
              <p className="text-[13px] text-fb-text-sec">Đã chốt <span className="font-bold text-fb-text">5/6</span> ngày công</p>
            </div>
            <button 
              onClick={() => navigate('/payroll')}
              className="text-[13px] font-bold text-primary hover:underline flex items-center gap-1"
            >
              Chi tiết lương <span className="material-icons-round text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      <button className="fixed bottom-24 right-4 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-40">
        <span className="material-icons-round text-2xl">chat</span>
      </button>
    </div>
  );
};

export default Attendance;

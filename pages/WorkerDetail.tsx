
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_WORKERS } from '../constants';

const WorkerDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const worker = MOCK_WORKERS.find(w => w.id === id) || MOCK_WORKERS[0];
  
  // Lấy danh sách đội (giả định là các worker còn lại trong mock data)
  const teamMembers = MOCK_WORKERS.filter(w => w.id !== worker.id);

  // Giả lập dữ liệu tuần
  const weeklyHours = 45.5;
  const weeklyEarnings = weeklyHours * worker.hourlyRate;

  return (
    <div className="pb-32 bg-fb-bg min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-fb-divider h-14 flex items-center justify-between px-4 max-w-md mx-auto">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h1 className="font-bold text-[17px] text-fb-text truncate px-2">Chi tiết Nhân sự & Lương</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100">
          <span className="material-icons-round">more_horiz</span>
        </button>
      </header>

      <main className="pt-16 px-4 space-y-4">
        {/* Profile Info */}
        <section className="bg-white rounded-xl shadow-card p-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <div className="h-[72px] w-[72px] rounded-full bg-gray-100 flex items-center justify-center border-4 border-white overflow-hidden shadow-sm">
                <img src={worker.avatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0.5 right-0.5 bg-success border-[3px] border-white w-6 h-6 rounded-full"></div>
            </div>
            <div className="flex-1 pt-1">
              <h2 className="font-bold text-xl text-fb-text leading-tight">{worker.name}</h2>
              <p className="text-[15px] text-fb-text-sec font-normal mt-0.5">{worker.role}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-bold px-2 py-1 bg-primary-soft text-primary rounded-md">#NV-{worker.id}291</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-fb-bg p-3 rounded-xl">
              <span className="block text-[10px] font-bold text-fb-text-sec mb-0.5 uppercase tracking-wide">Dự án</span>
              <p className="font-bold text-[14px] text-fb-text truncate">Biệt thự - Quận 12</p>
            </div>
            <div className="bg-fb-bg p-3 rounded-xl">
              <span className="block text-[10px] font-bold text-fb-text-sec mb-0.5 uppercase tracking-wide">Lương giờ</span>
              <p className="font-bold text-[14px] text-fb-text">{worker.hourlyRate.toLocaleString()} đ</p>
            </div>
          </div>

          <div className="bg-fb-bg p-3 rounded-xl flex items-center justify-between group cursor-pointer active:bg-gray-200 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                <span className="material-icons-round text-xl">account_balance</span>
              </div>
              <div>
                <span className="block text-[10px] text-fb-text-sec uppercase font-bold">{worker.bankName}</span>
                <span className="font-mono text-sm font-bold text-fb-text tracking-wide">{worker.bankAccount}</span>
              </div>
            </div>
            <button className="text-fb-text-sec group-hover:text-primary transition-colors">
              <span className="material-icons-round text-xl">content_copy</span>
            </button>
          </div>
        </section>

        {/* TỔNG KẾT TUẦN HIỆN TẠI */}
        <section className="bg-primary rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-10">
            <span className="material-icons-round text-[120px]">payments</span>
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-base opacity-90">Tổng kết Tuần 1</h3>
              <span className="text-[11px] font-bold bg-white/20 px-2 py-1 rounded-lg">05/01 - 10/01</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs opacity-80 mb-1">Tổng giờ công</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black">{weeklyHours}h</span>
                  <span className="text-xs opacity-70">/ 48h</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-80 mb-1">Lương tạm tính</p>
                <p className="text-2xl font-black">{weeklyEarnings.toLocaleString()} đ</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs opacity-80">Tiến độ công tuần</span>
                <span className="text-xs font-bold">95%</span>
              </div>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Attendance Navigation */}
        <section className="bg-white rounded-xl shadow-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[17px] text-fb-text">Lịch sử chấm công</h3>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
              Xem lịch <span className="material-icons-round text-lg">calendar_today</span>
            </button>
          </div>
          
          <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
            {[
              { day: 'Th 2', date: '05', hours: '9h', status: 'primary' },
              { day: 'Th 3', date: '06', dot: 'success' },
              { day: 'Th 4', date: '07', dot: 'success' },
              { day: 'Th 5', date: '08', dot: 'warning' },
              { day: 'Th 6', date: '09', dot: 'success' },
            ].map((d, i) => (
              <div 
                key={i}
                className={`flex-shrink-0 w-16 rounded-xl p-2.5 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 ${
                  d.status === 'primary' ? 'bg-primary text-white' : 'bg-fb-bg border border-transparent hover:border-fb-divider'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase ${d.status === 'primary' ? 'opacity-90' : 'text-fb-text-sec'}`}>{d.day}</span>
                <span className="text-xl font-bold my-0.5">{d.date}</span>
                {d.hours && <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full mt-1">{d.hours}</span>}
                {d.dot && <div className={`h-1.5 w-1.5 rounded-full mt-2 ${d.dot === 'success' ? 'bg-success' : 'bg-warning'}`}></div>}
              </div>
            ))}
          </div>
        </section>

        {/* Day Detail Card */}
        <section className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="p-4 border-b border-fb-divider/40 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-fb-text text-[17px]">Thứ 2, 05/01/2026</h4>
              <div className="flex items-center gap-1 mt-0.5 text-sm">
                <span className="text-fb-text-sec">Tổng:</span>
                <span className="font-bold text-primary">9 giờ</span>
              </div>
            </div>
            <span className="flex items-center gap-1 text-[13px] font-bold text-success bg-green-50 px-2 py-1 rounded-lg border border-green-100">
              <span className="material-icons-round text-base">check_circle</span>
              Đã duyệt
            </span>
          </div>

          <div className="p-4 space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1 relative">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100 z-10">
                  <span className="material-icons-round text-xl">wb_sunny</span>
                </div>
                <div className="absolute top-10 bottom-[-24px] w-0.5 bg-fb-divider/50"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-fb-text text-base">Ca Sáng</p>
                    <div className="flex items-center gap-2 text-xs text-fb-text-sec mt-0.5">
                      <span className="font-bold">06:30</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="font-bold">12:00</span>
                    </div>
                  </div>
                  <span className="font-bold text-fb-text text-sm bg-fb-bg px-2.5 py-1 rounded-lg">5.5h</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border border-fb-divider overflow-hidden">
                    <img src="https://picsum.photos/seed/site1/100" className="w-full h-full object-cover" alt="checkin" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center relative">
                    <span className="material-icons-round text-white/80 text-2xl">play_circle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1 relative">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-primary border border-indigo-100 z-10">
                  <span className="material-icons-round text-xl">nights_stay</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-fb-text text-base">Ca Chiều</p>
                    <div className="flex items-center gap-2 text-xs text-fb-text-sec mt-0.5">
                      <span className="font-bold">13:00</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="font-bold">17:30</span>
                    </div>
                  </div>
                  <span className="font-bold text-fb-text text-sm bg-fb-bg px-2.5 py-1 rounded-lg">3.5h</span>
                </div>
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border border-fb-divider overflow-hidden mt-2">
                   <img src="https://picsum.photos/seed/site2/100" className="w-full h-full object-cover" alt="checkin" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DANH SÁCH ĐỘI (TEAM LIST) */}
        <section className="bg-white rounded-xl shadow-card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[17px] text-fb-text">Danh sách đội thi công</h3>
            <span className="text-[12px] font-bold text-fb-text-sec bg-fb-bg px-2 py-0.5 rounded">{teamMembers.length} thành viên</span>
          </div>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                onClick={() => navigate(`/worker/${member.id}`)}
                className="flex items-center justify-between p-2 hover:bg-fb-bg rounded-xl transition-colors cursor-pointer active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-fb-divider">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-fb-text">{member.name}</p>
                    <p className="text-[12px] text-fb-text-sec">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-warning">
                    <span className="material-icons-round text-sm">star</span>
                    <span className="text-[11px] font-bold ml-0.5 text-fb-text">{member.rating || '5.0'}</span>
                  </div>
                  <span className="material-icons-round text-fb-text-sec text-lg">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 py-2.5 text-[14px] font-bold text-primary bg-primary-soft rounded-xl hover:bg-blue-100 transition-colors">
            Xem toàn bộ tổ đội
          </button>
        </section>
      </main>
    </div>
  );
};

export default WorkerDetail;

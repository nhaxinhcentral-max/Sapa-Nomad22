
import React from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import Attendance from './pages/Attendance';
import WorkerDetail from './pages/WorkerDetail';
import Payroll from './pages/Payroll';
import Approval from './pages/Approval';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: 'home', label: 'Trang chủ', path: '/' },
    { icon: 'group', label: 'Nhân sự', path: '/personnel' },
    { icon: 'receipt_long', label: 'Lương', path: '/payroll' },
    { icon: 'menu', label: 'Menu', path: '/menu' },
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-fb-bg relative">
      <div className="flex-1">
        {children}
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-fb-divider pb-safe z-50">
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                            (item.path === '/' && location.pathname === '');
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 w-full transition-colors ${
                  isActive ? 'text-primary' : 'text-fb-text-sec'
                }`}
              >
                <span className={`material-symbols-outlined text-[26px] ${isActive ? 'fill-1' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/attendance/:projectId" element={<Attendance />} />
          <Route path="/worker/:id" element={<WorkerDetail />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/approval" element={<Approval />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

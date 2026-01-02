
import { Project, ProjectStatus, Worker } from './types';

export const MOCK_WORKERS: Worker[] = [
  {
    id: '1',
    name: 'Trần Minh Khang',
    role: 'Đội trưởng - Cai',
    avatar: 'https://picsum.photos/seed/khang/200',
    hourlyRate: 81000,
    bankAccount: '011234567',
    bankName: 'ACB - Ngân hàng Á Châu',
    rating: 5,
    rank: 'Hạng 5',
    initials: 'MK'
  },
  {
    id: '2',
    name: 'Nguyễn Đức Anh',
    role: 'Thợ chính',
    avatar: 'https://picsum.photos/seed/anh/200',
    hourlyRate: 75000,
    bankAccount: '011234568',
    bankName: 'ACB - Ngân hàng Á Châu',
    rating: 4.8,
    initials: 'ĐA'
  },
  {
    id: '3',
    name: 'Lê Quốc Huy',
    role: 'Thợ chính',
    avatar: 'https://picsum.photos/seed/huy/200',
    hourlyRate: 75000,
    bankAccount: '011234569',
    bankName: 'ACB - Ngân hàng Á Châu',
    rank: 'Hạng A',
    initials: 'QH'
  },
  {
    id: '4',
    name: 'Phạm Thanh Tùng',
    role: 'Thợ phụ',
    avatar: 'https://picsum.photos/seed/tung/200',
    hourlyRate: 69000,
    bankAccount: '011234570',
    bankName: 'ACB - Ngân hàng Á Châu',
    rank: 'Hạng C',
    initials: 'PT'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Biệt thự - Quận 12',
    location: 'Tp. Hồ Chí Minh',
    status: ProjectStatus.IN_PROGRESS,
    manager: 'Nguyễn Huy Thắng',
    engineer: 'Võ Văn Hùng',
    estimator: 'Diệp Xuân Luyến',
    weeklySalary: 34289000,
    personnelCount: 12,
    workers: MOCK_WORKERS
  },
  {
    id: 'p2',
    name: 'Nhà máy SX - Bình Dương',
    location: 'TP. Dĩ An',
    status: ProjectStatus.IN_PROGRESS,
    manager: 'Lê Văn Tám',
    engineer: 'Phan Hoàng Nam',
    estimator: 'Trần Mỹ Linh',
    weeklySalary: 128500000,
    personnelCount: 44,
    workers: MOCK_WORKERS
  },
  {
    id: 'p3',
    name: 'Chung cư Sky City',
    location: 'Quận 7, TP.HCM',
    status: ProjectStatus.COMPLETED,
    manager: 'Đặng Quốc Bảo',
    engineer: 'Vũ Minh Tuấn',
    estimator: 'Ngô Thu Thủy',
    weeklySalary: 89120000,
    personnelCount: 26,
    workers: MOCK_WORKERS
  },
  {
    id: 'p4',
    name: 'Văn phòng TechHub',
    location: 'Quận 3, TP.HCM',
    status: ProjectStatus.PENDING,
    manager: 'Hoàng Anh Dũng',
    engineer: 'Bùi Thế Hiển',
    estimator: 'Mai Tuyết Anh',
    weeklySalary: 0,
    personnelCount: 1,
    workers: [MOCK_WORKERS[0]]
  }
];

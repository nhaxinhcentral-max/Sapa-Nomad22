
export enum ProjectStatus {
  IN_PROGRESS = 'Đang thi công',
  COMPLETED = 'Hoàn thành',
  PENDING = 'Chờ duyệt'
}

export interface Worker {
  id: string;
  name: string;
  role: string;
  avatar: string;
  hourlyRate: number;
  bankAccount: string;
  bankName: string;
  rating?: number;
  rank?: string;
  initials: string;
}

export interface AttendanceSession {
  type: 'Morning' | 'Afternoon';
  checkIn: string;
  checkOut: string;
  duration: number;
  photoUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  status: ProjectStatus;
  manager: string;
  engineer: string;
  estimator: string;
  weeklySalary: number;
  personnelCount: number;
  workers: Worker[];
}

import { create } from "zustand";

export interface Employee {
  id: number;
  fullName: string;
  email: string;
  dob: string;
  gender: string;
  contact: string;
  address: string;
  position: string;
  shift: string;
  salary: string;
  availability: string;
  image?: string | null;
}

interface EmployeeStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteEmployee: any;
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: [],
  addEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, { ...employee, id: Date.now() }],
    })),

    deleteEmployee: (id: number) =>
    set((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id),
    })),
}));

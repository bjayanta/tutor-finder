export type Circular = {
  id: number;
  title: string;
  salary: number;
  standard: string;
  subjects: string[];
  location: {
    area: string;
    city: string;
    country: string;
  };
  institution: string;
  preferences: {
    days: number;
    gender: string;
  };
  createdAt: string;
};

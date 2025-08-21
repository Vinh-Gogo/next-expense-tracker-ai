export interface Record {
  date: string | number | Date;
  id: string;
  text: string;
  amount: number;
  category: string;
  userID: string;
  createAt: Date;
}
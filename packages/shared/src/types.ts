export interface Notification {
  id: string;
  source: string;
  title: string;
  message: string;
  timestamp: number;
  priority?: 'high' | 'medium' | 'low';
}
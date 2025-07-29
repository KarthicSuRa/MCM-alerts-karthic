

import { Session } from '@supabase/supabase-js';
import { type Database } from './lib/supabaseClient';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Severity = 'low' | 'medium' | 'high';

export type NotificationStatus = 'new' | 'acknowledged' | 'resolved';

export interface Comment {
  id: string;
  text: string;
  created_at: string;
  notification_id: string;
  user_id: string;
  user_email: string;
}

export interface Notification {
  id:string;
  type: string;
  title: string;
  message: string;
  severity: Severity;
  status: NotificationStatus;
  timestamp: string;
  site: string | null;
  comments: Comment[];
  topic_id: string | null;
  created_at: string;
}

export type NotificationUpdatePayload = Database['public']['Tables']['notifications']['Update'];

export interface Topic {
  id: string;
  name: string;
  description: string;
  created_at: string;
  subscribed?: boolean;
  subscription_id?: number;
}

export interface AuditLog {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    details: string;
    notificationId: string;
}

export interface SystemStatusData {
  service: 'Ready' | 'Error';
  database: 'Connected' | 'Disconnected';
  push: 'Supported' | 'Unsupported';
  subscription: 'Active' | 'Inactive';
}

export type { Session };

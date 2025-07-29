
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notifications: {
        Row: {
          id: string
          created_at: string
          type: string
          title: string
          message: string
          severity: 'low' | 'medium' | 'high'
          status: 'new' | 'acknowledged' | 'resolved'
          timestamp: string
          site: string | null
          topic_id: string | null
        }
        Insert: {
          type: string
          title: string
          message: string
          severity: 'low' | 'medium' | 'high'
          status: 'new' | 'acknowledged' | 'resolved'
          timestamp: string
          site?: string | null
          topic_id?: string | null
        }
        Update: {
          type?: string
          title?: string
          message?: string
          severity?: 'low' | 'medium' | 'high'
          status?: 'new' | 'acknowledged' | 'resolved'
          timestamp?: string
          site?: string | null
          topic_id?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          id: string
          created_at: string
          text: string
          notification_id: string
          user_id: string
        }
        Insert: {
          text: string
          notification_id: string
          user_id: string
        }
        Update: {
          text?: string
          notification_id?: string
          user_id?: string
        }
        Relationships: []
      }
      topics: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string
        }
        Insert: {
          name: string
          description: string
        }
        Update: {
          name?: string
          description?: string
        }
        Relationships: []
      }
      topic_subscriptions: {
        Row: {
          id: number
          created_at: string
          user_id: string
          topic_id: string
        }
        Insert: {
          user_id: string
          topic_id: string
        }
        Update: {
          user_id?: string
          topic_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}


// IMPORTANT: These keys should be set as environment variables in your hosting provider (Netlify).
// Do not hardcode them in a public repository.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required.");
}

export const supabase: SupabaseClient<Database> = createClient<Database>(supabaseUrl, supabaseAnonKey);
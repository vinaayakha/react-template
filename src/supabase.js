import { createClient } from "@supabase/supabase-js";


export const supabase = createClient("https://codnqqtgucssvqfwcftc.supabase.co",import.meta.env.VITE_SUPBASE_KEY)
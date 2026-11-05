// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

const isValidSupabaseUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname.endsWith('.supabase.co')
  } catch {
    return false
  }
}

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY. Crea .env.local y reinicia Vite.'
  )
}

if (!isValidSupabaseUrl(supabaseUrl)) {
  throw new Error(`VITE_SUPABASE_URL no es válida: ${supabaseUrl}`)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

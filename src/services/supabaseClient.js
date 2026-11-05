import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL no está definida.'
  )
}

if (!supabaseKey) {
  throw new Error(
    'La clave pública de Supabase no está definida.'
  )
}

console.log('✅ Supabase configurado:', {
  url: supabaseUrl,
  keyConfigured: true,
  mode: import.meta.env.MODE,
})

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
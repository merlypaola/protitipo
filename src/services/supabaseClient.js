// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Tomamos las variables de entorno definidas en .env.local o Vercel
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validación para evitar crear el cliente con undefined
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '❌ ERROR: Las variables de entorno de Supabase no están definidas.\n' +
    'Revisa tu .env.local y asegúrate de reiniciar el servidor de Vite.\n' +
    'Variables detectadas:',
    { supabaseUrl, supabaseAnonKey }
  )
}

// Debug: imprimir todas las variables de entorno disponibles
console.log('✅ Supabase URL:', supabaseUrl)
console.log('✅ Supabase ANON KEY:', supabaseAnonKey)
console.log('🔹 Todas las variables de entorno:', import.meta.env)

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
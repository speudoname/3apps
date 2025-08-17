// Public configuration - safe to expose
// These are public keys meant to be used in the browser
// RLS (Row Level Security) protects the data

const SUPABASE_CONFIG = {
    url: 'https://alurbrjkglkmufckenxo.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdXJicmprZ2xrbXVmY2tlbnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDk4MDIsImV4cCI6MjA3MTAyNTgwMn0.DBLyG-xhmuK6kVxmznI4Ccju8HpjY7arlf-t54UR9kk'
};

// Security note: The anon key is safe to expose as it only allows
// public operations. Row Level Security (RLS) policies protect user data.
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;

/**
 * Returns a server-side Supabase client using the service role key.
 * Lazily initialised so the build doesn't fail with placeholder env vars.
 * NEVER call this from client components — it bypasses RLS.
 */
export function getSupabase(): SupabaseClient {
  if (_client) return _client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars',
    );
  }

  _client = createClient(url, key);
  return _client;
}

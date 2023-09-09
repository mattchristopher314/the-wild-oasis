import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ddtsuieffhkkdsbdyfri.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdHN1aWVmZmhra2RzYmR5ZnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDQzOTMsImV4cCI6MjAwOTQ4MDM5M30.7TDIzfvALAbeTA4RqxYhJ3dNsKsOipvlcC8UXUXLGMQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

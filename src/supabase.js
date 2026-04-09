import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://ceihxexbhlesdeohauiu.supabase.co";
const secretKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlaWh4ZXhiaGxlc2Rlb2hhdWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MjYzOTUsImV4cCI6MjA3NDMwMjM5NX0.mHd3-lA4iRMzDMM8xcJA5Im-nIhVbDKSnLoO4szF9fk";

export const supabase = createClient(projectUrl, secretKey);

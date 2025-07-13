
-- Fix the RLS policies to only allow anonymous users (no authentication)
DROP POLICY IF EXISTS "Allow anonymous review submissions" ON public.reviews;
DROP POLICY IF EXISTS "Allow viewing approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Service role manages reviews" ON public.reviews;

-- Create policies that work only with anonymous users
CREATE POLICY "Allow anonymous review submissions"
  ON public.reviews
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous users to view approved reviews
CREATE POLICY "Allow viewing approved reviews"
  ON public.reviews
  FOR SELECT
  TO anon
  USING (is_approved = true);

-- Allow service role full access for management
CREATE POLICY "Service role manages reviews"
  ON public.reviews
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

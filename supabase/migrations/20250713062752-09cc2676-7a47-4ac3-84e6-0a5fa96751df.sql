
-- Fix the RLS policies for reviews table to properly allow anonymous submissions
DROP POLICY IF EXISTS "Public can insert reviews" ON public.reviews;
DROP POLICY IF EXISTS "Public can view approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Service role full access" ON public.reviews;

-- Create new policies that work with anonymous users
CREATE POLICY "Allow anonymous review submissions"
  ON public.reviews
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to view approved reviews
CREATE POLICY "Allow viewing approved reviews"
  ON public.reviews
  FOR SELECT
  TO anon, authenticated, public
  USING (is_approved = true);

-- Allow service role full access for management
CREATE POLICY "Service role manages reviews"
  ON public.reviews
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

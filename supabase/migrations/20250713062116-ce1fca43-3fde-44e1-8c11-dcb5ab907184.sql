
-- First, let's completely clean up all existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;
DROP POLICY IF EXISTS "Anyone can view approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow public review submissions" ON public.reviews;
DROP POLICY IF EXISTS "Allow viewing approved reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow service role to update reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow public review inserts" ON public.reviews;

-- Now create clean policies
CREATE POLICY "Public can insert reviews"
  ON public.reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to view only approved reviews
CREATE POLICY "Public can view approved reviews"
  ON public.reviews
  FOR SELECT
  TO public
  USING (is_approved = true);

-- Allow service role full access for management
CREATE POLICY "Service role full access"
  ON public.reviews
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

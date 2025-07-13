
-- Drop the existing policies first
DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;
DROP POLICY IF EXISTS "Anyone can view approved reviews" ON public.reviews;

-- Create a new policy that allows anyone to insert reviews
CREATE POLICY "Allow public review submissions"
  ON public.reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy that allows anyone to view approved reviews
CREATE POLICY "Allow viewing approved reviews"
  ON public.reviews
  FOR SELECT
  TO public
  USING (is_approved = true);

-- Create a policy that allows service role to update reviews (for approval/rejection)
CREATE POLICY "Allow service role to update reviews"  
  ON public.reviews
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

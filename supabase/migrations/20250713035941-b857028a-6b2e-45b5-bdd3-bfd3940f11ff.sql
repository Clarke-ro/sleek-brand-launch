
-- Create a table for reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index on approved reviews for faster queries
CREATE INDEX idx_reviews_approved ON public.reviews (is_approved, created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit reviews
CREATE POLICY "Anyone can submit reviews" 
  ON public.reviews 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow anyone to view approved reviews
CREATE POLICY "Anyone can view approved reviews" 
  ON public.reviews 
  FOR SELECT 
  TO anon, authenticated
  USING (is_approved = true);

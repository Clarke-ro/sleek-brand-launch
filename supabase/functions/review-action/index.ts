
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.5';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const reviewId = url.searchParams.get('id');
    const action = url.searchParams.get('action');

    console.log('Review action request:', { reviewId, action });

    if (!reviewId || !action || !['approve', 'reject'].includes(action)) {
      return new Response('Invalid parameters', { 
        status: 400, 
        headers: corsHeaders 
      });
    }

    const isApproved = action === 'approve';

    const { data, error } = await supabase
      .from('reviews')
      .update({ is_approved: isApproved })
      .eq('id', reviewId)
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response('Database error', { 
        status: 500, 
        headers: corsHeaders 
      });
    }

    const actionText = isApproved ? 'approved' : 'rejected';
    
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Review ${actionText}</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .success { color: #10b981; }
            .reject { color: #ef4444; }
          </style>
        </head>
        <body>
          <h1 class="${isApproved ? 'success' : 'reject'}">
            Review ${actionText} successfully!
          </h1>
          <p>The review from ${data.name} has been ${actionText}.</p>
        </body>
      </html>
    `, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
      },
    });

  } catch (error) {
    console.error('Error in review-action function:', error);
    return new Response('Internal server error', { 
      status: 500, 
      headers: corsHeaders 
    });
  }
};

serve(handler);

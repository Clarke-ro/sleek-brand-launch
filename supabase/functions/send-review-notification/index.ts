
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReviewNotificationRequest {
  reviewId: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  rating: number;
  content: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { reviewId, name, email, company, role, rating, content }: ReviewNotificationRequest = await req.json();

    console.log('Sending review notification for:', { reviewId, name, email });

    const stars = '⭐'.repeat(rating);
    const approveUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/review-action?id=${reviewId}&action=approve`;
    const rejectUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/review-action?id=${reviewId}&action=reject`;

    const emailResponse = await resend.emails.send({
      from: "Brand & Web Co <noreply@brandandwebco.com>",
      to: ["brandandwebco@gmail.com"],
      subject: `New Review Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0f172a; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
            New Review Submission
          </h1>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #0f172a; margin-top: 0;">Review Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">Review Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${content}</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <h3 style="color: #0f172a;">Take Action:</h3>
            <div style="margin: 20px 0;">
              <a href="${approveUrl}" 
                 style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px; display: inline-block; font-weight: bold;">
                ✅ Approve Review
              </a>
              <a href="${rejectUrl}" 
                 style="background: #ef4444; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 0 10px; display: inline-block; font-weight: bold;">
                ❌ Reject Review
              </a>
            </div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>This email was sent automatically when a new review was submitted on your website.</p>
            <p>Brand & Web Co - Review Management System</p>
          </div>
        </div>
      `,
    });

    console.log("Review notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-review-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

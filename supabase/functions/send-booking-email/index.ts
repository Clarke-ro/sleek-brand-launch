
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingEmailRequest = await req.json();
    console.log("Received booking data:", bookingData);

    // Send email to Brand & Web Co
    const emailResponse = await resend.emails.send({
      from: "Brand & Web Co <onboarding@resend.dev>",
      to: ["brandandwebco@gmail.com"],
      subject: `New Project Booking Request - ${bookingData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Project Booking Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            ${bookingData.company ? `<p><strong>Company:</strong> ${bookingData.company}</p>` : ''}
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Project Details</h3>
            <p><strong>Service Needed:</strong> ${bookingData.service}</p>
            ${bookingData.budget ? `<p><strong>Budget Range:</strong> ${bookingData.budget}</p>` : ''}
            ${bookingData.timeline ? `<p><strong>Timeline:</strong> ${bookingData.timeline}</p>` : ''}
          </div>

          ${bookingData.message ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Project Message</h3>
            <p style="white-space: pre-wrap;">${bookingData.message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background-color: #1e3a8a; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">This booking request was submitted through your Brand & Web Co website.</p>
          </div>
        </div>
      `,
    });

    console.log("Booking email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
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

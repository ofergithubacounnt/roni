import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, email, serviceType, address, notes } = body;

    if (!name || !phone || !serviceType || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await getResend().emails.send({
      from:
        process.env.FROM_EMAIL ||
        "Roni HaTzabai Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "ron997@hotmail.co.il"],
      subject: `הצעת מחיר חדשה מ-${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #4D96FF, #A855F7); padding: 3px; border-radius: 12px;">
            <div style="background: white; border-radius: 10px; padding: 30px;">
              <h1 style="color: #1A1A2E; margin-bottom: 24px; font-size: 24px;">פנייה חדשה מהאתר</h1>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68; width: 120px;">שם:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">טלפון:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;"><a href="tel:${phone}" style="color: #4D96FF;">${phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">אימייל:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${email || "לא צוין"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">סוג שירות:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${serviceType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">כתובת:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${address}</td>
                </tr>
                ${
                  notes
                    ? `<tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">הערות:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${notes}</td>
                </tr>`
                    : ""
                }
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #F8F9FA; border-radius: 8px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; padding: 12px 24px; background: #6BCB77; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                  התקשר ללקוח
                </a>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #8E8EA0; font-size: 12px; margin-top: 16px;">
            נשלח מאתר רוני הצבעי
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

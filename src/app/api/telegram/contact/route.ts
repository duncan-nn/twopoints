import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { name, email, phone, referer, message } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const msg =
      "New message from contact form (TwoPoints Studio): %0A%0A" +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `📱 Phone: ${phone || 'Not provided'}%0A` +
      `🔗 Referer: ${referer}%0A` +
      `📝 Message: ${message}%0A`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat_id}&text=${msg}`;

    await axios.get(url);

    return new NextResponse(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://www.twopointsstudio.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        }
      }
    );

  } catch (error) {
    console.error('Telegram error:', error);
    return new NextResponse(
      JSON.stringify({ success: false }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "https://www.twopointsstudio.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        }
      }
    );
  }
}

// Important: Handle OPTIONS for CORS preflight
export function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
}
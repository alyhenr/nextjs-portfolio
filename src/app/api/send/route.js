import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.MAILTO;

export async function POST(req, _res) {
    const body = await req.json();
    const { senderEmail, subject, message } = body;
    try {
        const data = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject,
            reply_to: senderEmail,
            text: message + '\n' + `From: ${senderEmail}`,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET({ message, senderEmail }) {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [process.env.MAILTO],
            subject: 'Message from my portfolio',
            reply_to: 'alyssonhra99@gmail.com',
            text: "Hello world",
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

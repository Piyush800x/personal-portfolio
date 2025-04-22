'use server';

import { AdminNotificationEmail, EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export const contactSubmitAction = async (formData: FormData) => {
  // Cloudflare verification
    const token = formData.get("cf-turnstile-response");

    if (!token) {
      return { error: "Missing captcha token" };
    }

    const secretKey = process.env.CF_TURNSTILE_SECRET_KEY;

    const verificationRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const verification = await verificationRes.json();

    if (!verification.success) {
      return { error: "Captcha verification failed" };
    }

    // Resend email process
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const { data, error } = await resend.emails.send({
        from: 'contact@piyushpaul.com',
        to: [email],
        subject: 'Contact Enquiry 🌷✨',
        react: EmailTemplate({ Name: name }),
      });

      await resend.emails.send({
        from: 'contact@piyushpaul.com',
        to: ['business@piyushpaul.com'],
        subject: `${name} Contacted | Response ASAP`,
        react: AdminNotificationEmail({ senderName: name, senderEmail: email, senderMessage: message }),
      });
  
      if (error) {
        return { error: "Failed to send message" };
      }
  
      return {data};
    } catch (error) {
      return { error: "Internal Server error!" };
    }
}


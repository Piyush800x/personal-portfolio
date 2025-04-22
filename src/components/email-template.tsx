"use server";
import * as React from "react";

interface EmailTemplateProps {
  Name: string;
}

interface AdminNotificationEmailProps {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = async ({
  Name,
}) => (
  <div className="font-sans text-gray-800 leading-relaxed p-6 bg-white">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">Hi {Name},</h1>
    <p className="mb-4">
      Thank you for getting in touch! I truly appreciate you reaching out
      through my portfolio.
    </p>
    <p className="mb-4">
      I’ve received your message and will respond as soon as possible.
      Meanwhile, feel free to explore more of my work or connect with me on
      social media.
    </p>
    <p className="mb-4">Looking forward to speaking with you!</p>
    <p>
      Best regards,
      <br />
      <span className="font-semibold">Piyush Paul</span>
    </p>
  </div>
);

export const AdminNotificationEmail: React.FC<
  Readonly<AdminNotificationEmailProps>
> = async ({ senderName, senderEmail, senderMessage }) => (
  <div className="font-sans text-gray-800 leading-relaxed p-6 bg-white">
    <h1 className="text-xl font-bold text-gray-900 mb-4">
      📬 New Contact Form Submission
    </h1>

    <p className="mb-2">
      <span className="font-semibold">Name:</span> {senderName}
    </p>
    <p className="mb-2">
      <span className="font-semibold">Email:</span> {senderEmail}
    </p>
    <p className="mb-4">
      <span className="font-semibold">Message:</span>
      <br />
      {senderMessage}
    </p>

    <p className="text-sm text-gray-500">
      This message was automatically generated from your portfolio contact form.
    </p>
  </div>
);

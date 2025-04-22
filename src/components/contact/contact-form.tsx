"use client";

import { useState, useEffect, useRef } from "react";
import { SubmitButton } from "../button/submit-button";
import { contactSubmitAction } from "@/app/actions"; // your server action

export default function ContactFormClient() {
  const [btnStatus, setBtnStatus] = useState<string>("Send Message");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.turnstile && turnstileRef.current?.childNodes.length === 0) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY!,
        theme: "dark",
        callback: () => setVerified(true),
        "expired-callback": () => setVerified(false),
        "error-callback": () => setVerified(false),
      });
    }
  }, []);

  async function handleSubmit(formData: FormData) {
    setBtnStatus("Sending");

    try {
      const resp = await contactSubmitAction(formData);
      if (resp.data) {
        setBtnStatus("Sent");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setBtnStatus("Send Message");
      } else {
        setBtnStatus("Failed to send message");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setBtnStatus("Send Message");
      }
    } catch (err) {
      console.error("Failed to send email", err);
      setBtnStatus("Failed to send message");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setBtnStatus("Send Message");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="name">
          Name
        </label>
        <input
          required
          name="name"
          id="name"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="email">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        ></textarea>
      </div>
      {/* Turnstile renders here dynamically on client */}
      <div ref={turnstileRef} />

      <SubmitButton
        disabled={!verified}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        {btnStatus}
      </SubmitButton>
    </form>
  );
}

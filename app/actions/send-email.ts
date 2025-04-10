"use server"

import { Resend } from "resend"

// Use the API key directly in the v0 preview environment
const resendApiKey = "re_GtFqyW4m_AjFo1ASH1GSaSg8TpNwmtPtp"

const resend = new Resend(resendApiKey)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate the form data
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "Please fill in all fields",
    }
  }

  try {
    // In test mode, we can only send to the verified email (yaatoosaamaa@gmail.com)
    // In production with a verified domain, you would change this to shaheenkribaa@gmail.com
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "yaatoosaamaa@gmail.com", // The verified email associated with your Resend account
      subject: `Portfolio Contact: ${subject} (for shaheenkribaa@gmail.com)`,
      reply_to: email,
      text: `
This message was intended for: shaheenkribaa@gmail.com

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Note: This email was sent to you because you're the verified owner of the Resend account.
In production with a verified domain, this would be sent directly to shaheenkribaa@gmail.com.
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return {
        success: false,
        error: error.message,
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}

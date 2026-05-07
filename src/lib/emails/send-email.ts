import nodemailer from "nodemailer";

// import { ServerClient } from "postmark"

// const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!)

// export function sendEmail({
//   to,
//   subject,
//   html,
//   text,
// }: {
//   to: string
//   subject: string
//   html: string
//   text: string
// }) {
//   return postmarkClient.sendEmail({
//     From: process.env.POSTMARK_FROM_EMAIL!,
//     To: to,
//     Subject: subject,
//     HtmlBody: html,
//     TextBody: text,
//   })
// }

const smtpTransport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "admin@example.com",
    pass: "password",
  },
})

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false,
});

export function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html: string
  text: string
}) {
  return transporter.sendMail({
    from: "admin@example.com",
    to,
    subject,
    html,
    text,
  })
}

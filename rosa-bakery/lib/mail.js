import nodemailer from "nodemailer";

let transporter = null;

export async function sendMail({ subject, text, html }) {
  // 🔹 MODO TEST (sin SMTP_HOST) → usamos Ethereal
  if (!process.env.SMTP_HOST || process.env.SMTP_HOST === "") {
    if (!transporter) {
      const testAccount = await nodemailer.createTestAccount();

      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      console.log("Ethereal Test Account:");
      console.log("  User:", testAccount.user);
      console.log("  Pass:", testAccount.pass);
    }

    const info = await transporter.sendMail({
      from: '"Rosa Bäckerei (Test)" <test@rosaBäckerei.test>',
      to: "test@rosaBäckerei.test",
      subject,
      text,
      html,
    });

    console.log("Ethereal Preview URL:", nodemailer.getTestMessageUrl(info));
    return;
  }

  // 🔹 MODO PRODUCCIÓN (con SMTP real)
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
    html,
  });
}

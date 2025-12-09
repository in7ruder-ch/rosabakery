import { sendMail } from "../../../lib/mail";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const date = formData.get("date") || "";
    const occasion = formData.get("occasion") || "";
    const message = formData.get("message") || "";

    const subject = `Neue Kontaktanfrage über die Website von ${name || "unbekannt"}`;

    const text = `
Neue Kontaktanfrage über das Kontaktformular:

Name: ${name}
E-Mail: ${email}
Telefon / WhatsApp: ${phone}
Datum des Anlasses: ${date}
Anlass / Art der Anfrage: ${occasion}

Nachricht:
${message}
`.trim();

    const html = `
      <h2>Neue Kontaktanfrage über das Kontaktformular</h2>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>E-Mail:</strong> ${email || "-"}</p>
      <p><strong>Telefon / WhatsApp:</strong> ${phone || "-"}</p>
      <p><strong>Datum des Anlasses:</strong> ${date || "-"}</p>
      <p><strong>Anlass / Art der Anfrage:</strong> ${occasion || "-"}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    await sendMail({ subject, text, html });

    // redirige de vuelta a /kontakt con un flag de éxito
    return new Response(null, {
      status: 303,
      headers: {
        Location: "/kontakt?success=1",
      },
    });
  } catch (error) {
    console.error("Kontakt-API Fehler:", error);
    return new Response("Fehler beim Senden der Nachricht", { status: 500 });
  }
}

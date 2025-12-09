import { sendMail } from "../../../lib/mail";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // 1. Anlass & Tortenart
    const tortenart = formData.get("tortenart") || "";
    const occasion = formData.get("occasion") || "";
    const persons = formData.get("persons") || "";
    const shape = formData.get("shape") || "";

    // 2. Geschmack & Füllung & Toppings
    const baseFlavor = formData.get("baseFlavor") || "";
    const filling = formData.get("filling") || "";
    const diets = formData.getAll("diet");       // checkboxes
    const toppings = formData.getAll("toppings"); // checkboxes

    // 3. Design & Personalisierung
    const personalization = formData.get("personalization") || "";
    const cakeText = formData.get("cakeText") || "";
    const colors = formData.get("colors") || "";
    const reference = formData.get("reference") || "";

    // 4. Anlass & Rahmen
    const date = formData.get("date") || "";
    const location = formData.get("location") || "";
    const budget = formData.get("budget") || "";

    // 5. Kontaktdaten
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const notes = formData.get("notes") || "";

    const subject = `Neue Torten-Anfrage (${tortenart || "Torte"}) von ${name || "unbekannt"}`;

    const text = `
Neue Torten-Anfrage über das Bestellen-Formular:

[1] Anlass & Tortenart
- Tortenart: ${tortenart}
- Anlass: ${occasion}
- Personen: ${persons}
- Form: ${shape}

[2] Geschmack & Füllung & Topping
- Basisgeschmack: ${baseFlavor}
- Füllung: ${filling}
- Besondere Wünsche / Ernährung: ${diets.join(", ") || "-"}
- Toppings: ${toppings.join(", ") || "-"}

[3] Design & Personalisierung
- Personalisierungs-Level: ${personalization}
- Text auf der Torte: ${cakeText || "-"}
- Farben / Stil: ${colors || "-"}
- Inspirationsbilder / Referenzen: ${reference || "-"}

[4] Anlass & Rahmen
- Datum des Anlasses: ${date || "-"}
- Ort / Abholung / Lieferung: ${location || "-"}
- Budget-Rahmen: ${budget || "-"}

[5] Kontaktdaten
- Name: ${name}
- E-Mail: ${email}
- Telefon / WhatsApp: ${phone || "-"}

Zusätzliche Hinweise:
${notes || "-"}
`.trim();

    const html = `
      <h2>Neue Torten-Anfrage über das Bestellen-Formular</h2>

      <h3>[1] Anlass &amp; Tortenart</h3>
      <p><strong>Tortenart:</strong> ${tortenart || "-"}</p>
      <p><strong>Anlass:</strong> ${occasion || "-"}</p>
      <p><strong>Personen:</strong> ${persons || "-"}</p>
      <p><strong>Form:</strong> ${shape || "-"}</p>

      <h3>[2] Geschmack &amp; Füllung &amp; Topping</h3>
      <p><strong>Basisgeschmack:</strong> ${baseFlavor || "-"}</p>
      <p><strong>Füllung:</strong> ${filling || "-"}</p>
      <p><strong>Besondere Wünsche / Ernährung:</strong> ${
        diets.length ? diets.join(", ") : "-"
      }</p>
      <p><strong>Toppings:</strong> ${
        toppings.length ? toppings.join(", ") : "-"
      }</p>

      <h3>[3] Design &amp; Personalisierung</h3>
      <p><strong>Personalisierungs-Level:</strong> ${personalization || "-"}</p>
      <p><strong>Text auf der Torte:</strong> ${cakeText || "-"}</p>
      <p><strong>Farben / Stil:</strong> ${colors || "-"}</p>
      <p><strong>Inspirationsbilder / Referenzen:</strong><br/>${
        (reference || "").replace(/\n/g, "<br/>") || "-"
      }</p>

      <h3>[4] Anlass &amp; Rahmen</h3>
      <p><strong>Datum des Anlasses:</strong> ${date || "-"}</p>
      <p><strong>Ort / Abholung / Lieferung:</strong> ${location || "-"}</p>
      <p><strong>Budget-Rahmen:</strong> ${budget || "-"}</p>

      <h3>[5] Kontaktdaten</h3>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>E-Mail:</strong> ${email || "-"}</p>
      <p><strong>Telefon / WhatsApp:</strong> ${phone || "-"}</p>

      <h3>Zusätzliche Hinweise</h3>
      <p>${(notes || "-").replace(/\n/g, "<br/>")}</p>
    `;

    await sendMail({ subject, text, html });

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/bestellen?success=1",
      },
    });
  } catch (error) {
    console.error("Bestellen-API Fehler:", error);
    return new Response("Fehler beim Senden der Anfrage", { status: 500 });
  }
}

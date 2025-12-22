import { sendMail } from "../../../lib/mail";

const EXTRA_LABELS = {
  "fresh-strawberry": "Frische Erdbeeren",
  "fresh-raspberry": "Frische Himbeeren",
  raffaello: "Raffaello",
  nuts: "Nüsse",
  nutella: "Nutella",
  "lotus-biscoff": "Lotus Biscoff",
};

const SPONGE_LABELS = {
  choco: "Schoko",
  vanilla: "Vanille",
  "red-velvet": "Red Velvet",
  lemon: "Zitrone",
  cinnamon: "Zimt",
};

const FILLING_LABELS = {
  "strawberry-no-fresh": "Erdbeere (ohne frische Erdbeeren)",
  vanilla: "Vanille",
  oreo: "Oreo",
  "cream-cheese": "Cream Cheese",
  coconut: "Kokos",
  chocolate: "Schokolade",
  banana: "Banane",
};

const SHAPE_LABELS = {
  circle: "Rund",
  rectangle: "Rechteckig",
  heart: "Herz",
  square: "Quadratisch",
  other: "Andere (Details in Hinweise)",
};

function nl2brSafe(value) {
  return String(value || "-").replace(/\n/g, "<br/>");
}

function labelFrom(map, value) {
  if (!value) return "-";
  return map[value] ?? value;
}

function parseExtrasCSV(csv) {
  const raw = String(csv || "").trim();
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    // 1) Anlass & Tortenart (se mantiene)
    const tortenart = formData.get("tortenart") || "";
    const occasion = formData.get("occasion") || "";

    // 2) Cake size: NUEVO
    const servings = formData.get("servings") || "";

    // 3) Flavours UI: NUEVOS (con fallback por si queda algo viejo)
    const spongeId =
      formData.get("sponge_flavour") ||
      formData.get("sponge") || // fallback
      "";

    const fillingId =
      formData.get("filling_flavour") ||
      formData.get("filling") || // fallback (viejo select)
      "";

    const shapeId =
      formData.get("cake_shape") ||
      formData.get("shape") || // fallback (viejo select)
      "";

    const extrasCSV = formData.get("extras") || "";
    const extrasIds = parseExtrasCSV(extrasCSV);

    // 4) Special instructions: NUEVO
    const specialInstructions = formData.get("specialInstructions") || "";

    // 5) Contact details: NUEVO
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const instagram = formData.get("instagram") || "";
    const dateTime = formData.get("dateTime") || "";

    // --- Compatibilidad con campos anteriores (si aún existen en alguna versión)
    const persons = formData.get("persons") || ""; // viejo
    const baseFlavor = formData.get("baseFlavor") || ""; // viejo
    const diets = formData.getAll("diet"); // viejo
    const toppings = formData.getAll("toppings"); // viejo

    // Labels para mail (alemán)
    const spongeLabel = labelFrom(SPONGE_LABELS, spongeId);
    const fillingLabel = labelFrom(FILLING_LABELS, fillingId);
    const shapeLabel = labelFrom(SHAPE_LABELS, shapeId);

    const extrasLabels = extrasIds.length
      ? extrasIds.map((id) => EXTRA_LABELS[id] ?? id)
      : [];

    const subject = `Neue Anfrage (${tortenart || "Torte"}) von ${name || "unbekannt"}`;

    const text = `
Neue Anfrage über das Bestellen-Formular:

[1] Anlass & Tortenart
- Tortenart: ${tortenart || "-"}
- Anlass: ${occasion || "-"}

[2] Tortengrösse
- Anzahl Portionen: ${servings || (persons ? `${persons} (alt)` : "-")}

[3] Geschmack / Auswahl
- Teig (Sponge): ${spongeLabel}
- Füllung: ${fillingLabel}
- Tortenform: ${shapeLabel}
- Extras (Aufpreis möglich): ${extrasLabels.join(", ") || "-"}

[4] Spezielle Hinweise
${specialInstructions || "-"}

[5] Kontaktdaten
- Name: ${name || "-"}
- E-Mail: ${email || "-"}
- Telefon: ${phone || "-"}
- Instagram: ${instagram || "-"}
- Datum & Uhrzeit: ${dateTime || "-"}

(Alt-Felder, falls vorhanden)
- Basisgeschmack (alt): ${baseFlavor || "-"}
- Ernährung (alt): ${diets.join(", ") || "-"}
- Toppings (alt): ${toppings.join(", ") || "-"}
`.trim();

    const html = `
      <h2>Neue Anfrage über das Bestellen-Formular</h2>

      <h3>[1] Anlass &amp; Tortenart</h3>
      <p><strong>Tortenart:</strong> ${tortenart || "-"}</p>
      <p><strong>Anlass:</strong> ${nl2brSafe(occasion)}</p>

      <h3>[2] Tortengrösse</h3>
      <p><strong>Anzahl Portionen:</strong> ${
        servings || (persons ? `${persons} <em>(alt)</em>` : "-")
      }</p>

      <h3>[3] Geschmack / Auswahl</h3>
      <p><strong>Teig (Sponge):</strong> ${spongeLabel}</p>
      <p><strong>Füllung:</strong> ${fillingLabel}</p>
      <p><strong>Tortenform:</strong> ${shapeLabel}</p>
      <p><strong>Extras (Aufpreis möglich):</strong> ${
        extrasLabels.length ? extrasLabels.join(", ") : "-"
      }</p>

      <h3>[4] Spezielle Hinweise</h3>
      <p>${nl2brSafe(specialInstructions)}</p>

      <h3>[5] Kontaktdaten</h3>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>E-Mail:</strong> ${email || "-"}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      <p><strong>Instagram:</strong> ${instagram || "-"}</p>
      <p><strong>Datum &amp; Uhrzeit:</strong> ${dateTime || "-"}</p>

      <hr/>
      <h3 style="margin-top:16px;">Alt-Felder (falls vorhanden)</h3>
      <p><strong>Basisgeschmack (alt):</strong> ${baseFlavor || "-"}</p>
      <p><strong>Ernährung (alt):</strong> ${diets.length ? diets.join(", ") : "-"}</p>
      <p><strong>Toppings (alt):</strong> ${toppings.length ? toppings.join(", ") : "-"}</p>
    `;

    await sendMail({ subject, text, html });

    return new Response(null, {
      status: 303,
      headers: { Location: "/bestellen?success=1" },
    });
  } catch (error) {
    console.error("Bestellen-API Fehler:", error);
    return new Response("Fehler beim Senden der Anfrage", { status: 500 });
  }
}

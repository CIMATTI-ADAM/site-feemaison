import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "feemaison.lannion@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Anti-spam: honeypot field must be empty
    if (body.website) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate required fields
    const required = ["nom", "telephone", "email", "typeDemande", "dateSouhaitee", "nombrePersonnes", "lieu"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return new Response(
          JSON.stringify({ error: `Le champ ${field} est obligatoire.` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Format d'e-mail invalide." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Store in Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      nom: body.nom,
      prenom: body.prenom || null,
      telephone: body.telephone,
      email: body.email,
      type_demande: body.typeDemande,
      sous_type: body.sousType || null,
      date_souhaitee: body.dateSouhaitee,
      nombre_personnes: parseInt(body.nombrePersonnes, 10),
      lieu: body.lieu,
      message: body.message || null,
      recipient_email: RECIPIENT_EMAIL,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Une erreur est survenue lors de l'enregistrement." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Build email content
    const emailSubject = `Nouvelle demande de contact — Fée Maison — ${body.typeDemande}`;
    const emailBody = [
      `Nouvelle demande de contact reçue sur le site Fée Maison`,
      ``,
      `Nom: ${body.nom}`,
      `Prénom: ${body.prenom || "non renseigné"}`,
      `Téléphone: ${body.telephone}`,
      `E-mail: ${body.email}`,
      `Type de demande: ${body.typeDemande}`,
      body.sousType ? `Sous-type: ${body.sousType}` : "",
      `Date souhaitée: ${body.dateSouhaitee}`,
      `Nombre de personnes: ${body.nombrePersonnes}`,
      `Lieu: ${body.lieu}`,
      ``,
      `Message:`,
      body.message || "(aucun message)",
      ``,
      `---`,
      `Envoyé depuis le formulaire de contact du site feemaison.fr`,
    ].filter(Boolean).join("\n");

    // Store email log for later sending via email service
    // (Resend, EmailJS, etc. can be configured as a next step)
    const { error: emailLogError } = await supabase.from("email_queue").insert({
      to_email: RECIPIENT_EMAIL,
      subject: emailSubject,
      body: emailBody,
      status: "pending",
    });

    if (emailLogError) {
      console.error("Email queue error:", emailLogError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message envoyé avec succès." }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Une erreur inattendue est survenue." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

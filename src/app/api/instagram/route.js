export async function GET(req) {
    const token = process.env.INSTAGRAM_TOKEN;
    const instagramUserId = process.env.INSTAGRAM_USER_ID; // tu le mets en variable env

    if (!token || !instagramUserId) {
        return new Response(JSON.stringify({ error: "Token ou User ID manquant" }), { status: 400 });
    }

    const url = `https://graph.facebook.com/v22.0/${instagramUserId}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}&limit=6`;
    console.log("URL de la requête Instagram :", url); // Debugging
    console.log("Token Instagram :", token); // Debugging
    console.log("ID utilisateur Instagram :", instagramUserId);
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            return new Response(JSON.stringify({ error: "Erreur API Instagram", details: errorText }), { status: response.status });
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erreur serveur", details: error.message }), { status: 500 });
    }
}

export async function GET(req) {
	const token = process.env.INSTAGRAM_TOKEN;
	const instagramUserId = process.env.INSTAGRAM_USER_ID;

	if (!token || !instagramUserId) {
		return new Response(JSON.stringify({ error: 'Token ou User ID manquant' }), { status: 400 });
	}

	const url = `https://graph.facebook.com/v22.0/${instagramUserId}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}&limit=6`;
	try {
		const response = await fetch(url);

		if (!response.ok) {
			const errorText = await response.text();
			return new Response(JSON.stringify({ error: 'Erreur API Instagram', details: errorText }), { status: response.status });
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Erreur serveur', details: error.message }), { status: 500 });
	}
}

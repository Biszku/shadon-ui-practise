export async function GET(request: Request) {
  console.log(1);
  const res = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return Response.json({ data });
}

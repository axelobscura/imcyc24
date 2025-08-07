import { NextResponse } from "next/server";
import { query } from '../../../../lib/db';

export async function GET(request: Request) {
  const params = request.url.split('?')[1];
  const elEmail = params.split('&')[0].split('=')[1];
  const elPwd = params.split('&')[1].split('=')[1];
  console.log("Email: "+elEmail+" pw: "+elPwd);
  try {
    const results = await query(`SELECT * FROM usuarios WHERE email=${elEmail} AND password=${elPwd}`) as { email: string; password: string; }[];
    console.log("Query results:", results);
    return NextResponse.json(results);
  } catch (e: unknown) {
    console.error('Database query error:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
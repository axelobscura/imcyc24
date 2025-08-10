// pages/api/users.js
import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const connectionConfig = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
};

export async function GET() {
  let connection;
  
  try {
    connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute('SELECT * FROM categorias');
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
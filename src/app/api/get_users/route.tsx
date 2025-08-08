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
    const [rows] = await connection.execute('SELECT * FROM usuarios');
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

export async function POST(request: NextRequest) {
  let connection;
  
  try {
    connection = await mysql.createConnection(connectionConfig);
    const { name, email } = await request.json();
    
    await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)', 
      [name, email]
    );
    
    return NextResponse.json(
      { message: 'User created' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

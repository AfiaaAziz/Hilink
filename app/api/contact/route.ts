// app/api/contact/route.ts (SAHI CODE)

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // YAHAN PAR BADLAV HAI: Hum ab SERVICE_ROLE_KEY use kar rahe hain
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // <-- SAHI KEY
    );

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select();
    
    if (error) {
      console.error('Supabase Insert Error:', error.message);
      return NextResponse.json({ error: 'Failed to save the message.' }, { status: 500 });
    }
    
    return NextResponse.json({ message: 'Message sent successfully!', data });

  } catch (err: any) {
    console.error('API Route Error:', err.message);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
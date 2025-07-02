import { NextResponse } from 'next/server';
import { auth, connectDB } from '@/lib/auth'; // Using configured auth from the web app
import { Contact } from '@repo/crm'; // Using the new CRM package

// GET handler to fetch the user's contact info
export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  await connectDB();

  try {
    const contact = await Contact.findOne({ user: session.user.id });

    // It's not an error if they don't have a contact profile yet
    if (!contact) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json({ message: 'Error fetching contact' }, { status: 500 });
  }
}


// POST handler to create or update the user's contact info (upsert)
export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  await connectDB();

  try {
    const body = await req.json();

    // Use findOneAndUpdate with upsert:true to either create or update the contact
    const updatedContact = await Contact.findOneAndUpdate(
      { user: session.user.id }, // find a document with this filter
      { $set: body }, // update it with the request body
      { new: true, upsert: true, setDefaultsOnInsert: true } // options: return new doc, create if none found, set defaults on creation
    );

    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error) {
    console.error('Error creating/updating contact:', error);
    return NextResponse.json({ message: 'Error creating/updating contact' }, { status: 500 });
  }
}

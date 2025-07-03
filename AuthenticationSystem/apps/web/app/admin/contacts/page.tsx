import { connectDB } from '@repo/auth';
import ContactMessage, { IContactMessage } from '@repo/cms/src/models/ContactMessage';

async function getContactMessages() {
  await connectDB(process.env.MONGODB_URI!);
  const messages = await ContactMessage.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(messages));
}

export default async function ContactsPage() {
  const messages: IContactMessage[] = await getContactMessages();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Contact Messages</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Name & Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Interest Area
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Received
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{message.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-no-wrap">{message.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{message.message}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{message.interestArea || 'N/A'}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-500">
                    No contact messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { connectDB } from '@repo/auth';
import ServiceInquiry, { IServiceInquiry } from '@repo/cms/src/models/ServiceInquiry';

async function getInquiries() {
  await connectDB(process.env.MONGODB_URI!);
  const inquiries = await ServiceInquiry.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(inquiries));
}

export default async function InquiriesPage() {
  const inquiries: IServiceInquiry[] = await getInquiries();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Service Inquiries</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Email & Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Received
                </th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{inquiry.fullName}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{inquiry.email}</p>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-no-wrap">{inquiry.phone}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">{inquiry.destination}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm">
                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-500">
                    No service inquiries found.
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

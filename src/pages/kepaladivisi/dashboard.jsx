

export default function DashboardKd() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <table class="table-auto border-collapse border border-gray-300 w-full mt-9">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2">Nama Anggota Divisi</th>
            <th class="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-4 py-2">John Doe</td>
            <td class="border border-gray-300 px-4 py-2 flex justify-center gap-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
                Edit
              </button>
              <button class="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Jane Smith</td>
            <td class="border border-gray-300 px-4 py-2 flex justify-center gap-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
                Edit
              </button>
              <button class="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

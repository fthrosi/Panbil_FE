export const handlePrint = (type, data) => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Isi konten iframe
  const printContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cetak ${type === "cuti" ? "Cuti" : "Izin"}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .content {
            margin-bottom: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          td {
            padding: 8px;
          }
          .signature {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .signature-box {
            text-align: center;
            width: 200px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>SURAT ${type === "cuti" ? "CUTI" : "IZIN"}</h2>
        </div>
        <div class="content">
          <table>
            <tr>
              <td>Nama</td>
              <td>: ${data.karyawan.Nama_depan} ${
    data.karyawan.Nama_belakang
  }</td>
            </tr>
            <tr>
              <td>Divisi</td>
              <td>: ${data.karyawan.divisi.Nama}</td>
            </tr>
            <tr>
              <td>Tanggal Pengajuan</td>
              <td>: ${data.tanggal_pengajuan}</td>
            </tr>
            ${
              type === "cuti"
                ? `
            <tr>
              <td>Tujuan Cuti</td>
              <td>: ${data.detail_pengajuan.tujuan_cuti}</td>
            </tr>
            <tr>
              <td>Tanggal Mulai</td>
              <td>: ${data.detail_pengajuan.tanggal_mulai}</td>
            </tr>
            <tr>
              <td>Tanggal Selesai</td>
              <td>: ${data.detail_pengajuan.tanggal_selesai}</td>
            </tr>
            <tr>
              <td>Jumlah Hari</td>
              <td>: ${data.detail_pengajuan.jumlah} Hari</td>
            </tr>
            `
                : `
            <tr>
              <td>Tanggal Izin</td>
              <td>: ${data.detail_pengajuan.tanggal}</td>
            </tr>
            <tr>
              <td>Waktu</td>
              <td>: ${data.detail_pengajuan.waktu_mulai} - ${data.detail_pengajuan.waktu_selesai}</td>
            </tr>
            <tr>
              <td>Alasan</td>
              <td>: ${data.detail_pengajuan.alasan_izin}</td>
            </tr>
            <tr>
              <td>Deskripsi</td>
              <td>: ${data.detail_pengajuan.deskripsi}</td>
            </tr>
            `
            }
            <tr>
              <td>Status</td>
              <td>: ${data.status}</td>
            </tr>
          </table>
        </div>
        
        <div class="signature">
          <div class="signature-box">
            <p>Pemohon</p>
            <br/><br/><br/>
            <p>${data.karyawan.Nama_depan} ${data.karyawan.Nama_belakang}</p>
          </div>
          <div class="signature-box">
            <p>Menyetujui</p>
            <br/><br/><br/>
            <p>HR Manager</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Set konten iframe
  iframe.contentWindow.document.write(printContent);
  iframe.contentWindow.document.close();

  // Tunggu iframe selesai load
  iframe.onload = () => {
    // Cetak
    iframe.contentWindow.print();

    // Hapus iframe setelah selesai
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 500);
  };
};

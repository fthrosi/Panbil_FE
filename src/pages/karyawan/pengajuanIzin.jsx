import FormPengajuanIzin from "../../component/form/pengajuanIzin";
export default function PengajuanIzin() {
  return (
    <div className="lg:pl-64 py-4 px-2 md:px-4 ">
      <div className="lg:p-6 p-2 md:p-4">
        <h1 className="lg:text-3xl text-xl md:text-2xl font-bold">
          Pengajuan Izin
        </h1>
        <FormPengajuanIzin />
      </div>
    </div>
  );
}

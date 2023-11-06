import Card from "./card";
import CardGallery from "./card-gallery";
export const About = () => {
  return (
    <>
      <div id="about" className="w-9/12 mx-auto p-24">
        <p className="text-4xl font-bold text-gray-900 text-center italic m-5">
          Sekilas Tentang Magang Kami
        </p>
        <p className="text-center italic text-xl">
          Bagi kamu lulusan SMA/SMK ataupun diploma, program magang ini adalah
          pilihan yang tepat. Kamu akan mendapatkan pengetahuan mengenai dunia
          perbankan, pengalaman kerja, serta bimbingan dari rekan kerja dan
          atasan kamu.
          <br /> <br /> Di program ini, kamu akan mendapatkan pengalaman di
          bidang operasional perbankan dan ilmu lainnya yang akan mendorong kamu
          untuk menjadi seorang yang profesional. Bagi kamu yang tertarik untuk
          menjadi bagian dari Magang Bakti, tersedia dua posisi, yaitu Customer
          Service dan Teller. Jadilah bagian dari kami untuk menggapai impianmu!
        </p>
      </div>
    </>
  );
};

export const Program = () => {
  return (
    <>
      <div id="program" className="w-9/12 mx-auto p-24">
        <p className="text-4xl font-bold text-gray-900 text-center italic m-5">
          Program Magang
        </p>
        <div className="flex justify-center flex-col items-center m-5">
          <Card />
        </div>
      </div>
    </>
  );
};

export const Gallery = () => {
  return (
    <>
      <div id="program" className="w-9/12 mx-auto p-24">
        <p className="text-4xl font-bold text-gray-900 text-center italic m-5">
          Gallery
        </p>
        <p className="text-center italic text-xl">Kegiatan magang kami dengan pelatihan intens dan teknologi tinggi untuk memberikan pelayanan terbaik kami, bersama dengan negeri membangun masa depan untuk maju dan jaya selamanya. </p>
        <div className="flex justify-center flex-col items-center m-5">
          <CardGallery />
        </div>
      </div>
    </>
  );
}
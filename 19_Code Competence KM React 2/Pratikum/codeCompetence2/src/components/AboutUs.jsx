import bisnis from './../assets/about/bisnis.png'
import double from './../assets/about/double.png'
import flexible from './../assets/about/flexible.png'
import pickup from './../assets/about/pickup.png'
import refund from './../assets/about/refund.png'
import sms from './../assets/about/sms.png'
import timbangan from './../assets/about/timbangan.png'
import timer from './../assets/about/timer.png'
import truck from './../assets/about/truck.png'
import delivery from './../assets/about/delivery.jpg'
import './../style/style.css'


const AboutUs = () => {
  return (
    <>
      <section id="about" className="p-5 mt-3">
        <div className="container">
        <p className='text-center text-dark fw-semibold display-3'>About Us</p>
        <div className='img w-50 mx-auto'>
        <img src={delivery} alt='' className='w-100 my-3'/>
        </div>
        <p className='text-justify text-secondary mb-5'>Halo bersama kami Flash.ID kami siap untuk mengantarkan paket anda kemanapun dan dimanapun, kami memiliki komitmen serta kami jadikan sebagai motto kami `Dimana konsumen itu berada kami pasti akan selalu datang ke tempat anda` itu adalah motto kami dalam menjalankan kewajiban kami sebagai perusahaan pengantar paket. untuk membuat para anda bahagia kami selalu siap dalam memberikan pelayanan yang terbaik.</p>
          <h1 className="title-text text-center text-dark">Kenapa Flash.ID?</h1>
          <p className="lead text-center">
          Flash berkomitmen menjadi partner terpercaya di seluruh Indonesia.
            Inilah 9 alasan tepat untuk memilih Flash
          </p>
          {/* Sliders */}
          <div className="container">
            <div className="row">
              <div className="w-100">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* 1 */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-center">
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={sms} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            SMS Resi
                          </div>
                          <div className="lead text-center">
                            Pengiriman nomor resi melalui sms langsung ke
                            penerima
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={truck} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Tercepat
                          </div>
                          <div className="lead text-center">
                            Layanan Reguler hanya dalam waktu maks 2 hari
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={double} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Paket Double
                          </div>
                          <div className="lead text-center">
                            Tidak ada pengiriman paket yang double karena selalu
                            terdeteksi
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={timer} alt="icon" />
                          </div>
                          <div className="card-body text-center font-weight-bold">
                            14 Jam Pengiriman
                          </div>
                          <div className="lead text-center">
                            Program pengiriman subscribe yang kurang dari 14 jam
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={pickup} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Penjemputan Paket
                          </div>
                          <div className="lead text-center">
                            Pengambilan Paket dengan minimal berat 10 kg atau 5
                            paket 2 kg
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={timbangan} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Timbangan Akurat
                          </div>
                          <div className="lead text-center">
                            Berat akurat yang sesuai dengan timbangan pertama
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={bisnis} alt="icon" />
                          </div>
                          <div className="card-body text-center font-weight-bold">
                            Kerjasama Saling Untung
                          </div>
                          <div className="lead text-center">
                            Kami bertanggungjawab dalam menjaga masalah
                            pengiriman paket dari olshop
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={flexible} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Pembayaran Flexible
                          </div>
                          <div className="lead text-center">
                            Pembayaran H+1 dengan tagihan yang jelas
                          </div>
                        </div>
                        <div className="col-3 card m-2">
                          <div className="icon text-center">
                            <img src={refund} alt="icon" />
                          </div>
                          <div className="card-body font-weight-bold text-center">
                            Layanan Ganti Rugi
                          </div>
                          <div className="lead text-center">
                            Penggantian baarng 1kg maksimal
                            Rp500.0000,-(Maksimal 5 kg = 2.500.000)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon text-dark"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

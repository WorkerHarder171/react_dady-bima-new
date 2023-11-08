#   Testing

merupakan suatu proses untuk melakukan verifikasi test assertion bahwa code yang kita buat itu benar sepanjang aplikasi di pakai. Test Assertion sendiri merupakan sebuah ekspresi boolean yang dimana digunakan untuk mengembalikan nilai true kecuali ada bug di kode kita.

#   Manfaat Testing
Apa saja manfaat dari testing? tenting memiliki banyak manfaat apalagi kita sebagai programmer contohnya:
- Mengidentifikasi kesalahan pada program sebelum digunakan.
- Merasa percaya diri karena memiliki coverage yang baik

# Kategori Testing
kategori dalam testing sendiri dibagi menjadi 2:
1. Rendering COmponent tress merupakan suatu enviroment test yang disederhanakan dan di fokuskan kepada keluarannya

2. Menjalankan aplikasi secara keseluruhan merupakan suatu test dimana kita menggunakan enviroment perambanan atau browser asli, jika di kenal sebagai end to end

dalam testing kita harus memilih sebuah perkakas atau framework, hal yang perlu di perhatikan adalah
1. Kecepatan iterasi dan enviroment yang realitas dalam beberapa perkakas yang ada beberapa menawarkan suatu feedback loop yang sangat cepat untuk membuat suatu perubahan dalam melihat suatu hasil, namun pada perkakas ini tidak memodelkan sifat dari perambanan dengan tepat, sehingga mengurangi kecepatan iterasi dan lebih flakier pada server interegasi berkelanjutan
2. Seberapa banyak mock yang harus kita buat, dengan menggunakan komponen ada beberapa perbedaan antara test unit dan tes integrasi bisa tidak sesuai

Lalu Framework mana yang recommended?
 untuk saran dari saya adalah Jest, framework ini merupakan test runner pada js yang mana memungkinkan anda untuk melakukan akses DOM melalui jsdom, sementara jsodm sendiri merupakan perkiraan cara kerja browser, seringkali jest ini cukup baik untuk mengetes komponen pada react. sehingga ject memberikan kecepatan iterasi yang bagus dimana di jest dikombinasikan dengan fitue-fitue yang powerfull seperti mocking moduls dan timer.


 Hasil Test React Testing
 ![Alt text](<Screenshots/image tets.jpg>)

 yang di atas ini merupakan hasil testing saya pada component CreateProduct.jsx disitu saya melakukan test apakah benar dari form yang sudah saya buat bisa melakukan get dengan benar di formnya dan terlihat bahwa yang ada diatas semua test mendapatkan passed
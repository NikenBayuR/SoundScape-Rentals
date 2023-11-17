const LandingViews = () => {
  return (
    <>
      {/* Cards */}
      <div className="flex flex-wrap justify-center mt-16">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://soundjakarta.com/wp-content/uploads/2022/09/20-2.png"
              alt="Nasi Goreng Kambing"
            />
          </div>
          <div className="px-6 py-4">
            <p className="font-bold text-center mb-2">Sewa Sound System</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="/cuisines/byId">
              <button
                type="submit"
                className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Show Detail
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://soundjakarta.com/wp-content/uploads/2022/09/21-2.png"
              alt="Nasi Goreng Kambing"
            />
          </div>
          <div className="px-6 py-4">
            <p className="font-bold text-center mb-2">Sewa Lighting</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="/cuisines/byId">
              <button
                type="submit"
                className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Show Detail
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* End Cards */}
      {/* FOTTER */}
      <footer className="fixed bottom-0 w-full shadow-lg">
      <div className="container mx-auto text-center">

        {/* Informasi Kontak */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Hubungi Kami</h2>
          <p>Email: support@soundscape.com</p>
          <p>Telepon: (123) 456-7890</p>
        </div>

        {/* Tautan Sosial Media */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Temui Kami di Sosial Media</h2>
          <div className="flex items-center justify-center">
            <a href="https://wa.me/625814201069?text=Halo%20SOUNDSCAPE-RENTALS" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/4406/4406170.png" alt="Whatsapp" className="w-6 h-6" />
            </a>
            {/* Halo Soundjakarta.. */}
            <a href="https://www.instagram.com/nikenbayu17/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src="https://seeklogo.com/images/I/instagram-logo-2D3332C00B-seeklogo.com.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-4">
          <p>&copy; 2023 Soundscape Rentals. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default LandingViews;

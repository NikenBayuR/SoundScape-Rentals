import React from 'react'

const FotterComponent = () => {
  return (
    <>
    {/* FOTTER */}
    <footer>
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
  )
}

export default FotterComponent
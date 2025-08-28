document.addEventListener("DOMContentLoaded", () => {
  const artistaData = [
    {
      name: "Henrique e Juliano",
      image: "./img/artista-henrique-juliano.jpg",
    },
    {
      name: "Jorge e Mateus",
      image: "./img/artista-jorge-mateus.jpg",
    },
    {
      name: "Ze Neto e Cristiano",
      image: "./img/artista-ze-neto.jpg",
    },
    {
      name: "Gustavo Limm",
      image: "./img/artista-gustavo-limma.jpg",
    },
    {
      name: "Luan Santana",
      image: "./img/artista-luan-santana.jpg",
    },
    {
      name: "Matheus e Kauan",
      image: "./img/artista-mateus-kauan.jpg",
    },
  ]

  const albumData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      image: "./img/album-white-noise.jpg",
      artist: "Sleep John",
    },
    {
      name: "O Ceu Explica Tudo (Ao Vivo)",
      image: "./img/album-ceu-explica.jpg",
      artist: "Henrique e Juliano",
    },
    {
      name: "Nada como o dia apos o outro",
      image: "./img/album-vida-loka.jpg",
      artist: "Racionais",
    },
    {
      name: "Hit ,e Hard and Soft",
      image: "./img/album-hit-me.jpg",
      artist: "Billie Eilish",
    },
    {
      name: "Caju",
      image: "./img/album-caju.jpg",
      artist: "Linker",
    },
    {
      name: "Escando intimo",
      image: "./img/album-escandalo.jpg",
      artist: "Luiza Souza",
    },
  ]

  // selecionado a div com a classe artists-grid
  const artistGrid = document.querySelector(".artists-grid")
  // selecionado a div com a classe album-grid
  const albumGrid = document.querySelector(".album-grid")

  /**
   * Aqui esta percorendo a array de objeto e gravando valor na variavel artist
   * criando uma variavel e indo procurar na dom e criando um elemento
   * pegando o elemento criado e adicionando uma class
   * depois que adicionamos a class estamos criando a estrutura do html usando o innerHTML
   * e depois mostando em tela com o appendChild
   */
  artistaData.forEach((artist) => {
    const artistCard = document.createElement("div")
    artistCard.classList.add("artist-card")
    artistCard.innerHTML = `
      <img src="${artist.image}" alt="${artist.name}" />
      <h3>${artist.name}</h3>
      <p>artista</p>
    `
    artistGrid.appendChild(artistCard)
  })

  albumData.forEach((album) => {
    const albumCard = document.createElement("div")
    albumCard.classList.add("album-card")

    albumCard.innerHTML = `
      <img src="${album.image}" alt="${album.artist}" />
      <h3>${album.name}</h3>
      <p>${album.artist}</p>
    
    `

    albumGrid.appendChild(albumCard)
  })
})

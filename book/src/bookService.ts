const books = [
  // J.K Rowling
  { isbn: '9781408855898', title: "Harry Potter and the Sorcerer's Stone", description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg", authorId: 1},
  { isbn: '9780439064866', title: "Harry Potter and the Chamber of Secrets", description: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg", authorId: 1},
  { isbn: '9780439655484', title: "Harry Potter and the Prisoner of Azkaban", description: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",  authorId: 1},
  { isbn: '9780439837261', title: "Harry Potter and the Goblet of Fire", description: "Harry Potter is midway through his training as a wizard and his coming of age. ", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6.jpg",  authorId: 1},
  { isbn: '9780439358071', title: "Harry Potter and the Order of the Phoenix", description: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",  authorId: 1},
  { isbn: '9780438437347', title: "Harry Potter and the Half-Blood Prince", description: "The war against Voldemort is not going well; even Muggle governments are noticing.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg",  authorId: 1},
  { isbn: '9780493284893', title: "Harry Potter and the Deathly Hallows", description: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg",  authorId: 1},

  // Jules Verne
  { isbn: '9781421820606', title: "Five Weeks in a Balloon", description: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347375248i/1219103._SY75_.jpg",  authorId: 2},
  { isbn: '9780192804655', title: "The Adventures of Captain Hatteras", description: "Here is the first new translation of ever-popular adventure writer Jules Verne's thrilling novel of polar exploration in over a century. ", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172270825i/158247._SY75_.jpg",  authorId: 2},
  { isbn: '9780553213973', title: "Journey to the Center of the Earth", description: "\"The reason Verne is still read by millions today is simply that he was one of the best storytellers who ever lived.\" — Arthur C. Clarke", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389754903i/32829._SY75_.jpg",  authorId: 2},
  { isbn: '9781598184549', title: "From the Earth to the Moon", description: "Verne's 1865 tale of a trip to the moon is (as you'd expect from Verne) great fun, even if bits of it now seem, in retrospect, a little strange.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389545038i/32827._SY75_.jpg",  authorId: 2},
  { isbn: '9780760728505', title: "Twenty Thousand Leagues Under the Sea", description: "When an unidentified “monster” threatens international shipping, French oceanographer Pierre Aronnax and his unflappable assistant Conseil join an expedition organized by the US Navy to hunt down and destroy the menace. ", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494979127i/33507._SX50_.jpg",  authorId: 2},

  // J.R.R Tolkien
  { isbn: '9780345015339', title: "The Fellowship of the Ring", description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkeness bind them\n", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486871542i/3263607._SY75_.jpg",  authorId: 3},
  { isbn: '9780345296061', title: "The Two Towers", description: "Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486871714i/222910._SY75_.jpg",  authorId: 3},
  { isbn: '9780345240347', title: "The Return of the King", description: "In the third volume of The Lord of the Rings trilogy the good and evil forces join battle, and we see that the triumph of good is not absolute.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574117762i/838729._SY75_.jpg",  authorId: 3},

  // Frank Herbert
  { isbn: '9780593099322', title: "Dune", description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458._SY75_.jpg",  authorId: 4},
  { isbn: '9780593098233', title: "Dune Messiah", description: "Dune Messiah continues the story of Paul Atreides, better known--and feared--as the man christened Muad'Dib. As Emperor of the Known Universe, he possesses more power than a single man was ever meant to wield.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577043824i/44492285._SY75_.jpg",  authorId: 4},
  { isbn: '9780593098240', title: "Children of Dune", description: "The Children of Dune are twin siblings Leto and Ghanima Atreides, whose father, the Emperor Paul Muad'Dib, disappeared in the desert wastelands of Arrakis nine years ago. ", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564783201i/44492286._SY75_.jpg",  authorId: 4},

  // Becky Chambers
  { isbn: '9781500453305', title: "The Long Way to a Small, Angry Planet", description: "Follow a motley crew on an exciting journey through space-and one adventurous young explorer who discovers the meaning of family in the far reaches of the universe-in this light-hearted debut space opera from a rising sci-fi star.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405532474i/22733729._SY75_.jpg",  authorId: 5},
  { isbn: '9781473621442', title: "A Closed and Common Orbit", description: "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. ", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405532474i/22733729._SY75_.jpg",  authorId: 5},
  { isbn: '9781473647602', title: "Record of a Spaceborn Few", description: "Centuries after the last humans left Earth, the Exodus Fleet is a living relic, a place many are from but few outsiders have seen.", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516965190i/32802595._SY75_.jpg",  authorId: 5},

]

export const getBooksByAuthorId = (id: number) => {
  return books.filter(book => book.authorId === id)
}

export const getBooks = (offset: number, limit: number) => {
  return books.slice(offset, limit)
}


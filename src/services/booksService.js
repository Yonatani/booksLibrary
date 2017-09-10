import axios from 'axios';

const books = [
  {
    id: 1,
    author: 'Bob Ha-Banai',
    date: new Date(),
    title: 'How to build a tall tower',
    coverUrl: 'http://www.ldi.co.il/media/catalog/category/BTB_jpg.jpg'
  },
  {
    id: 2,
    author: 'Spiderman',
    date: new Date(),
    title: 'Strings of iron',
    coverUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_ccc4b657.jpeg'
  },
  {
    id: 3,
    author: 'Batman',
    date: new Date(),
    title: 'Bat-mobile 101',
    coverUrl: 'https://images.alphacoders.com/371/thumb-1920-371.jpg'
  },
  {
    id: 4,
    author: 'Superman',
    date: new Date(),
    title: 'kryptonite recipes',
    coverUrl: 'http://cdn.playbuzz.com/cdn/62530326-1b72-4685-b59b-85bae109fa36/5f076c45-61b6-469f-ab63-cd2f0be7db26.jpg'
  },
  {
    id: 5,
    author: 'The Hulk',
    date: new Date(),
    title: 'Green is the new Black',
    coverUrl: 'https://static.comicvine.com/uploads/original/8/80111/2797109-hulk_marvel_4.jpg'
  },
  {
    id: 6,
    author: 'The Flash',
    date: new Date(),
    title: 'A turtles life',
    coverUrl: 'http://www.cbr.com/wp-content/uploads/2017/01/the-flash-barry-allen-cw.jpg'
  },
];

class BooksService {
   static getBooks = () => {
      return axios({
      method: 'GET',
      url:'https://www.reddit.com/r/pics.json', //just some reddit data
    })
      .then((response) => {
        console.log('this is the response from reddit, but no need for that', response);
        return books;
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  };
}


export default BooksService;





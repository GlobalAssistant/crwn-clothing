import Directory from './components/directory/directory.component';


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'http://i.ibb.co/R70vBrQ/men.png',
    }
  ]

  return (
    <Directory categories={ categories } />
  );
}

export default App;

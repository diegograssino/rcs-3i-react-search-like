import { useState } from 'react';
import './App.css';

const USERS = [
  {
    id: 1,
    username: 'johnjones',
  },
  {
    id: 2,
    username: 'ryanray',
  },
  {
    id: 3,
    username: 'robbieroberts',
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'Roberto',
    likes: ['johnjones'],
  },
  {
    id: 2,
    title: 'maria',
    likes: ['robbieroberts'],
  },
  {
    id: 3,
    title: 'roinaldo',
    likes: [
      'robbieroberts',
      'johnjones',
      'ryanray',
    ],
  },
];

const auth = {
  username: 'ryanray',
};

function App() {
  const [search, setSearch] = useState('');

  const handleInput = v => {
    setSearch(v);
  };

  const handleLike = (user, list) => {
    const alreadyLiked = list.find(
      l => l === user
    );

    if (!alreadyLiked) {
      console.log('Sumo el like');
    }
  };

  return (
    <div className="App">
      <input
        onInput={e => handleInput(e.target.value)}
      ></input>
      {PRODUCTS.filter(product =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      ).map((product, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() =>
              handleLike(
                auth.username,
                product.likes
              )
            }
            disabled={product.likes.find(
              p => p === auth.username
            )}
          >
            👍({product.likes.length})
          </button>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;

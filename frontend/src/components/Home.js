import React, { useEffect, useState } from 'react';

function Home() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch and set the list of distributor shops here
    // You can use the fetch API, Axios, or any other method
    // Example:
    // fetch('/api/shops')
    //   .then((response) => response.json())
    //   .then((data) => setShops(data))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Distributor Shops</h2>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            <a href={`/shop/${shop.id}`}>{shop.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
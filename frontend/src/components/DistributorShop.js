import React from 'react';
import { useParams } from 'react-router-dom';

function DistributorShop() {
  const { shopId } = useParams();

  return (
    <div>
      <h2>Shop {shopId}</h2>
      {/* You can fetch and display EPD data here based on the shopId */}
    </div>
  );
}

export default DistributorShop;
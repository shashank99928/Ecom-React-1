import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div>
  
    <div style={{ backgroundImage:`url(${imageUrl})`}} />
    <p key={id}>{name} </p>
    <span>{price}</span>
  </div>
);

export default CollectionItem;

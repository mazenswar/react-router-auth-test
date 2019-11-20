import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
  return (
    <Link to={`/characters/${data.id}`}>
      <div className="card">
        <img src={data.image} />
        <h2>{data.name}</h2>
      </div>
    </Link>
  );
}

import { useSelector } from 'react-redux';
import Header from '../Header';

const Parts = () => {
  const parts = useSelector((state) => state.parts.parts);
  const partsCount = useSelector((state) => state.parts.count);

  return (
    <div className="parts-page details-page">
      <Header title="Parts/Items" />
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>PARTS</h2>
        <p>{partsCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {parts.map((part) => (
          <li key={`${part.ManufacturerId} + ${part.Name}`}>
            {part.Name}
            <div className="more">
              <p>{part.ManufacturerId}</p>
              <i className="fa-regular fa-circle-right" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;

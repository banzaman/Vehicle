import { useSelector } from 'react-redux';
import Header from '../Header';

const Makes = () => {
  const makes = useSelector((state) => state.makes.makes);
  const makesCount = useSelector((state) => state.makes.count);

  return (
    <div className="makes-page details-page">
      <Header title="Makes/Items" />
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>MAKES</h2>
        <p>{makesCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {makes.map((maker) => (
          <li key={maker.Make_ID}>
            {maker.Make_Name}
            <div className="more">
              <p>{maker.Make_ID}</p>
              <i className="fa-regular fa-circle-right" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Makes;

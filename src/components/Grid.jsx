import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCars } from '../redux/carsSlice';
import { fetchMakes } from '../redux/makesSlice';
import { fetchManufacturers } from '../redux/manufacturersSlice';
import { fetchMotos } from '../redux/motosSlice';
import { fetchParts } from '../redux/partsSlice';
import { fetchTrucks } from '../redux/trucksSlice';
import Header from './Header';

const Grid = () => {
  // Importing methods from libraries
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  // Categories' states selectors
  const makes = useSelector((state) => state.makes.makes);
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);
  const parts = useSelector((state) => state.parts.parts);
  const cars = useSelector((state) => state.cars.cars);
  const motos = useSelector((state) => state.motos.motos);
  const trucks = useSelector((state) => state.trucks.trucks);

  const makesCount = useSelector((state) => state.makes.count);
  const manufacturersCount = useSelector((state) => state.manufacturers.count);
  const partsCount = useSelector((state) => state.parts.count);
  const carsCount = useSelector((state) => state.cars.count);
  const motosCount = useSelector((state) => state.motos.count);
  const trucksCount = useSelector((state) => state.trucks.count);

  // Fetching data when mounting the components
  const useFetchData = (data, fetchData) => {
    useEffect(() => {
      if (data.length === 0) {
        dispatch(fetchData());
      }
    }, [data, fetchData]);
  };

  useFetchData(makes, fetchMakes);
  useFetchData(manufacturers, fetchManufacturers);
  useFetchData(parts, fetchParts);
  useFetchData(cars, fetchCars);
  useFetchData(motos, fetchMotos);
  useFetchData(trucks, fetchTrucks);

  // Searchbar filter methods
  const filteredCategories = useMemo(() => {
    // Object storing the categories and their properties
    const categories = [
      {
        category: 'Makes',
        path: '/makes',
        id: '1',
        count: makesCount,
      },
      {
        category: 'Manufacturers',
        path: '/manufacturers',
        id: '2',
        count: manufacturersCount,
      },
      {
        category: 'Parts',
        path: '/parts',
        id: '3',
        count: partsCount,
      },
      {
        category: 'Cars',
        path: '/cars',
        id: '4',
        count: carsCount,
      },
      {
        category: 'Motos',
        path: '/motos',
        id: '5',
        count: motosCount,
      },
      {
        category: 'Trucks',
        path: '/trucks',
        id: '6',
        count: trucksCount,
      },
    ];

    return categories.filter(
      (category) => category.category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, carsCount, makesCount, manufacturersCount, motosCount, partsCount, trucksCount]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // Rendering the component
  return (
    <div className="grid">
      <div>
        <Header title="App" />
        <input type="text" placeholder="Search categories" value={query} onChange={handleQueryChange} />
      </div>
      <h3>STATS BY CATEGORY</h3>
      <ul>
        {filteredCategories.map((category) => (
          <li key={category.id}>
            <NavLink to={category.path}>
              <div className="cards">
                <i className="fa-regular fa-circle-right" />
                <div className="card-info">
                  {category.category}
                  {category.count && <p>{category.count}</p>}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;

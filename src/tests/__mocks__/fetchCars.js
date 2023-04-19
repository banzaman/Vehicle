const fetchCars = () => {
  const carsSlice = {
    Count: 173,
    Message: 'Response returned successfully',
    SearchCriteria: 'Vehicle Type: car',
    Results: [
      {
        MakeId: 440,
        MakeName: 'ASTON MARTIN',
        VehicleTypeId: 2,
        VehicleTypeName: 'Passenger Car',
      },
      {
        MakeId: 441,
        MakeName: 'TESLA',
        VehicleTypeId: 2,
        VehicleTypeName: 'Passenger Car',
      },
    ],
  };
  return carsSlice.Results;
};

export default fetchCars;

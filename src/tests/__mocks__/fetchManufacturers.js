const fetchManufacturers = () => {
  const manufacturersSlice = {
    Count: 89,
    Message: 'Response returned successfully',
    SearchCriteria: null,
    Results: [
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'Tesla',
        Mfr_ID: 955,
        Mfr_Name: 'TESLA, INC.',
        VehicleTypes: [
          {
            IsPrimary: true,
            Name: 'Passenger Car',
          },
          {
            IsPrimary: false,
            Name: 'Truck ',
          },
          {
            IsPrimary: false,
            Name: 'Multipurpose Passenger Vehicle (MPV)',
          },
        ],
      },
      {
        Country: 'UNITED KINGDOM (UK)',
        Mfr_CommonName: 'Aston Martin',
        Mfr_ID: 956,
        Mfr_Name: 'ASTON MARTIN LAGONDA LIMITED',
        VehicleTypes: [
          {
            IsPrimary: false,
            Name: 'Passenger Car',
          },
          {
            IsPrimary: false,
            Name: 'Multipurpose Passenger Vehicle (MPV)',
          },
        ],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'BMW',
        Mfr_ID: 957,
        Mfr_Name: 'BMW OF NORTH AMERICA, LLC',
        VehicleTypes: [],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: null,
        Mfr_ID: 958,
        Mfr_Name: 'JAGUAR LAND ROVER NA, LLC',
        VehicleTypes: [
          {
            IsPrimary: true,
            Name: 'Passenger Car',
          },
          {
            IsPrimary: false,
            Name: 'Truck ',
          },
          {
            IsPrimary: false,
            Name: 'Multipurpose Passenger Vehicle (MPV)',
          },
        ],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'Maserati',
        Mfr_ID: 959,
        Mfr_Name: 'MASERATI NORTH AMERICA, INC.',
        VehicleTypes: [
          {
            IsPrimary: false,
            Name: 'Passenger Car',
          },
          {
            IsPrimary: true,
            Name: 'Multipurpose Passenger Vehicle (MPV)',
          },
        ],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'Rolls Royce',
        Mfr_ID: 960,
        Mfr_Name: 'ROLLS ROYCE MOTOR CARS',
        VehicleTypes: [],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'Buell',
        Mfr_ID: 961,
        Mfr_Name: 'BUELL MOTORCYCLE CO.',
        VehicleTypes: [
          {
            IsPrimary: true,
            Name: 'Motorcycle',
          },
        ],
      },
      {
        Country: 'UNITED STATES (USA)',
        Mfr_CommonName: 'Toyota',
        Mfr_ID: 962,
        Mfr_Name: 'TOYOTA MOTOR NORTH AMERICA, INC',
        VehicleTypes: [],
      },
    ],
  };
  return manufacturersSlice.Results;
};

export default fetchManufacturers;

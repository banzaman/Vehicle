const fetchMotos = () => {
  const motosSlice = {
    Count: 1497,
    Message: 'Response returned successfully',
    SearchCriteria: 'Vehicle Type: moto',
    Results: [
      {
        MakeId: 446,
        MakeName: 'BUELL (EBR)',
        VehicleTypeId: 1,
        VehicleTypeName: 'Motorcycle',
      },
      {
        MakeId: 447,
        MakeName: 'JIALING',
        VehicleTypeId: 1,
        VehicleTypeName: 'Motorcycle',
      },
      {
        MakeId: 451,
        MakeName: 'FULMER FABRICATIONS',
        VehicleTypeId: 1,
        VehicleTypeName: 'Motorcycle',
      },
    ],
  };
  return motosSlice.Results;
};

export default fetchMotos;

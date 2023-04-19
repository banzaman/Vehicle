const fetchMakes = () => {
  const makesSlice = {
    Count: 10702,
    Message: 'Response returned successfully',
    SearchCriteria: null,
    Results: [
      {
        Make_ID: 11897,
        Make_Name: ' MID-TOWN TRAILERS',
      },
      {
        Make_ID: 4877,
        Make_Name: '1/OFF KUSTOMS, LLC',
      },
      {
        Make_ID: 11257,
        Make_Name: '102 IRONWORKS, INC.',
      },
      {
        Make_ID: 6387,
        Make_Name: '17 CREEK ENTERPRISES',
      },
      {
        Make_ID: 9172,
        Make_Name: '1M CUSTOM CAR TRANSPORTS, INC.',
      },
    ],
  };
  return makesSlice.Results;
};

export default fetchMakes;

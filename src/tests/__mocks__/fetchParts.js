const fetchParts = () => {
  const partsSlice = {
    Count: 1000,
    Message: 'Results returned successfully',
    SearchCriteria: 'Type: n/a | From Date: n/a | To Date: n/a | manufacturer: n/a',
    Results: [
      {
        CoverLetterURL: 'https://vpic.nhtsa.dot.gov/mfrportal/home/coverletter/0a3e7bc3-28a2-4acc-b28e-9d68c0af4b51',
        LetterDate: '4/19/2023',
        ManufacturerId: 22401,
        ManufacturerName: 'SHANDONG FOCUS INDUSTRY CO., LIMITED',
        ModelYearFrom: 2023,
        ModelYearTo: null,
        Name: 'ORG21630',
        Type: '565',
        URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/d3a30c05-bfbb-40c8-b521-4767c5575952',
      },
      {
        CoverLetterURL: 'https://vpic.nhtsa.dot.gov/mfrportal/home/coverletter/0692a711-7e6e-4606-957e-1543329c0da8',
        LetterDate: '4/19/2023',
        ManufacturerId: 14805,
        ManufacturerName: 'FERRARI S.P.A.',
        ModelYearFrom: 2023,
        ModelYearTo: 2023,
        Name: 'ORG21636',
        Type: '565',
        URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/0791b83e-46d1-4115-99d3-af0c346ab596',
      },
    ],
  };
  return partsSlice.Results;
};

export default fetchParts;

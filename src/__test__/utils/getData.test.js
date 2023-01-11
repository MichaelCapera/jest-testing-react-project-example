import getData from '../../utils/getData';

describe('Feta Api', () => {
  beforeEach(() => {
   fetch.resetMocks();
  });

  test('Call to api and return data', () => {
     fetch.mockResponseOnce(JSON.stringify({data: '12345678'}));

     getData('https://localhost.com')
     .then((response) => {
        expect(response.data).toEqual('12345678');
     });
     expect(fetch.mock.calls[0][0]).toEqual('https://localhost.com');
  });
});
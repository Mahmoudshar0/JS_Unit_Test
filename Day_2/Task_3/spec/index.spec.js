const request = require('request-promise');


// xdescribe('GET /hello',() => {
//   let server;
//   let data = {};

//   beforeAll(async () => {
//     server = require('../server');
//     const response = await request({
//         uri: 'http://localhost:3000/hello',
//       method: 'GET',
//         resolveWithFullResponse: true
//     });
//     data.statusCode = response.statusCode;
//     data.body = response.body;
//     data.res = response;
//   });

//   afterAll(() => {
//     server.close();
//   })

//   it('should return status code 200', () => {
//     expect(data.statusCode).toEqual(200);
//   });

// });


describe("GET /notfound", () => {
  let server;
  let data = {};

  beforeAll(async () => {
    server = require("../server");
    const response = await request({
      uri: "http://localhost:3000/notfound",
      method: "GET",
      resolveWithFullResponse: true,
    });
    data.statusCode = response.statusCode;
    data.body = response.body;
    data.res = response;
    console.log(data);
  });

  afterAll(() => {
    server.close();
  });

  it("should return status code 200", () => {
    expect(data.statusCode).toEqual(200);
  });
});
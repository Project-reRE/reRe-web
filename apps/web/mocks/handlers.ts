import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get(`/movies/:movieId`, () => {
    return HttpResponse.json({
      data: {
        name: 'hi',
        age: 25,
      },
    });
  }),
];

import CONFIG from './../../CONFIG.json';

const createEntityService = async (
  bdate,
  bdatetime,
  param1,
  param2,
  param3
) => {
  console.log(bdate, bdatetime, param1, param2, param3);

  let responseFetch = await fetch(`${CONFIG.URL_BACKEND}/api/test/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bdate: bdate,
      bdatetime: bdatetime,
      param1: param1,
      param2: param2,
      param3: param3,
    }),
  });

  const { ok, status } = responseFetch;
  responseFetch = await responseFetch.json();

  return { ok, status, responseFetch };
};

export default createEntityService;

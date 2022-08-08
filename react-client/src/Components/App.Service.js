import CONFIG from './../CONFIG.json';

const appService = async (setRowsAllEntities) => {
  let responseFetch = await fetch(`${CONFIG.URL_BACKEND}/api/tests/read`, {
    method: 'GET',
  });

  // const { ok, status } = responseFetch;
  responseFetch = await responseFetch.json();

  for (let index = 0; index < responseFetch.length; index++) {
    responseFetch[index].param1 = responseFetch[index].param1.toFixed(3);
  }

  setRowsAllEntities(responseFetch);
};

export default appService;

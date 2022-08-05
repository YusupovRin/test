import CONFIG from './../CONFIG.json';

const appService = async (setRowsAllEntities) => {
  let responseFetch = await fetch(`${CONFIG.URL_BACKEND}/api/tests/read`, {
    method: 'GET',
  });

  // const { ok, status } = responseFetch;
  responseFetch = await responseFetch.json();

  setRowsAllEntities(responseFetch);
};

export default appService;

const mode = {
  local: {
    apiUrl: 'http://localhost:8000/v1/',
    baseUrl: 'http://localhost:3000/',
  }, // LOCAL
  sit: {
    apiUrl: 'https://sit-api.domain.com/v1/',
    baseUrl: 'https://sit-cms.domain.com/',
  }, // SIT
  uat: {
    apiUrl: 'https://uat-api.domain.com/v1/',
    baseUrl: 'https://uat-cms.domain.com/',
  }, // UAT
  release: {
    apiUrl: 'https://api.domain.com/v1/',
    baseUrl: 'https://cms.domain.com/',
  }, // RELEASE
};

export default process.env.NEXT_MODE
  ? mode[process.env.NEXT_MODE]
  : mode['local'];

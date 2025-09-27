let date = "20240801";
let time_period = "m";
let nbu_url = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp');

nbu_url.searchParams.append('date', date);
nbu_url.searchParams.append('period', time_period);
nbu_url.searchParams.append('json', "");

console.log(nbu_url.href);

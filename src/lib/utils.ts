export function getWikipediaMobileUrl(url: string) {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export function checkYear(year: string) {
  const currentYear = new Date().getFullYear();
  const firstYear = 1950;

  if (isNaN(+year) || +year < firstYear || +year > currentYear) {
    year = String(currentYear);
  }

  return year;
}

export function checkRound(round: number) {
  const firstRound = 1;
  const lastRound = 99;
  if (round >= firstRound && round <= lastRound) {
    return round;
  }
  return firstRound;
}

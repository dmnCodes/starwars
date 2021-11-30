export default function (url) {
  return url
    .replace('https://swapi.dev/api/people/', '')
    .replace('/', '')
}
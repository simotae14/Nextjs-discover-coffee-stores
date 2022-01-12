const getUrlForCoffeeStores = (query, latLong, limit) => `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&fields=fsq_id%2Cname%2Cphotos%2Clocation&limit=${limit}`

export const fetchCoffeeStores = async () => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  };
  const response = await fetch(
    getUrlForCoffeeStores('caffe', '45.694583,9.679952', 6),
    options
  )
  const data = await response.json();
  return data.results;
}

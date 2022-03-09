import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer wzkSgzp-CgRoW8SvM75W5hK8cycA2oIcwQG5E_ThjwCOvKKss1a7yvdy5DE-WGzr11r3XZ-nNhZ5X34bDeTkAPlqfnhITdSgmrELdBSOK54o-MkBisFkn4s-ipwoYnYx',
  },
});

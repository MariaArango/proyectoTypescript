import { DiaryEntry, Visibility, Weather } from '../../types';

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2017-01-01',
    weather: Weather.Sunny,
    visibility: Visibility.Poor,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 2,
    date: '2017-04-01',
    weather: Weather.Cloudy,
    visibility: Visibility.Great,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 3,
    date: '2017-08-01',
    weather: Weather.Rainy,
    visibility: Visibility.Ok,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 4,
    date: '2017-06-01',
    weather: Weather.Stormy,
    visibility: Visibility.Poor,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 5,
    date: '2017-10-01',
    weather: Weather.Windy,
    visibility: Visibility.Good,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 6,
    date: '2017-10-01',
    weather: Weather.Sunny,
    visibility: Visibility.Ok,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 7,
    date: '2017-10-01',
    weather: Weather.Rainy,
    visibility: Visibility.Good,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
];

export default diaryEntries;

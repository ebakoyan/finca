import axios from 'axios'
// Server keys

const _apiKey = '?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4';
const _musicApi = 'http://api.napster.com/v2.2/';
const _auth = "http://212.73.82.108:8081/api/";

// Music list

export const fetchMusic = async () => {
    const musicList = [];
    const { data } = await axios.get(`${_musicApi}tracks/top${_apiKey}`);
    for await (const item of data.tracks) {
      const { data: artist } = await axios.get(
        `${_musicApi}artists/${item.artistId}/images${_apiKey}`
      );
      musicList.push({
        artistName: item.artistName,
        trackName: item.name,
        track: item.previewURL,
        img: artist.images[0].url,
        id: item.id,
      });
    }
    return musicList;
  };

export const login = async(username, password) => {
    try {
        const res = await axios.post(`${_auth}login`, {username, password})
        if (res.data.accessToken) {
            return true
        } else {
            return false
        }
    } catch (e) {
        return false
    }
}
export const createUser = async(username, password) => {
    try {
        const res = await axios.post(`${_auth}CreateUser`, {username, password})
        if (res.data.id) {
            return true
        } else 
            return false
    } catch (e) {
        return false
    }
}
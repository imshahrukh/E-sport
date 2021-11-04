import axios from "axios";

export const Member = {
  login: async (object) => {
    const url = `http://localhost:8000/v1/login`;
    console.log(object);
    const d = await axios.post(url, object);
    // console.log(d.data);
    return d.data;
  },
  addMember: async (object) => {
    const url = `http://localhost:8000/v1/member`;
    console.log(object);
    const d = await axios.post(url, object);
    // console.log(d.data);
    return d.data.status;
  },
  getMemberByID: async (id) => {
    const url = `http://localhost:8000/v1/member/${id}`;
    const d = await axios.get(url);
    return d.data.data.member;
  },
  updateMember: async (id, object) => {
    // console.log(id, object);
    const url = `http://localhost:8000/v1/member/${id}`;
    console.log(url);
    const d = await axios.patch(url, object);
    return d.data.status;
  },
};
export const GamePostCall = {
  gamePost: async (object) => {
    //  const attendance_URL = `${live_url}v1/fine?RegNo=${id}`;
    const url = `http://localhost:8000/v1/gamePost?type=all&game=PUBG&search=Dimond game`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.data);
    return d.data;
  },
  addGame: async (object) => {
    const url = `http://localhost:8000/v1/gamePost`;
    // console.log(object);
    const d = await axios.post(url, object);
    // console.log(d.status);
    return d.data.status;
  },
  postById: async (id) => {
    const url = `http://localhost:8000/v1/gamePost/${id}`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.status);
    return d.data.data.gamePost;
  },
  ownerPostById: async (id) => {
    const url = `http://localhost:8000/v1/ownergamepost/${id}`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.status);
    return d.data.data.ownerGamePost;
  },

  updatePost: async (id, status) => {
    const url = `http://localhost:8000/v1/gamePost/${id}`;
    // console.log(object);
    const d = await axios.patch(url, { status: status });
    // console.log(d.status);
    return d.data.data.ownerGamePost;
  },
};

export const SoldGame = {
  addSoldGame: async (object) => {
    //  const attendance_URL = `${live_url}v1/fine?RegNo=${id}`;
    const url = `http://localhost:8000/v1/soldgame`;
    // console.log(object);
    const d = await axios.post(url, object);
    // console.log(d.data);
    return d.data.status;
  },
  getSoldGame: async (id) => {
    //  const attendance_URL = `${live_url}v1/fine?RegNo=${id}`;
    const url = `http://localhost:8000/v1/soldgame/${id}`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.data);
    return d.data.data.soldGame;
  },
  addGame: async (object) => {
    const url = `http://localhost:8000/v1/gamePost`;
    // console.log(object);
    const d = await axios.post(url, object);
    // console.log(d.status);
    return d.data.status;
  },
  postById: async (id) => {
    const url = `http://localhost:8000/v1/gamePost/${id}`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.status);
    return d.data.data.gamePost;
  },
  ownerPostById: async (id) => {
    const url = `http://localhost:8000/v1/ownergamepost/${id}`;
    // console.log(object);
    const d = await axios.get(url);
    // console.log(d.status);
    return d.data.data.ownerGamePost;
  },
};

const token = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
import axios from "axios";
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
const fetchUsers = async () => {
  const res = await axios.get(`${GITHUB_URL}/users`, config);

  return res.data;
};

const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await axios.get(`${GITHUB_URL}/search/users?${params}`, config);

  return res.data.items;
};

const getUser = async (login) => {
  const res = await axios.get(
    `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
    config
  );

  return res.data;
};

const getUserRepos = async (login, perPage) => {
  const params = new URLSearchParams({
    sort: "created",
  });
  const res = await axios.get(
    `${
      import.meta.env.VITE_GITHUB_URL
    }/users/${login}/repos?${params}&per_page=${perPage}`,
    config
  );

  return res.data;
};

export { fetchUsers, searchUsers, getUser, getUserRepos };

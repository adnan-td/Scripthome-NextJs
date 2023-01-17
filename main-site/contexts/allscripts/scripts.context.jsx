import axios from "axios";

export const AllScriptContext = {
  getScriptsHighViews,
  getScriptsRecent,
  getScriptsPaginated,
  getScriptsPaginatedUser,
  getScriptsAll,
  getScriptsAllLength,
};

async function getScriptsAll() {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "all",
    },
  });
  return res.data;
}

async function getScriptsRecent() {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "recent",
    },
  });
  return res.data;
}

async function getScriptsHighViews() {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "highviews",
    },
  });
  return res.data;
}

async function getScriptsPaginated(limit, offset) {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "paginated",
      limit: limit,
      offset: offset,
    },
  });
  return res.data;
}

async function getScriptsPaginatedUser(limit, offset, id) {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "paginated",
      limit: limit,
      offset: offset,
    },
  });
  return res.data;
}

async function getScriptsAllLength() {
  const res = await axios({
    method: "post",
    url: `/api/scripts/get`,
    data: {
      method: "length",
    },
  });
  return res.data;
}

import axios from "axios";

async function getImages(filter) {
  let queryParams = {};
  if (filter && filter !== "all") {
    queryParams.type = filter;
  }
  const response = await axios.get(
    "http://localhost:3000/images",
    queryParams && {
      params: queryParams,
    }
  );

  return response.data;
}

export { getImages };

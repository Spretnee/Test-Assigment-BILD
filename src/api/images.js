import axios from "axios";

async function getImages(filter, page = 1) {
  console.log("fetching page", page);
  let queryParams = { _limit: 20, _page: page };

  if (filter !== "all") {
    queryParams.type = filter;
  }
  const response = await axios.get("http://localhost:3000/images", {
    params: queryParams,
  });

  return response.data;
}

export { getImages };

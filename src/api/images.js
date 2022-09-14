import axios from "axios";

async function getImages() {
  const response = await axios.get("http://localhost:3000/images");

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(response.data), 3000);
  });
}
export { getImages };

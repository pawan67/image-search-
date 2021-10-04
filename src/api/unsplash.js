import axios from "axios";

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 4Lksl02-VVR6UF_VouewD1Hjlh18cPvSBeWSCfTSFyg",
      },
});
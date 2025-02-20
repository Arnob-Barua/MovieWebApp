import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTFjNjdjMmI0M2E0NGE4MTc0OTg4MmY4NTQwZTgzYiIsIm5iZiI6MTczOTg1OTYzOS41NTUsInN1YiI6IjY3YjQyNmI3ZTBkOWY4MzNiYzZkYjczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RfiQamiiIPoIDUU8koZvxPAves4q_7r-taJmHuuG4uI'
      },
});

export default instance;
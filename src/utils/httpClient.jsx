const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjcyMzFlNDI5MGUxZDgxNmQ0NWZkNmZlNjA0ZmUyZiIsInN1YiI6IjYzOTdkNTc5MmNlZmMyMDA4Y2E3ZjA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4EdQhP8rpSTtgBt7lRbWkQyzeNLmBdO0uI8PvCbjbY",
                "Content-type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json());
}
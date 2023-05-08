import axios from "axios";

class UserService {
    async getUsers(currentPage = 1, currentLimit = 10) {
        try {
            const page = currentPage;
            const limit = currentLimit;
            const { data, headers } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}?_limit=${limit}`
            );
            const countPages = headers["x-total-count"] / limit;
            return {
                data,
                countPages,
            };
        } catch (error) {
            alert(error.message);
        }
    }
}

export default new UserService();

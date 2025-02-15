import axios from "axios";
import { Repository } from "./dto/repositoriesResponse.dto";

export async function getGitHubRepos(username: string): Promise<Repository[]> {
  let repos: Repository[] = [];

  try {
    const response = await axios.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`
    );

    repos = repos.concat(response.data);

    return repos;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    return [];
  }
}

import variables from "./page.module.scss";
import Image from "next/image";

import { Octokit } from "octokit";

const TOKEN = process.env.GH_TOKEN;
const USERNAME = "iagpomponet";
const REPO_NAME = "blog";

const octokit = new Octokit({
  auth: TOKEN,
});

const fetchIssues = async () => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: USERNAME,
    repo: REPO_NAME,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res;
};

export default async function Home() {
  const data = await fetchIssues();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const handleInitialFetch = async () => {
  //     await fetchIssues();
  //   };

  //   handleInitialFetch().then((res) => setData(res));
  // });

  return (
    <main>
      <div className={variables.container}>
        <section className={variables.bioSection}>
          <Image
            className={variables.avatar}
            alt="Iago picture"
            width={70}
            height={70}
            src="/avatar.jpg"
          />
          <div className={variables.bio}>
            <h1>Iago Pomponet</h1>
            <p>
              A fast, minimalistic Hugo theme with light and dark mode support,
              for running a personal site or blog.
            </p>
          </div>
        </section>

        <ul>
          {(data as any)?.data?.map((post: any) => {
            return (
              <li key={post.id} className={variables.postItem}>
                <div>{post.title}</div>
                <div>{new Date(post.created_at).getUTCDate()}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

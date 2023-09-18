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
              Frontend engineer from Brazil with 4 years of experience.
              Currently working at Uber
            </p>
          </div>
        </section>

        <ul>
          {data?.data?.map((post) => {
            return (
              <li key={post.id} className={variables.postItem}>
                <div>{post.title}</div>
                <div>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

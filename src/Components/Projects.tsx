interface ProjectComponent {
  p: string;
  h2: string;
  link: string;
  skills: Array<string>;
}

function Project({ p, h2, link, skills }: ProjectComponent) {
  return (
    <a href={link}>
      <div className="project p-8 m-4 relative transition-all left-0 cursor-pointer hover:left-5">
        <h2 className="">
          {h2} <i className="fa-solid fa-arrow-right mx-4 relative left-0"></i>
        </h2>
        <p className="opacity-70 m-4">{p}</p>
        <div className="w-full h-fit py-4 mt-4 flex flex-wrap">
          {skills.map((e) => (
            <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">{e}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="comp projects">
      <h2 className="text-xl font-semibold text-center border-b-1 border-b-main mx-6 p-4">
        Popular Projects
      </h2>
      <Project
        link="https://alnakheel.netlify.app"
        h2="E-commerce App - Website"
        p="An Arabic restaurant static website deployed on netlify"
        skills={["React", "Netlify", "Sass"]}
      />
      <Project
        link="https://repoview.netlify.app"
        h2="RepoViewer - Website"
        p="A website for viewing general data about repositories"
        skills={["React", "Typescript", "RESTApi"]}
      />
      <Project
        link="https://salatukonline.netlify.app"
        h2="Salatuk Online - Website"
        p="A website for searching prayer times world-wide"
        skills={["React", "Typescript", "Tailwindcss"]}
      />
      <Project
        link="https://yt-clone-react-app.netlify.app/"
        h2="Youtube-Clone - Website"
        p="A youtube clone website that displays content"
        skills={["React Query", "Typescript", "Tailwindcss"]}
      />
    </div>
  );
}

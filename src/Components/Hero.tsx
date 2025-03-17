export default function Hero() {
  return (
    <section className="hero m-12 flex flex-wrap items-center justify-center">
      <div className="text-6xl font-extralight px-48 py-8 flex flex-wrap select-none justify-center items-center">
        <h1 className="mb-8 font-normal text-center">
          Hello! <span className="ml-1 select-none hover:rotate-45">👋</span>{" "}
        </h1>
        <p className="mb-4 text-3xl text-center">
          I'm <span className="font-normal">Abdulrahman</span>, a passionate
          front-end web developer who builds unique experiences & interfaces.
        </p>
        <p className="text-xl w-full text-center">
          Get in touch{" "}
          <a
            className="border-b-2 border-b-main hover:text-white"
            href="mailto:phantommy38@gmail.com"
          >
            phantommy38@gmail.com
          </a>
        </p>
        <p className="text-xl w-full text-center">
          Text me on Whatsapp{" "}
          <a className="border-b-2 border-b-main hover:text-white">
            +20 01278786671
          </a>
        </p>
      </div>
      <div className="w-full m-2 flex">
        <a href="https://github.com/phan-forsure" className="block w-fit mx-2">
          <img
            className="w-8 h-8 rounded-xl opacity-50 hover:opacity-85 transition-all cursor-pointer"
            src="githubicon-removebg-preview.png"
            alt="github"
          />
        </a>
        <a href="https://codepen.io/phan-forsure" className="block w-fit mx-2">
          <img
            className="w-8 h-8 rounded-xl opacity-50 hover:opacity-85 transition-all cursor-pointer"
            src="codepen1600.png"
            alt="codepen"
          />
        </a>
      </div>
    </section>
  );
}

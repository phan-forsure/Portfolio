import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero m-12 flex flex-wrap items-center justify-center">
      <div className="text-6xl font-extralight px-48 py-8 flex flex-wrap select-none justify-center items-center">
        <h1 className="mb-8 font-normal text-center">
          Hello!{" "}
          <span
            onClick={(e) => (e.currentTarget.style.rotate = "45px")}
            className="ml-1 select-none cursor-pointer hover:rotate-45"
          >
            👋
          </span>{" "}
        </h1>
        <p className="mb-4 text-3xl text-center">
          I'm <span className="font-normal">Abdulrahman</span>, a passionate
          front-end web developer who builds unique experiences & interfaces.
        </p>
        {/* <p className="text-xl w-full text-center">
          Get in touch{" "}
          <a
            className="border-b-2 border-b-main hover:text-white"
            href="mailto:phantommy38@gmail.com"
          >
            phantommy38@gmail.com
          </a>
        </p> */}
        {/* <p className="text-xl w-full text-center">
          Text me on Whatsapp{" "}
          <a className="border-b-2 border-b-main hover:text-white">
            +20 01278786671
          </a>
        </p> */}
        <div className="flex justfiy-center items-center text-3xl">
          Let's work together
          <button className="flex justify-center rounded-md items-center bg-white ml-6">
            <a href="mailto:phantommy38@gmail.com" className="px-2 m-3">
              <Mail className="text-black" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

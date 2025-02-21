export default function Projects() {
    return (
        <div className='comp projects'>
            <h2 className='text-xl font-semibold text-center border-b-1 border-b-main mx-6 p-4'>Popular Projects</h2>
            <a href="https://alnakheel.netlify.app">
                <div className='project p-8 m-4 relative transition-all left-0 cursor-pointer hover:left-5 hover:bg-main-light'>
                    <h2 className="">E-commerce App - Website <i className="fa-solid fa-arrow-right mx-4 relative left-0"></i></h2>
                    <p className="opacity-70 m-4">An Arabic restaurant static website deployed on netlify</p>
                    <div className="w-full h-fit py-4 mt-4 flex flex-wrap">
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">React</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Netlify</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Sass</span>
                    </div>
                </div>
            </a>
            <a href="https://repoview.netlify.app">
                <div className='project p-8 m-4 relative transition-all left-0 cursor-pointer hover:left-5 hover:bg-main-light'>
                    <h2 className="">RepoViewer - Website <i className="fa-solid fa-arrow-right mx-4 relative left-0"></i></h2>
                    <p className="opacity-70 m-4">A website for viewing general data about repositories</p>
                    <div className="w-full h-fit py-4 mt-4 flex flex-wrap">
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">React</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Typescript</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Fetch</span>
                    </div>
                </div>
            </a>
            <a href="https://salatukonline.netlify.app">
                <div className='project p-8 m-4 relative transition-all left-0 cursor-pointer hover:left-5 hover:bg-main-light'>
                    <h2 className="">Salatuk Online - Website <i className="fa-solid fa-arrow-right mx-4 relative left-0"></i></h2>
                    <p className="opacity-70 m-4">A website for searching prayer times world-wide</p>
                    <div className="w-full h-fit py-4 mt-4 flex flex-wrap">
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">React</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Typescript</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Tailwindcss</span>
                    </div>
                </div>
            </a>
            <a href="https://yt-clone-react-app.netlify.app/">
                <div className='project p-8 m-4 relative transition-all left-0 cursor-pointer hover:left-5 hover:bg-main-light'>
                    <h2 className="">Youtube-Clone - Website <i className="fa-solid fa-arrow-right mx-4 relative left-0"></i></h2>
                    <p className="opacity-70 m-4">A youtube clone website that displays content</p>
                    <div className="w-full h-fit py-4 mt-4 flex flex-wrap">
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">React Query</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Typescript</span>
                        <span className="rounded-3xl p-4 mr-4 mt-2 bg-main-light">Tailwindcss</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
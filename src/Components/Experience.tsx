/* eslint-disable prefer-const */
import { useEffect, useState } from "react";

export default function Experience() {
    let [iProj, setIProj] = useState(0)
    let [iSmProj, setISmProj] = useState(0)
    let [iRep, setIRep] = useState(0)
    let [iWeb, setIWeb] = useState(0)

    useEffect(() => {
        const intervalProjects = setInterval(() => {
        setIProj(iProj += 1)
          if (iProj === 10) {
            clearInterval(intervalProjects);
        }
        }, 200);

        const intervalSmProjects = setInterval(() => {
        setISmProj(iSmProj += 1)
          if (iSmProj === 20) {
            clearInterval(intervalSmProjects);
        }
        }, 150);

        const intervalRepos = setInterval(() => {
        setIRep(iRep += 1)
          if (iRep === 10) {
            clearInterval(intervalRepos);
        }
        }, 200);

        const intervalWebs = setInterval(() => {
        setIWeb(iWeb += 1)
          if (iWeb === 5) {
            clearInterval(intervalWebs);
        }
        }, 300);
      }, []);
    
    return (
        <div className='comp experience'>
            <h2 className='text-xl font-semibold text-center border-b-1 border-b-main mx-6 p-4'>Experience</h2>
            <div className='grid grid-rows-3'>
               <h2 className="p-8 text-xl mx-6 border-b-1 border-b-main opacity-70"><span className="text-emerald-400">{iProj}+</span> Projects</h2>
               <h2 className="p-8 text-xl mx-6 border-b-1 border-b-main opacity-70"><span className="text-emerald-400">{iSmProj}+</span> Small Projects</h2>
               <h2 className="p-8 text-xl mx-6 border-b-1 border-b-main opacity-70"><span className="text-emerald-400">{iRep}+</span> Github Repositories</h2>
               <h2 className="p-8 text-xl mx-6 opacity-70"><span className="text-emerald-400">{iWeb}+</span> Deployed Websites on Netlify</h2>
            </div>
        </div>
    )
}
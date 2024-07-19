
const languages: string[] = ['HTML 5', 'CSS3 & Sass', 'JavaScript + ES6', 'TypeScript', 'NodeJS']
const frameworks: string[] = ['React', 'Tailwind CSS', 'React Query', 'Axios']
const tools: string[] = ['Vite', 'Webpack', 'Postman', 'Bash', 'Git & Github', 'Chrome DevTool', 'ESLint']

export default function Skills() {
    return (
        <div className='comp'>
            <h2 className='text-xl font-semibold text-center border-b-1 border-b-main mx-6 mb-8 p-4'>Skills</h2>
            <div className='grid grid-cols-3'>
                <ul className='flex flex-wrap justify-center border-r-1 border-r-main'>
                    <h2 className='font-semibold mx-4 mb-4'>LANGUAGES</h2>
                    {languages.map(sk => <li key={sk} className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
                <ul className='flex flex-wrap justify-center border-r-1 border-r-main'>
                    <h2 className='font-semibold mx-4 mb-4'>LIBRARIES</h2>
                    {frameworks.map(sk => <li key={sk} className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
                <ul className='flex flex-wrap justify-center'>
                    <h2 className='font-semibold mx-4 mb-4'>TOOLS</h2>
                    {tools.map(sk => <li key={sk} className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
            </div>
        </div>
    )
}


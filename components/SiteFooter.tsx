import logo2 from '../public/Images/guide_logo2.png'

export default function SiteFooter() {
    return (
        <footer className="p-10 bg-white bg-Neutral-50 border-2 border-slate-200">
            <div className='container w-7/12 mx-auto'>
            <div className="grid grid-cols-3 gap-0 place-items-center divide-x divide-slate-400">
                <img
                    className = "w-30 h-20"
                    src = {logo2.src}
                    alt = 'Nebula logo'
                />
                <div className='pl-10 pr-0 mr-0'>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <a href="https://google.com/" className="hover:underline">awfwa</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div className='pl-10 pr-0'>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <a href="https://google" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://google" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            
            
        </footer> 
        )
}

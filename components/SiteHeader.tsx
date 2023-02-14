import logo from '../public/Images/guide_logo.svg'
import Link from 'next/link'
export default function SiteHeader() {
    return (
        <nav className="flex flex-wrap items-center p-0 justify-between bg-neutral-50 shadow-[0_0px_4px_4px_rgba(0,0,0,0.25)]">
            <img
                className = "w-66 h-12 pl-4 pt-2"
                src = {logo.src}
                alt = 'Nebula logo'
            />
            <div className='flex justify-between space-x-4'>
                <div>
                    <Link href="/IndexPage">
                        <button className="rounded-full text-white font-bold py-1.5 px-3 bg-[#4659A7] hover:bg-[#3D4E94]">
                            INDEX
                        </button >
                    </Link>
                    
                </div>
                <div className="pr-4">
                    <button className="rounded-full text-white font-bold py-1.5 px-3 bg-[#4659A7] hover:bg-[#3D4E94]">REPORT A BUG</button >
                </div>
            </div>
      </nav>
    )
}
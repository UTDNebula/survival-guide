import logo2 from '../public/Images/guide_logo2.png'

export default function SiteHeader() {
    return (
        <nav className="flex flex-wrap items-center p-2 justify-between bg-neutral-50 shadow-[0_0px_4px_4px_rgba(0,0,0,0.25)]">
            <img
                className = "w-40 h-10"
                src = {logo2.src}
                alt = 'Nebula logo'
            />
            <div className='flex justify-between space-x-4'>
                <div>
                    <button className="rounded-full text-white font-bold py-1.5 px-3 bg-[#4659A7]">INDEX</button >
                </div>
                <div>
                    <button className="rounded-full text-white font-bold py-1.5 px-3 bg-[#4659A7]">REPORT A BUG</button >
                </div>
            </div>
      </nav>
    )
}
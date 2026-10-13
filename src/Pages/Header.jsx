export default function Header() {
    return (
        <header className="w-full h-[100px] bg-black flex items-center justify-between text-gray-600 px-4 py-2 border-b-2 border-gray-600 sticky top-0 z-50">

            <div className="text-2xl font-bold flex items-center text-amber-300">
                <h1 className="text-2xl font-bold cursor-pointer hover:text-white transition duration-400 p-5">ISAAC PERERA</h1>
            </div>

            <nav className="h-full flex items-center gap-5 p-5" aria-label="Main navigation">
                <a href="#projects" className="text-2xl font-bold cursor-pointer hover:text-white transition duration-400">Projects</a>
                <a href="#about"    className="text-2xl font-bold cursor-pointer hover:text-white transition duration-400">About</a>
                <a href="#skills"   className="text-2xl font-bold cursor-pointer hover:text-white transition duration-400">Skills</a>
                <a href="#contact"  className="text-2xl font-bold cursor-pointer hover:text-white transition duration-400">Contact</a>
            </nav>

        </header>
    )
}
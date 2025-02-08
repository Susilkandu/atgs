export default function Navbar() {
    return (
        <ul className="navbar hidden  md:flex flex-row justify-between items-center h-[4.5rem] p-[1.5rem]">
            <li className="logo ml-[4.5rem]"><img className="object-fill h-[1.5rem]" src="./logo.png " alt="" /></li>
            <li className="search bg-[#F2F2F2] w-[360px] h-[42px] text-center rounded-[21px] flex items-center">
                <i className="bi bi-search ml-[14px]">
                </i>
                <input type="text" className="ml-[14px] font-[IBM-Plex-Sans]" name="search" placeholder={"Search for your favorite groups in ATG"}/></li>
            <li className="account mr-[4.5rem]">          
                Create account. <span className="text-blue-500">It's free</span> <i className="bi bi-caret-down-fill mt-4 ml-[6px]"></i>
            </li>
        </ul>
    )
}

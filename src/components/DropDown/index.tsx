// import React from 'react'

// type Props = {}

// const Dropdown = (props: Props) => {
//     const [isOpen, setIsOpen] = React.useState(false)
//     const toggleDropdown = () => {
//         setIsOpen((prev) => !prev)
//     }
//     return (
//         <div className='relative w-[100px] h-[40px] border border-black rounded-xl'>
//             <button className='w-full h-full flex items-center justify-center' onClick={toggleDropdown}>
//                 Dropdown
//             </button>
//             {
//                 isOpen && (
//                     <div className='absolute top-[40px] left-0 w-full bg-white border border-black rounded-xl'>
//                         <ul>
//                             <DropdownItem>Item 1</DropdownItem>
//                             <li className='px-3 py-1 hover:bg-zinc-200 cursor-pointer'>Item 2</li>
//                             <li className='px-3 py-1 hover:bg-zinc-200 cursor-pointer'>Item 3</li>
//                         </ul>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// const DropdownItem = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <li className='px-3 py-1 hover:bg-zinc-200 cursor-pointer'>{children}</li>
//     )
// }

// export default Dropdown
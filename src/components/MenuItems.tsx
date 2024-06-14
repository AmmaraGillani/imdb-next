import Link from 'next/link'
interface MenuItemsProps {
  title: string;
  address: string;
  Icon?: JSX.Element; // Adjust this type if `icon` is something else
}


const MenuItems:React.FC<MenuItemsProps> = ({title, address, Icon}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <span className='text-2xl sm:hidden'>{Icon}</span>
      <p className='uppercase hidden sm:inline text:sm'>{title}</p>
    </Link>
  )
};
export default MenuItems;
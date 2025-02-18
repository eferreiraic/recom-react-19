import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from '@tanstack/react-router';

const menuOptions: { title: string; href: string }[] = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Todos',
    href: '/todos',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export default function Navbar() {
  return (
    <NavigationMenu className="max-h-fit min-w-full justify-baseline p-2 bg-gray-300">
      <NavigationMenuList>
        {menuOptions.map((el) => (
          <NavigationMenuItem key={el.href}>
            <Link to={el.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {el.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

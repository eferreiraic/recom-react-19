import {
  NavigationMenu,
  NavigationMenuItem,
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
];

export default function Navbar() {
  return (
    <NavigationMenu className="max-h-fit min-w-full justify-baseline p-2 bg-gray-300">
      <NavigationMenuList>
        {menuOptions.map((el) => (
          <NavigationMenuItem key={el.href}>
            <Link to={el.href} className={navigationMenuTriggerStyle()}>
              {el.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

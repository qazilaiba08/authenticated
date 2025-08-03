"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar({ search, setSearch }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-background">
      <h1 className="text-2xl font-bold text-primary">ShipDev</h1>

<div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Home
        </Link>
        <Link href="/products" className="text-lg font-semibold text-primary">
          Products
        </Link>
        <Link href="/about" className="text-lg font-semibold text-primary">
          About Us
        </Link>
        <Link href="/contact" className="text-lg font-semibold text-primary">
          Orders
        </Link>
        {/* Category Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-3 w-48 bg-white shadow-md rounded-md">
                  {["Electronics", "Fashion", "Books", "Home", "Toys"].map((cat) => (
                    <li key={cat}>
                      <NavigationMenuLink
                        asChild
                        onClick={() => handleCategorySelect(cat)}
                        className="cursor-pointer block px-3 py-1 rounded hover:bg-accent text-sm"
                      >
                        <span>{cat}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search */}
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-56"
        />

        {/* Login Button with Route */}
        <Link href="/login">
          <Button variant="outline">
            <LogInIcon className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}

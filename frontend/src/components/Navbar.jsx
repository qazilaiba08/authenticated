"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar({ search, setSearch }) {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-background">
      <h1 className="text-2xl font-bold text-primary">ShipDev</h1>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-56"
        />
        <ThemeToggle />
      </div>
    </nav>
  );
}

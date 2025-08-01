"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedProducts({ products }) {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4">
        {products.slice(0, 3).map((product) => (
          <Card key={product.id} className="shadow hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="rounded-t-lg w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

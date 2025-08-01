export default function Reviews() {
  const reviews = [
    { name: "Sarah", comment: "Amazing quality! Will buy again.", rating: 5 },
    { name: "John", comment: "Fast delivery and great support.", rating: 4 },
    { name: "Emily", comment: "Beautiful products, love the design!", rating: 5 }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-3 container mx-auto px-4">
        {reviews.map((r, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <p className="text-gray-800 dark:text-gray-200 mb-2">"{r.comment}"</p>
            <p className="font-semibold text-primary">- {r.name}</p>
            <p className="text-yellow-500">{"⭐".repeat(r.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

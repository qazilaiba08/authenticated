'use client'
import React from "react";
import { useState,useEffect}  from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeatureProducts";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ImageCarousel from "../components/CarouselTy";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
useEffect(() => {
  setLoading(true);
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      setProducts(res.data.products || res.data); 
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);
 

 const filtered = products.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
          <ImageCarousel />
      <FeaturedProducts products={filtered} />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

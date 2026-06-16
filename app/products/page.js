import PageHeader from "@/components/ui/PageHeader";
import Products from "@/components/sections/Products";
import CTA from "@/components/sections/CTA";
import { products } from "@/content/sections";

export const metadata = {
  title: "Products — TSG Systems",
  description: products.lead,
};

/** /products — things we've already shipped. */
export default function ProductsPage() {
  return (
    <main className="page">
      <PageHeader eyebrow={products.eyebrow} title={products.title} lead={products.lead} />
      <Products heading={false} />
      <CTA />
    </main>
  );
}

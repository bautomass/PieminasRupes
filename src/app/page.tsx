import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import MemorialCare from "@/components/home/MemorialCare";
import Loading from "@/components/ui/Loading";
import PricingBanner from "@/components/home/PricingBanner";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <MemorialCare />
        <PricingBanner />
        <FloatingWhatsApp />
      </Suspense>
    </>
  );
}

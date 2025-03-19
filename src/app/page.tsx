import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import MemorialCare from "@/components/home/MemorialCare";
import Loading from "@/components/ui/Loading";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <MemorialCare />
      </Suspense>
    </>
  );
}

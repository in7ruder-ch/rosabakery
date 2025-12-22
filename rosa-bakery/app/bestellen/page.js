import { Suspense } from "react";
import BestellenClient from "./BestellenClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="py-10">
          <div className="rounded-xl border border-[#4D6936]/20 bg-white px-6 py-6 text-sm text-rosa-green">
            Seite wird geladen…
          </div>
        </div>
      }
    >
      <BestellenClient />
    </Suspense>
  );
}

import InteractionClient from "./InteractionClient";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ tnt: "t" }];
}

export default function VaultPage() {
  return (
    <Suspense>
      <InteractionClient />
    </Suspense>
  );
}

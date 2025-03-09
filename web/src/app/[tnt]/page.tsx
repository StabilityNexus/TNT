import { notFound } from "next/navigation";
import InteractionClient from "./InteractionClient";
import { Suspense } from "react";
import Layout from "@/components/Layout";

export async function generateStaticParams() {
  return [{ tnt: "t" }];
}

export default function VaultPage() {
  return (
    <Layout>
      <Suspense>
        <InteractionClient />
      </Suspense>
    </Layout>
  );
}

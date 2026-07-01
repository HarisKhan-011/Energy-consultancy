import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnergyOne | Smarter Gas & Electricity Services" },
      {
        name: "description",
        content:
          "Book trusted gas and electricity experts, request emergency support, and track maintenance from one modern command center.",
      },
      { property: "og:title", content: "EnergyOne | Smarter Gas & Electricity Services" },
      {
        property: "og:description",
        content:
          "The modern command center for gas and electrical services, with booking, emergency, and maintenance in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

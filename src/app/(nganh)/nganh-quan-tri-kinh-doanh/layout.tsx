import { GET_QUAN_TRI_KINH_DOANH } from "@/app/api/GraphQl/quanTriKinhDoanh";
import { getSeoData } from "@/ultil/getSeoData";
import { generateMetadataFromFullHead } from "@/ultil/seoUtils";
import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(
    GET_QUAN_TRI_KINH_DOANH,
    "allQuNTrKinhDoanh"
  );

  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow",
  };
}

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;

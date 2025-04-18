"use client";
import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Banner } from "./Banner";
import { TextScrollHomePage } from "./TextScroll";

const Categorys = dynamic(
  () => import("./Categorys").then((mod) => mod.Categorys),
  {
    loading: () => <Loading />,
  }
);

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <Loading />,
});

const Notify = dynamic(() => import("./Notify").then((mod) => mod.Notify), {
  loading: () => <Loading />,
});

const Support = dynamic(() => import("./Support").then((mod) => mod.Support), {
  loading: () => <Loading />,
});

const Counters = dynamic(
  () => import("./Counters").then((mod) => mod.Counters),
  {
    loading: () => <Loading />,
  }
);

const Review = dynamic(() => import("./Review").then((mod) => mod.Review), {
  loading: () => <Loading />,
});

const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact), {
  loading: () => <Loading />,
});

const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});

export const Home = ({
  homeData = {},
  timelineData = [],
  news = [],
  notifis = [],
}: {
  homeData?: any;
  timelineData?: string[];
  news?: any[];
  notifis?: any[];
}) => {
  const { setAutoOpen } = useModal();

  useEffect(() => {
    setAutoOpen && setAutoOpen(true);
    return () => {
      setAutoOpen && setAutoOpen(false);
    };
  }, [setAutoOpen]);

  return (
    <>
      <Banner bannerData={homeData?.banner} />
      <Box>
        <TextScrollHomePage timelineData={timelineData} />
      </Box>
      <Categorys categoryData={homeData?.cacNganhDaoTao} />
      <Benefit benefitData={homeData?.banNhan} />
      <Box py={"62px"}>
        <Notify notifyData={homeData?.thongBao} />
      </Box>
      <Support supportData={homeData?.hoTro} />
      <Counters counterData={homeData?.nhungConSo} />
      <Review reviewData={homeData?.danhGia} />
      <Contact contactData={homeData?.tuyenSinh} />
      <Event news={news} notifis={notifis} />
    </>
  );
};

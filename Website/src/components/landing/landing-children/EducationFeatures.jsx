import { Icons } from "@/components/global/icons/icons";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import React from "react";

const EducationFeatures = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-8">
  <div className="grid gap-8 md:grid-cols-3">

    <Card className="w-[390px]">
      <CardHeader>  
        <div className="flex items-center justify-between">
        <button className="rounded-full bg-black  p-2">
          <Icons.video className=" size-5 text-white" />
        </button>
        </div>
        </CardHeader>
        <CardFooter>
        Study at your own place
        </CardFooter>
        </Card>
    <Card className="w-[390px]">
      <CardHeader>  
        <div className="flex items-center justify-between">
        <button className="rounded-full bg-black  p-2">
          <Icons.video className=" size-5 text-white" />
        </button>
        </div>
        </CardHeader>
        <CardFooter>
        Study at your own place
        </CardFooter>
        </Card>
    <Card className="w-[390px]">
      <CardHeader>  
        <div className="flex items-center justify-between">
        <button className="rounded-full bg-black  p-2">
          <Icons.video className=" size-5 text-white" />
        </button>
        </div>
        </CardHeader>
        <CardFooter>
        Study at your own place
        </CardFooter>
        </Card>
  {/* <div className="flex flex-col space-y-8">
        <h1 className="font text-4xl">
          How It Works
        </h1>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          voluptates <br /> corrupti veritatis amet quia? Unde dicta nulla
          labore.
        </p>
      </div>

      <div className=" relative w-[600px]">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      </div> */}
  </div>
    </section>
  );
};

export default EducationFeatures;

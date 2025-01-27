import { Icons } from "@/components/global/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Video } from "lucide-react";
import React from "react";

const Achivments = () => {
  return (
    <section className="mx-auto max-w-7xl p-5">
      <div className="flex gap-x-20">
        <div className="flex flex-[3] gap-x-5">
          <Card className="w-[290px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <button className="rounded-full bg-black  p-2">
                  <ArrowRight className="size-5 text-white" />
                </button>
                <Badge className="h-fit rounded-full">Online</Badge>
              </div>
            </CardHeader>
            <CardFooter>
            Study at your own place
            </CardFooter>
          </Card>
          <Card className="w-[290px]">
            <CardHeader>
              <div className="flex items-center justify-between">
              <button className="rounded-full bg-black p-2">
                <Icons.video className=" size-5 text-white" />
              </button>
                <Badge className="h-fit rounded-full">Online</Badge>
              </div>
            </CardHeader>
            <CardFooter>
            Study at your own place
            </CardFooter>
          </Card>
        </div>
        <div className="flex-[3]">
          <div className="space-y-5">
            <div className="flex justify-between">
              <div>
                <h3 className="text-3xl font-bold">231+</h3>
                <p className="text-gray-600">Courses & subjects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">319+</h3>
                <p className="text-gray-600">Instructors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">72k+</h3>
                <p className="text-gray-600">Using the app</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img src="/avatar.JPG"
                    key={i}
                    className=" size-10 rounded-full border-2 border-white bg-gray-300"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">+ 72k Happy student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivments;

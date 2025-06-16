<<<<<<< HEAD
import { Footer } from "@/components/footer";
=======
'use client'
>>>>>>> 10a228b119cdd967aec38f16f276dc00abf68d19
import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

<<<<<<< HEAD

=======
>>>>>>> 10a228b119cdd967aec38f16f276dc00abf68d19
export default function Home() {
  return (
  <>
    <NavBar/>
    <Card className="w-full border-0 overflow-hidden">
      <CardContent className="p-0">
        <AspectRatio ratio={1920 / 987} className="relative">
          <img
            className="w-full h-full object-cover"
            alt="Off-road adventure showing vehicles on a mountain trail with text 'Amigos, Reboques & Aventuras'"
            src=""
          />
        </AspectRatio>
      </CardContent>
    </Card>
    </>
  );
}


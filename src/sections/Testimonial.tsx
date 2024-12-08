import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

import Card from "./Card";

const testimonials = [
  {
    name: "piyush",
    position: "Video & Graphics Designer",
    text: "Working with Atul Mishar was an absolute pleasure! They created a stunning, user-friendly website that perfectly represents my work as a video and graphics designer. The design is modern, responsive, and truly highlights my portfolio in a way I never imagined. Their attention to detail, creativity, and technical expertise exceeded my expectations! ",
    avatar: memojiAvatar1,
  },
  {
    name: "Anurag Biswas",
    position: " Travel and Tour Agent",
    text: "Collaborating with Atul Mishra was a game-changer for my travel business! They built a sleek and intuitive website that showcases our itineraries and makes it effortless for customers to select and book their dream vacations. The seamless design, interactive features, and smooth booking process have significantly boosted our customer engagement and sales!",
    avatar: memojiAvatar1,
  },
  {
    name: "piyush",
    position: "Video & Graphics Designer",
    text: "Working with Atul Mishar was an absolute pleasure! They created a stunning, user-friendly website that perfectly represents my work as a video and graphics designer. The design is modern, responsive, and truly highlights my portfolio in a way I never imagined. Their attention to detail, creativity, and technical expertise exceeded my expectations! ",
    avatar: memojiAvatar1,
  },
  {
    name: "Anurag Biswas",
    position: " Travel and Tour Agent",
    text: "Collaborating with Atul Mishra was a game-changer for my travel business! They built a sleek and intuitive website that showcases our itineraries and makes it effortless for customers to select and book their dream vacations. The seamless design, interactive features, and smooth booking process have significantly boosted our customer engagement and sales!",
    avatar: memojiAvatar1,
  },
  {
    name: "piyush",
    position: "Video & Graphics Designer",
    text: "Working with Atul Mishar was an absolute pleasure! They created a stunning, user-friendly website that perfectly represents my work as a video and graphics designer. The design is modern, responsive, and truly highlights my portfolio in a way I never imagined. Their attention to detail, creativity, and technical expertise exceeded my expectations! ",
    avatar: memojiAvatar1,
  },
  {
    name: "Anurag Biswas",
    position: " Travel and Tour Agent",
    text: "Collaborating with Atul Mishra was a game-changer for my travel business! They built a sleek and intuitive website that showcases our itineraries and makes it effortless for customers to select and book their dream vacations. The seamless design, interactive features, and smooth booking process have significantly boosted our customer engagement and sales!",
    avatar: memojiAvatar1,
  },
  
];

export const TestimonialsSection = () => {
  return <div className="py-16">
    <SectionHeader title={"Happy Clients"} eyebrow={"What Clients Say about me"} description={"Don't just take my word for it. See what my client have  say about me"}/>
    
    <div className="mt-10 lg:mt-24 flex overflow-x-clip  [mask-image:linear-gradient(to_left,transparent,black_20%,black_90%,transparent)]">
      <div className="flex flex-none gap-6 md:p-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
        {
            testimonials.map((testimonial)=>(
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300 ">
                    <div className=" w-full flex gap-4 items-center">

                    <div className="size-14 rounded-full bg-gray-700 backdrop:blur inline-flex items-center flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>

                    </div>
                    <div className="text-gray-400 font-semibold">

                   <h1 className="text-gray-200 font-semibold">{testimonial.name}</h1>
                  <h2>{testimonial.position}</h2>
                    </div>
                    </div>
                  <p className="text-md leading-5 mt-2">{testimonial.text}</p>
                  </Card>
                
            ))
        }
        </div>
    </div>
  </div>;
};

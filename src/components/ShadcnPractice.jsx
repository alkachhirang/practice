import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShadcnPratice = () => {
  const myArray = [
    {
      title: "Accordion 1",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
    {
      title: "Accordion 2",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
    {
      title: "Accordion 3",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
    {
      title: "Accordion 4",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
    {
      title: "Accordion 5",
      accitem: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt nostrum dolor blanditiis, atque beatae, perferendis fuga repellendus sit consectetur earum nam deserunt suscipit provident odit dicta harum unde veniam!",
        },
      ],
    },
  ];
  return (
    <div className="bg-black min-h-screen flex items-center ">
      <div className="container max-w-[1164px] mx-auto">
        <h1 className='text-white text-center text-[48px] pb-[30px]'>Accordian</h1>
        <Accordion type="single" collapsible className="w-full">
          {myArray.map((obj, id) => (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger className="text-white font-medium list-none decoration-transparent text-3xl">
                {obj.title}
              </AccordionTrigger>
              <AccordionContent className="text-white max-w-[950px] opacity-[70%] text-base font-normal">
                {obj.accitem.map((item, index) => (
                  <p key={index}>{item.description}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default ShadcnPratice;
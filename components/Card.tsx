import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-[#fff] shadow-sm rounded-md p-6 m-4 flex flex-col gap-3 lg:w-96 lg:m-0 lg:p-8 lg:gap-4 lg:mt-8">
      <Image src="/icon-quotes.svg" alt='"' width={13} height={12} />
      <p className="text-[11px] font-openSans text-veryDarkBlue lg:text-[15px]">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex gap-2 items-center">
        <div className="relative w-6 h-6 lg:w-7 lg:h-7">
          <Image
            className="rounded-full object-contain"
            src="/avatar-testimonial.jpg"
            alt="avatar testimonial"
            fill
          />
        </div>
        <div>
          <h3 className="text-xs font-raleway font-bold text-veryDarkBlue">
            Kyle Burton
          </h3>
          <h4 className="text-[8px] font-openSans lg:text-[9px]">
            Founder & CEO, Huddle
          </h4>
        </div>
      </div>
    </div>
  );
}

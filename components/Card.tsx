import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-[#fff] shadow-sm rounded-md p-6 m-4 flex flex-col gap-3">
      <Image src="/icon-quotes.svg" alt='"' width={13} height={12} />
      <p className="text-[11px] font-openSans">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex gap-2 items-center">
        <Image
          className="rounded-full w-6 h-6"
          src="/avatar-testimonial.jpg"
          alt="avatar testimonial"
          width={24}
          height={24}
        />
        <div>
          <h3 className="text-xs font-raleway font-bold text-veryDarkBlue">
            Kyle Burton
          </h3>
          <h4 className="text-[8px] font-openSans">Founder & CEO, Huddle</h4>
        </div>
      </div>
    </div>
  );
}

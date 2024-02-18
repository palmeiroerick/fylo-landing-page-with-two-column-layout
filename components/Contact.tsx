import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-[19px]">
        <Image
          className="mt-1 h-[18px]"
          src="/icon-phone.svg"
          alt=""
          width={18}
          height={18}
        />
        <p className="font-openSans text-lightGray">Phone: +1-543-123-4567</p>
      </div>
      <div className="flex gap-[17px]">
        <Image
          className="mt-1 h-4"
          src="/icon-email.svg"
          alt=""
          width={20}
          height={16}
        />
        <p className="font-openSans text-lightGray">example@fylo.com</p>
      </div>
    </div>
  );
};

export default Contact;

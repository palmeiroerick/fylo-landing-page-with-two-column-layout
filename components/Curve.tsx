import Image from "next/image";

export default function Curve() {
  return (
    <>
      <Image
        className="block lg:hidden"
        src="/bg-curve-mobile.svg"
        alt="curve"
        width={1440}
        height={203.52}
      />
      <Image
        className="hidden lg:block"
        src="/bg-curve-desktop.svg"
        alt="curve"
        width={1920}
        height={152}
      />
    </>
  );
}

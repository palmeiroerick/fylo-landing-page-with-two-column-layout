import Image from "next/image";

type IllustrationProps = {
  type: 1 | 2;
};

export default function Illustration({ type }: IllustrationProps) {
  if (type === 1) {
    return (
      <div className="relative w-full h-60 lg:w-1/2 lg:h-[480px]">
        <Image
          className="object-contain"
          src="/illustration-1.svg"
          alt="illustration"
          fill
        />
      </div>
    );
  } else {
    return (
      <div className="relative w-full h-60 lg:w-1/2 lg:h-[480px]">
        <Image
          className="object-contain"
          src="/illustration-2.svg"
          alt="illustration"
          fill
        />
      </div>
    );
  }
}

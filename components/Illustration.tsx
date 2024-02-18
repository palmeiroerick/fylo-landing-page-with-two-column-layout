import Image from "next/image";

type IllustrationProps = {
  type: 1 | 2;
};

export default function Illustration({ type }: IllustrationProps) {
  if (type === 1) {
    return (
      <Image
        src="/illustration-1.svg"
        alt="illustration"
        width={1132.93}
        height={839.14}
      />
    );
  } else {
    return (
      <Image
        src="/illustration-2.svg"
        alt="illustration"
        width={1077.87}
        height={813.02}
      />
    );
  }
}

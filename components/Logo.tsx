import Image from "next/image";

type LogoProps = {
  white?: boolean;
};

export default function Logo({ white }: LogoProps) {
  const src = white ? "/logo-white.svg" : "/logo.svg";

  const variants = white ? "h-12 w-40" : "h-6 w-20";

  return (
    <div className={`${variants} relative `}>
      <Image className="object-contain" src={src} alt="fylo logo" fill />
    </div>
  );
}

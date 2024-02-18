type TitleProps = {
  as: "h1" | "h2";
  className?: string;
  children: string;
};

export default function Title({ as, className, children }: TitleProps) {
  const Tag = as;
  const variants =
    as == "h1"
      ? "text-2xl font-openSans text-veryDarkBlue"
      : "text-[17px] font-raleway";

  return (
    <Tag
      className={`${className} ${variants} text-center font-bold lg:text-start`}
    >
      {children}
    </Tag>
  );
}

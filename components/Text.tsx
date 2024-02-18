type TextProps = {
  className?: string;
  children: string;
};

export default function Text({ className, children }: TextProps) {
  return (
    <div className={`${className} font-openSans text-[15px] font-medium`}>
      {children}
    </div>
  );
}

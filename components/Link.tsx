type LinkProps = {
  children: string;
  type: "header" | "main" | "footer";
};

export default function Link({ children, type }: LinkProps) {
  const variants = {
    header: "text-[13px] font-openSans text-veryDarkBlue text-sm",
    main: "text-sm font-openSans text-moderateCyan border-b pr-5 bg-arrow bg-right bg-no-repeat border-moderateCyan m-auto lg:m-0 lg:text-lg lg:w-48",
    footer: "font-raleway text-lightGray font-semibold",
  };

  return <a className={variants[type]}>{children}</a>;
}

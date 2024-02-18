type FormProps = {
  type: 1 | 2;
};

export default function Form({ type }: FormProps) {
  return (
    <form
      className={`${type === 1 ? "gap-4 lg:flex-row" : "mx-4 gap-2 lg:w-1/2 lg:m-0 lg:gap-3"} flex flex-col`}
    >
      <label htmlFor="email" className="hidden" />
      <input
        id="email"
        type="text"
        placeholder={type === 1 ? "Enter your email..." : "email@example.com"}
        className={`${type === 1 ? "lg:w-80" : ""} text-sm font-raleway text-desaturatedBlue h-10 border rounded-[4px] pl-4 lg:h-12`}
      />
      <button
        className={`${type === 1 ? "lg:w-60" : "text-sm lg:w-48"} bg-brightBlue text-lightGrayishBlue font-raleway cursor-pointer font-semibold h-10 rounded-[4px] lg:h-12`}
      >
        {type === 1 ? "Get Started" : "Get Started For Free"}
      </button>
    </form>
  );
}

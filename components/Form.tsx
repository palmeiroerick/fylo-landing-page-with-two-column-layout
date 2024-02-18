type FormProps = {
  type: 1 | 2;
};

export default function Form({ type }: FormProps) {
  return (
    <form className={`${type === 1 ? "gap-4" : "mx-4 gap-2"} flex flex-col`}>
      <label htmlFor="email" className="hidden" />
      <input
        id="email"
        type="text"
        placeholder={type === 1 ? "Enter your email..." : "email@example.com"}
        className="text-sm font-raleway text-desaturatedBlue h-10 border rounded-[4px] pl-4"
      />
      <button
        className={`${type === 1 ? "" : "text-sm"} bg-moderateCyan text-lightGrayishBlue font-raleway cursor-pointer font-semibold h-10 rounded-[4px]`}
      >
        {type === 1 ? "Get Started" : "Get Started For Free"}
      </button>
    </form>
  );
}

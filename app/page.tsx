import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Curve from "@/components/Curve";
import Form from "@/components/Form";
import Illustration from "@/components/Illustration";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import SocialIcons from "@/components/SocialIcons";
import Text from "@/components/Text";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <header className="flex p-6 flex-row justify-between items-center lg:p-12">
        <Logo />
        <nav className="flex flex-row gap-6">
          <Link type="header">Features</Link>
          <Link type="header">Team</Link>
          <Link type="header">Sign In</Link>
        </nav>
      </header>
      <main>
        <section className="flex flex-col gap-8 p-7 my-12 lg:p-12 lg:flex-row-reverse lg:mb-24">
          <Illustration type={1} />
          <div className="flex flex-col gap-8 lg:w-1/2 lg:gap-6">
            <Title as="h1" className="lg:text-[42px] lg:leading-normal">
              All your files in one secure location, accessible anywhere.
            </Title>
            <Text className="text-veryDarkBlue text-center lg:text-[20px] lg:text-start">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </Text>
            <Form type={1} />
          </div>
        </section>
        <Curve />
        <section className="px-6 py-12 bg-lightGrayishBlue flex flex-col gap-6 lg:p-12 lg:flex-row-reverse lg:gap-8 lg:py-24">
          <Illustration type={2} />
          <div className="flex flex-col gap-6 lg:w-1/2">
            <Title as="h2" className="text-veryDarkBlue lg:text-[40px]">
              Stay productive, wherever you are
            </Title>
            <Text className="text-desaturatedBlue lg:text-veryDarkBlue lg:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </Text>
            <Text className="text-desaturatedBlue lg:text-veryDarkBlue lg:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </Text>
            <Link type="main">See how Fylo works</Link>
            <Card />
          </div>
        </section>
        <section className="bg-desaturatedBlue p-10 flex flex-col gap-4 pb-14 lg:p-12 lg:flex-row lg:gap-52">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <Title as="h2" className="text-lightGrayishBlue lg:text-4xl">
              Get early access today
            </Title>
            <Text className="text-lightGrayishBlue text-center lg:text-start lg:text-lg">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </Text>
          </div>
          <Form type={2} />
        </section>
      </main>
      <footer className="bg-veryDarkBlue px-10 flex flex-col gap-8 py-16 lg:p-12">
        <Logo white />
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:mr-64">
          <Contact />
          <nav className="flex flex-col gap-4">
            <Link type="footer">About Us</Link>
            <Link type="footer">Jobs</Link>
            <Link type="footer">Press</Link>
            <Link type="footer">Blog</Link>
          </nav>
          <nav className="flex flex-col gap-4">
            <Link type="footer">Contact Us</Link>
            <Link type="footer">Terms</Link>
            <Link type="footer">Privacy</Link>
          </nav>
          <SocialIcons />
        </div>
      </footer>
    </>
  );
}

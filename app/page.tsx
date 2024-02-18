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
      <header className="flex p-6 flex-row justify-between items-center">
        <Logo />
        <nav className="flex flex-row gap-6">
          <Link type="header">Features</Link>
          <Link type="header">Team</Link>
          <Link type="header">Sign In</Link>
        </nav>
      </header>
      <main>
        <section className="flex flex-col gap-8 p-7 my-12">
          <Illustration type={1} />
          <Title as="h1">
            All your files in one secure location, accessible anywhere.
          </Title>
          <Text className="text-veryDarkBlue text-center">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </Text>
          <Form type={1} />
        </section>
        <Curve />
        <section className="px-6 py-12 bg-lightGrayishBlue flex flex-col gap-6 ">
          <Illustration type={2} />
          <Title as="h2" className="text-veryDarkBlue">
            Stay productive, wherever you are
          </Title>
          <Text className="text-desaturatedBlue">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Text>
          <Text className="text-desaturatedBlue">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </Text>
          <Link type="main">See how Fylo works</Link>
          <Card />
        </section>
        <section className="bg-desaturatedBlue p-10 flex flex-col gap-4 pb-14">
          <Title as="h2" className="text-lightGrayishBlue">
            Get early access today
          </Title>
          <Text className="text-lightGrayishBlue text-center">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </Text>
          <Form type={2} />
        </section>
      </main>
      <footer className="bg-veryDarkBlue px-10 flex flex-col gap-8 py-16">
        <Logo white />
        <div className="flex flex-col gap-14">
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

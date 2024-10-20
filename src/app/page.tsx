import Header from "@/components/Header";
import SectionFour from "@/components/SectionFour";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {

  return (
    <div className="w-full min-h-screen">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

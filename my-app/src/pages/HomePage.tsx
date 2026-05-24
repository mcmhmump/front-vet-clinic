import { Banner } from "../components/Banner";
import { AboutUs } from "../components/AboutUs";
import { Comand } from "../components/Comand";
import { Patients } from "../components/Patients";
import { Services } from "../components/Services";
import { Comments } from "../components/Comments";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Comand />
      <Patients />
      <Services />
      <Comments />
      <Footer />
    </>
  );
};
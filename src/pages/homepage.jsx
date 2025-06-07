import React from "react";
import Navbar from "../components/navbar";
// import Coursecard from "../components/coursescard";
import Heroslider from "../components/heroslider";
import Categories from "../components/categories";
import TestimonialSection from "../components/testimonials";
import NewsletterSection from "../components/newsletter";
import Plan from "../components/plan";
import Footerslider from "../components/footerslider"
import Footer from "../components/footer";
import Footertestimonials from "../components/Footertestimonials";
import Buttomfooter from "../components/buttomfooter";
import Learninggoal from "../components/learningGoals";
import TopFooter from "../components/topfooter";
import Trandingskill from "../components/trandingskill";
import CourseSlider from "../components/courseslider";
import FAQSection from "../components/featuredcomponent/faq";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Heroslider />
      </div>

      <div className="pt-0">
        <Categories />
      </div> 

      {/* <div>
         <Coursecard />
      </div> */}
    
    <div>
      <CourseSlider/>
    </div> 

    <div>
      <Trandingskill/>
    </div>

      <div class ="pt-8">
        <TestimonialSection />
      </div>

      <div className="pt-8">
        <Plan />
      </div>

      <div className="pt-8">

        <Learninggoal/>
      </div>

      <div className="pt-8">
        <FAQSection/>
      </div>
      
      <div className="pt-8">
        <Footerslider />
      </div>
      <div>
        <Footertestimonials />
      </div>

      <div className="pt-8">
        <NewsletterSection />
      </div>
      <div className="pt-6">
        <TopFooter/>
      </div>
      <div className="">
        <Footer />
      </div>
      <div>
        <Buttomfooter/>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import "./AboutPage.css";
import FeedBack from './FeedBack';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
      <div className="Scrollabout" id="about">
        <h2 className="Abouth2">About Us</h2>
        <div className="FlexContainer">
          <div className="Text">
            <p>
              Tracenet is a website that aims to help people find lost people and reunite them with their loved ones.
              It provides a platform where users can post information about lost person, such as descriptions, photos, and contact details.
              This allows individuals who have found lost people to easily connect with their loved ones.
              The website features a user-friendly interface that allows users to search for lost people based on various criteria, such as location, identification mark, gender, age, etc.
              It also provides a feature for users to post details about people they have found, increasing the chances of successful reunions.
              Tracenet promotes community engagement and cooperation by enabling users to communicate and coordinate directly through the platform.
              It also offers additional functionalities such as user profiles, where individuals can manage their lost and found listings, and a notification system to receive updates on matched items.
              
            </p>
          </div>
          <div className="ImageContainer">
            <a href="https://ibb.co/W2BMQLK"><img src="https://i.ibb.co/kSqwptc/79z-2203-w012-n001-51c-p6-51.jpg" alt="79z-2203-w012-n001-51c-p6-51" border="0" /></a>
          </div>
        </div>
        <h3 className="SubHeading">Our Mission</h3>
        <div className="Flex2Container">

          <div className="Image1Container">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/dL96ZMg/bg6.png" alt="bg6" border="0" /></a>
          </div>
          <p>
            At Tracenet, we are committed to:
            Assisting in the search and recovery of missing individuals.
            Providing a centralized database of information about missing persons to aid concerned parties, authorities, and the general public.
            Facilitating collaboration and information sharing to increase the chances of locating missing persons.
            Offering a user-friendly interface and advanced search algorithms to optimize the search process.
            Tracenet promotes community engagement and cooperation by enabling users to communicate and coordinate directly through the platform.
            It also offers additional functionalities such as user profiles, where individuals can manage their lost and found listings, and a notification system to receive updates on matched items.
            The goal of Tracenet is to simplify the process of finding and returning lost people, leveraging the power of technology and online connectivity to connect people who have lost people with those who have found them.
          </p>
        </div>

        <h3 className="SubHeading">Our Goals</h3>
        <div className="Flex2Container">
          <p>
            Enable individuals to report missing persons and provide essential details to aid in their search.
            Create a centralized database to gather and store information about missing individuals, making it easily accessible to concerned parties, authorities, and the public.
            Foster collaboration and information sharing between users to create a strong network of support.
            Leverage technology and advanced search algorithms to improve the efficiency of the search and recovery process.
          </p>
          <div className="Image2Container">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/jZ45cPg/bg3.png" alt="bg3" border="0" /></a>
          </div>
          <div className="Text">

          </div>
        </div>



        <h3 className="SubHeading">How Tracenet Works?</h3>
        <div className="Flex2Container">

          <div className="Image3Container">

            <a href="https://imgbb.com/"><img src="https://i.ibb.co/CQF6C9z/bg4.png" alt="bg4" border="0" /></a>
          </div>
          <p>
            Tracenet provides a user-friendly platform where individuals can report cases of missing persons and share relevant information.
            Users can create profiles, upload photos, and provide detailed descriptions of missing individuals.
            Our system employs advanced search algorithms and matching techniques to compare reported missing persons with any found individuals or potential matches.
            Tracenet aims to connect people and provide a platform for communication and coordination between users, law enforcement agencies, and relevant organizations.
          </p>

        </div>

        <h3 className="SubHeading">Join Tracenet</h3>
        <div className="Flex2Container">
          <p>
            We invite you to join Tracenet and become part of a community dedicated to reuniting families and bringing hope to those in need.
            Together, we can make a difference and contribute to the search for missing individuals.
            Feel free to customize this text according to your specific project requirements, tone, and objectives.
          </p>
          <div className="Image3Container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/WBnL7xY/bg7.png" alt="bg7" border="0" /></a>
          </div>

        </div>
      </div>
      <h2 className="Abouth2">Feedback</h2>
      <div className="feedback">
        <div className='c1'>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/whCwh06/bg2.png" alt="bg2" border="0" /></a>
        </div>
        <div className='c2'>

          <FeedBack></FeedBack>
        </div>
      </div>

      <h2 className="Abouth2">Contact Us</h2>
      <Footer></Footer>


    </div>
  );
};

export default AboutPage;

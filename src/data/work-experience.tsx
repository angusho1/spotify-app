import { WorkExperience } from "../types/Experience.types";
import teLogo from '../assets/logos/te-logo.png';
import leafiLogo from '../assets/logos/leafi-logo.png';
import eUBCLogo from '../assets/logos/e-ubc-logo.jpg';
import { Anchor } from "@mantine/core";

const anchorProps = {
    fw: 500,
    sx: {
        color: 'inherit',
    }
}

export const WORK_EXPERIENCES: WorkExperience[] = [
    {
        company: 'ThoughtExchange',
        companyDescription: 'ThoughtExchange offers enterprise software for organizations to engage with their stakeholders and to accelerate decision-making.',
        position: 'Full Stack Developer Intern',
        date: 'Fall 2022 • 4 months • Full Time',
        text: (
            <>
                At ThoughtExchange, I interned with the Data Analysis and Visualization team, which focuses on researching and delivering new tools and algorithms that push the envelope for the core product. For my main project, I built an internal analytics tool using Python and React to help suggest key insights and actions for customers who have run exchanges with their audiences. The tool produced data visualizations that ended up going into customer reports for several high-value clients, who noted these visualizations as a highlight of their report!
                <br />
                <br />
                This internship allowed me to become much more familiar and skilled with React, as it was my first professional experience working with the framework. I also had the opportunity to collaborate and work with PMs and other engineers around the company, which I hope to get more of in my next internship.
            </>
        ),
        imgUrl: teLogo,
        companyUrl: 'https://thoughtexchange.com/',
    },
    {
        company: 'Leafi Home',
        companyDescription: 'Leafi Home is developing a smart home solution to automate existing window blinds, allowing them to be controlled by a mobile app and a smart home ecosystem.',
        position: 'Software Engineer Intern',
        date: 'Fall 2021 - Summer 2022 • 12 months • Part Time',
        text: (
            <>
                During my school semesters, I worked on the software (cloud and mobile) side of Leafi's product, playing a critical role in the development leading up to (and including) the beta testing stage. This was my first experience working extensively with a cloud-based architecture, as I integrated backend services in AWS with the frontend mobile app in Ionic and Angular. I developed important features like push notifications, device Wi-Fi setup, calibration workflows, and device actions.
                <br />
                <br />
                It was challenging working with an architecture that involved real time communication between the mobile app, cloud, hardware device, and other 3rd party services like Google Assistant and Alexa. The experience was also highly rewarding, as I was able to witness the product go into beta testers' homes last summer. I even had the opportunity to interact with some testers, which allowed me to fully understand what the user experience was like and how I could make further improvements to the software.
            </>
        ),
        imgUrl: leafiLogo,
        companyUrl: 'https://leafihome.com/',
    },
    {
        company: 'entrepreneurship@UBC',
        companyDescription: 'entrepreneurship@UBC is a startup incubator and accelerator run by the University of British Columbia that has supported over 650 UBC-based startups.',
        position: 'Software Development Intern',
        date: 'Winter 2021 - Summer 2021 • 8 months • Full Time',
        text: (
            <>
                At my first co-op, I worked with 4 different early-stage tech startups for 2 months each, developing PoCs, MVPs, and helping to scale up their codebases. Because of the limited time I had with each venture, I needed to learn their tech stack quickly while developing a tight scope for the project. I learned new skills like Angular, C#, ASP.NET Core, Tornado, and AWS, all on the job.
                <br />
                <br />
                I'm grateful for being able to work on some interesting projects. For <Anchor {...anchorProps} href="https://www.storagehotel.ca/" target="_blank">Storagehotel</Anchor>, I built an inventory management system MVP in the MEAN stack, for which I designed a hierarchical tree structure for storing items. At <Anchor {...anchorProps} href="https://www.neupeak.com/" target="_blank">Neupeak Robotics</Anchor>, I built a prototype web app in Python and HTML/CSS/JavaScript that could monitor and control <Anchor {...anchorProps} href="https://www.ros.org/" target="_blank">ROS (Robot Operating System)</Anchor> nodes. I learned how to use WebSockets to maintain real-time bidirectional communication between the UI and the server's robot nodes.
            </>
        ),
        imgUrl: eUBCLogo,
        companyUrl: 'https://entrepreneurship.ubc.ca/',
    },
];

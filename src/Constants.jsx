import bOne from '../src/assets/budget-app/one.webp'
import pOne from '../src/assets/potscare-package/one.webp'
const Constants = {
    works: {
        company: ["Aperia Solutions", "Potscare LLC", "UTDallas"],
        data: [
            {
                company: "Aperia Solutions",
                information: {
                    title: "Software Enigneer",
                    location: "Addison, TX",
                    time: "08/2021 - Current",
                    description: [
                        "Developing form and template builder application that fully supports customization such as fields' settings and layouts using drag and drop techniques.", 
                        "Performing manual and automated testing to ensure features are implemented according to specifications.",
                        "Working closely with back-end developers, product owners and designers to build web application that supports \nmerchants and services to create appointments with customers. ",
                        "Developed features for customer relation management web application to set up permissions and settings for banking, and financial clients using React and Typescript"
                    ]
                }
            },
            {
            company: "Potscare LLC",
            information: {
                title: "Software Engineer",
                location: "Colleyville, TX",
                time: "01/21 - 07/21",
                description: [
                    "Developed and launched guidance app on iOs platform for Pots symptom treatment.",
                    "Built user interface for medical application used in doctor's office for scheduling appointments",
                    "Participated in code review and collaborated with backend developers to \narchitect the frontend of the application."
                ]
            }
        },
        {
            company: "UTDallas",
            information: {
                title: "Outreach Instructor",
                location: "Richardson, TX",
                time: "01/19 – 08/19",
                description: [
                    "Taught and introduced K-12 students coding languages such as Javascript, Python",
                    "Managed coding classes, assisted instructors, and helped with day to day activities.",
                ]
            }
        },
        ]
    },
    skils: [
        {
            name: "Javascript / Typescript",
        },
        {
            name: "HTML and (S)CSS",
        },
        {
            name: "ReactJs",
        },
        {
            name: "Vue",
        },
        {
            name: "C# and .NET",
        },
        {
            name: "Swift and Xcode"
        }
    ],
    projects: [
        {
            name: "Expensify App",
            type: "Web",
            tech: "React / Bootstrap / HTML & (s)CSS",
            photo: `${bOne}`,
            link: "http://expensify-budget-app.s3-website.us-east-2.amazonaws.com/",
            summary:
            "An single-page application that helped users track their income and expenses.",
        },
        {
            name: "POTS care Package",
            type: "Mobile",
            photo: `${pOne}`,
            tech: "Swift / Xcode / C# / Firebase",
            link: "https://potscarepackage.com/product/pots-care-package/?gclid=CjwKCAjwgb6IBhAREiwAgMYKRm4o4jFAve6kzvlUBRiU1kccH3NPMk34mvDggt-Y6pngpgLwQTvCxRoCwUUQAvD_BwE",
            summary:
            "An app that provides 3 months of advice and teaching for POTS patients",
        },
    ],
    media: [
        {
            name: "Github",
            link: "https://github.com/To4n",
            icon: "fa fa-github icon"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/toan-d-dao/",
            icon: "fa fa-linkedin"
        }
    ]
}
export default Constants;
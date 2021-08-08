import bOne from '../src/assets/budget-app/one.webp'
import pOne from '../src/assets/potscare-package/one.webp'
const Constants = {
    works: {
        company: ["Potscare LLC", "UTDallas"],
        data: [{
            company: "Potscare LLC",
            information: {
                title: "Software Engineer",
                location: "Colleyville, TX",
                time: "01/21 - 07/21",
                description: [
                    "Developed and published mobile application in native iOs environment.",
                    "Developed Vue frontend for web application in Typescript for medical solution.",
                    "Participated in code review."
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
                    "Taught students coding languages such as Javascript, Python, and Visual Programming Language.",
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
            name: "React",
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
        },
        {
            name: "Gmail",
            link: "",
            icon: "fa fa-envelope"
        },
    ]
}
export default Constants;
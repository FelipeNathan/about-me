import './style.css'
import 'alpinejs'

window.getJobs = function(){

    return {
        jobs: [{
            company: 'TOTVS S.A.',
            period: 'Aug 2020 / Current',
            projects: [{
                tab: 'description',
                name: "Fluig Platform",
                description: "Fluig is a platform that aggregates several TOTVS services such as BPM, ECM, LMS and others",
                participations: ["I perform maintenance and create new resources according to customer demands"],
            },{
                tab: 'description',
                name: "Fluig Storage",
                description: "A microservice integrated with AWS that aims to manage files imported within the Fluig Platform",
                participations: ["In it I implemented the ability to generate a public JWT token for uploading files without the need to be logged in the system and also the query for using AWS S3 through AWS Athena and AWS Cloudl Trail"],
            }],
            techs: ['Springboot', 'Hibernate', 'Java 11', 'AWS', 'Jboss', 'MySQL'],
            logo: 'assets/totvs.jpg',
            order: 1,
        },{
            company: 'Varejonline',
            period: 'Jan 2016 / Jul 2020',
            projects: [{
                tab: 'description',
                name: "Varejonline ERP",
                description: "Business management software that controls sales, inventory, finance, accounting and tax, generating digital information related to SPED's demands and obligations",
                participations: [
                    'Implementation of Electronic Payment, exchange of files between the ERP and the company responsible for transacting bank payments',
                    'Migration of screens developed in Flex to HTML5 and Angular 9',
                ],
            },{
                tab: 'description',
                name: "Varejonline PDV",
                description: 'Point of sale (POS) desktop software, operates "On Line" or "Off Line", when without internet and as a contingency option. Integrated with dedicated TEF',
                participations: [
                    'Migration from java 7 to java 8 from legacy POS',
                    'Implementation of the integration of the POS with the Mercado Pago through a microservice',
                    'Implementation of the sending of Electronic Tax Coupon through the MF-e (exchange of files with the integrating apparatus of the state of Ceará)',
                    'POS integration with TEF (credit card machine)',
                ],
            },{
                tab: 'description',
                name: "Routed Messaging",
                description: "Solution for mapping callback between microservice and third party service",
                participations: [
                    'Creation of a message routing due to the load balancer not returning the integration message to the server connected to the POS via websocket'
                ],
            },{
                tab: 'description',
                name: "VO Mobile",
                description: "Mobile application developed in angular with sales report by branches and ranking of products and sellers",
                participations: [
                    'Implementation of Vendor Ranking and Product Ranking report in an application made in Ionic',
                ]
            },{
                tab: 'description',
                name: "Check Windows Session",
                description: "Web application to show if there are any users logged on the shared server",
                participations: [
                    'Creation of a web application that executes commands via cmd on the server to validate if there is any user connected to the windows server (shared user) with Kotlin and Thymeleaf',
                ],
            }],
            techs: ['Springboot', 'Hibernate', 'Java 8', 'PostreSQL', 'Oracle', 'Tomcat', 'Angular 9', 'jQuery', 'Java SWT', 'ActiveMQ', 'Ionic', 'Typescript', 'Spring Stomp', 'Kotlin'],
            logo: 'assets/varejonline.jpg',
            order: 2,
        },{
            company: 'Neomind',
            period: 'Jul 2015 / Jan 2016',
            projects: [{
                tab: 'description',
                name: "Fusion Platform",
                description: "Fusion for document management and process management created by Neomind",
                participations: [
                    'Dynamic report creation, transforming the Fusion dynamic form into a structure for printing on ireport',
                    'Creation and maintenance of customer workflows',
                    `Creation of the new logtime functionality, listing all projects in the user's name to inform the hours worked`,
                ],
            }],
            techs: ['Java EE', 'Hibernate', 'Java 7', 'Tomcat', 'SQL Server', 'AngularJS', 'jQuery'],
            logo: 'assets/neomind.jpg',
            order: 3,
        },{
            company: 'Linx',
            period: 'Jul 2012 / Jul 2015',
            projects: [{
                tab: 'description',
                name: "Microvix ERP",
                description: "Microvix ERP is a system for business management that meets all the routines of networks and franchises, supporting the franchisor-franchisee relationship and offering efficient solutions for other financial processes",
                participations: [
                    'Maintenance of ERP, bug fixes and business rules with ASP language',
                    'Implementation of ASP-ORM, mapping database tables into ASP objects respecting the concepts of object-oriented programming',
                    'Migration of pages with functional programming to pages with object orientation and MVC standard (ASP, JQuery)',
                    'Creation of the glasses and / or frames sales routine, validating product aggregation rules (C#)',
                ],
            }],
            techs: ['ASP3', 'C#', 'SQL Server', 'IIS', 'jQuery'],
            logo: 'assets/linx.jpg',
            order: 4,
        }, {
            company: 'Staff Informática',
            period: 'Jan 2012 / Jun 2012',
            projects: [{
                tab: 'description',
                name: "GECEX",
                description: "Foreign trade management system",
                participations: [
                    'Internship in programming with Powerbuilder, systems analysts spent few demands to be executed, the most common being the exchange of labels',
                ],
            }],
            techs: ['Power Builder'],
            logo: 'assets/staff.jpg',
            order: 5,
        }].sort((j1, j2) => j1.order <= j2.order ? -1 : 1)
    }
}

window.reverse = (order) => order % 2 == 0

window.getInfo = function() {
    return {
        name: "Felipe Nathan Campigoto",
        position: "Software Engineer",
        age: `${getAge()} years old`,
        contacts: [
            "+55 47 99658-2561",
            "ncampigoto@gmail.com"
        ],
        location: "Joinville - Santa Catarina - Brasil",
        resume: `
            <p class="text-center"> In a few words, I'm a software developer that accepts challenges, I already worked with desktop, web and mobile applications. </p>
            <p class="text-center"> One of my favorites hobbies is learn about programming languages drinking some tasty beer, sure, if don't have a drop of coffee ;) </p>
            <p class="mt-2 text-center"> And to rest, I like to get stressed with online games or watch some series with my family </p>
        `.trim()
    }
}

function skills(name, level, tools) {
    return {
        name,
        level,
        tools,
        showTools: false,
    }
}

window.getSkills = function() {
    return {
        skills: [
            new skills('Java', 95, ['Spring', 'Springboot', 'Spring Stomp', 'Hibernate', 'Tomcat', 'Jboss', 'SWT', 'Kotlin', 'REST API']),
            new skills('Javascript',   90,  ['Vanilla', 'TypeScript', 'jQuery', 'Angular', 'AngularJS', 'React', 'REST API', 'NodeJS', 'JSON', 'HTML', 'CSS', 'Ionic']),
            new skills('SQL',   80,  ['SQL Server', 'MySQL', 'Postgre', 'PL/SQL', 'MongoDB', 'SQLite']),
            new skills('CI/CD',   85,  ['Git', 'Github', 'Github Actions', 'Git Stash', 'Bit Bucket', 'Jenkins', 'Bamboo']),
            new skills('Architecture',   70,  ['Docker', 'ActiveMQ', 'RabbitMQ', 'Monolith', 'Microsservices']),
            new skills('Android',   45,  ['Kotlin', 'MVP', 'Jetpack', 'Dagger 2', 'Material Design', 'Gradle']),
            new skills('AWS',   43,  ['S3', 'ClouldTrail', 'Athena', 'IAM']),
            new skills('Linux',   40,  ['Shell', 'Bash', 'ZSH']),
            new skills('Ruby',   30,  ['Bundle', 'Rails', 'Puma']),
        ].sort((s1, s2) => s1.level >= s2.level ? -1 : 1)
    }
}

window.getEducations = function() {
    return {
        items: [{
            name: 'Universidade Sociedade Educacional de Santa Catarina',
            period: '2011 / 2015',
            course: `Bacharelor's Degree, Information System`,
            local: 'Joinville, Brazil'
        }]
    }
}

const getAge = function() {
    const birthday = new Date(1991, 3, 13).getTime();
    const now = new Date().getTime();
    const age = (now - birthday) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(age);
}
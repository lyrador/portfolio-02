export default {
	bio: {
		about: {
			text: [
				"Hey there! &#128075;",
				"I'm Daryl. I’m currently a Penultimate Year Information Systems Undergraduate at the National University of Singapore.",
				"I'm a developer, passionate in integrating IT solutions into businesses with a strong desire to learn, having a broad scope of interests ranging from game development and music to content creation. Given my technical background, leadership experience and innovative mindset, I believe I would be a great team player and contribute significantly to projects, making me a great asset to any company. .",
				"I am currently looking for opportunities to further hone my skills and explore the different development roles in the realm of computing.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, feel free to send me an email at darylyee.jh@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, Java, Lua",
			color: "1",
			percentage: "90",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, ReactJS",
			color: "6",
			percentage: "80",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Database",
			skillName: "Oracle, Glassfish",
			color: "3",
			percentage: "60",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS, CSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "80",
		},
		// {
		// 	title: "Tools",
		// 	skillName: "Postman, Chrome DevTools",
		// 	color: "3",
		// 	percentage: "80",
		// },
		{
			title: "Editor",
			skillName: "VS Code, Netbeans, IntelliJ",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "NUS Voices Website",
				image: "images/chongjianshuguang-thumbnail-S.jpg",
				summary:
					"Developed a front end website for my recreational mandopop club to provide more information about the club",
				preview: "https://nusvoices.com/",
				techStack: [
					"ReactJS",
					"Bootstrap",
					"JavaScript",
					"Netlify",
				],
			},
		],
		software: [
			{
				projectName: "NUS Society",
				image: "images/nusociety-S.png",
				summary:
					"An all-in-one co-curricular activities portal for students with management capabilities, providing a one-stop platform to explore and sign up for societies and events, networking within and across organisations.",
				preview:
					"https://github.com/lyrador",
				techStack: ["Angular", "JSF", "JavaScript", "Glassfish"],
			},
			{
				projectName: "Hotel Booking System",
				image: "images/hotel.jpg",
				summary:
					"Hotel Booking System.",
				preview:
					"https://github.com/lyrador",
				techStack: ["Java", "Glassfish"],
			},
			{
				projectName: "Library Management System",
				image: "images/library-S.jpg",
				summary:
					"Database and UI Focused Book Management Service with features regarding to fines, loans and customers.",
				preview: "https://github.com/lyrador",
				techStack: ["Java", "Hibernate", "SQL", "Glassfish"],
			},
			{
				projectName: "Shared Cart - Shopee UltraHackathon",
				image: "images/ultra.jpg",
				summary:
					"FullStack Software Application.",
				preview: "https://github.com/lyrador",
				techStack: ["Bootstrap", "JavaScript", "ReactJS", "Figma", "Photoshop"],
			},
		],
		android: [
			{
				projectName: "Easy Delivery",
				image: "images/easydelivery-S.png",
				summary:
					"An on-demand delivery application designed with an Enterprise Architecure System using Unified Modelling Diagrams (UML), including creation of high fidelity wireframs and mockups",
				preview: "https://drive.google.com/file/d/1t8CGnyNMueAyY6JDsasN1kMrgFAfiR-A/view?usp=sharing",
				techStack: ["Figma", "Visual Paradigm", "UML"],
			},
			// {
			// 	projectName: "CareerHigh-App",
			// 	image: "images/carrerhigh.png",
			// 	summary:
			// 		"The Application display the webpages of website careerhigh.in in android devices.",
			// 	preview: "https://github.com/vinaysomawat/CareerHigh-Android",
			// 	techStack: ["JAVA", "XML", "Android"],
			// },
		],
		freelance: [
			{
				projectName: "Singtel SHINE LIT Challenge",
				image: "images/ultra.jpg",
				summary:
					"3rd Place for LIT Challenge for Singtel High Performing Interns.",
				preview: "https://github.com/lyrador",
				techStack: [],
			},
			{
				projectName: "NCS Thinkathon",
				image: "images/ultra.jpg",
				summary:
					"--.",
				preview:
					"https://github.com/lyrador",
				techStack: [],
			},
		],
	},
	experience: [
		{
			title: "NCS Pte Ltd",
			duration: "May 2022 - Present",
			subtitle: "Software Engineer Intern",
			details: [
				"Participated in 4-5 sprints in a large-scale Agile project, created and updated documentation (eg. acceptance criteria) in line with project's expectations.",
				"Utilised Angular to create modularised components for front-end development, set up API and handled complex back-end logic using Spring Boot, and executed SQL queries on Oracle database with 500+ tables.. ",
				"Rewrote outdated codes to conform to coding standards and reduced assigned flags in Fortify report by over 60%.",
				"Carried out unit testing, integration testing and user acceptance testing, recorded results to ensure the quality of the features.",
			],
			tags: [
				"JavaScript",
				"Angular",
				"Bootstrap",
				"Spring",
				"Oracle",
				"SQL",
			],
			icon: "heartbeat",
		},
		{
			title: "Ottodot",
			duration: "May 2021 - Aug 2021",
			subtitle: "Game Developer Intern",
			details: [
				"Utilised Lua to create a new EdTech game called Ottoworld: Parkour Rangers, with the Alpha Version released in July 2021, currently at 1 million+ total visits.",
				"Collaborated with and co-developed games with international developers and designers.",
				"Provided suggestions and presented new ideas to the management as well as improved on and debugged games.",
				"Designed Unified Modelling Language (UML) diagrams to assist in code organisation and structuring.",
				"Analysed data obtained from GameAnalytics and Amazon Web Services (AWS) to make plans for future installments.",
				"Facilitated game testing sessions with 10+ children across the globe.",
			],
			tags: [
				"Lua",
				"UML Diagrams",
				"Figma",
			],
			icon: "qrcode",
		},
	],
	education: [
		{
			title: "Bachelor of Computing in Information Systems",
			duration: "Aug 2020 - May 2024",
			subtitle: "National University of Singapore, Singapore",
			details: [
				"Cumulative GPA: 4.37",
				"Intended Specialisation Track: Financial Technology (FinTech)",
				"Relevant Coursework:",
				"IDT*CS2040 Data Structures and Algorithms", 
				"IDT*CS2105 Introduction to Computer Networks",
				"IDT*BT2102 Data Management and Visualisation", 
				"IDT*IS2102 Enterprise Systems Architecture and Design", 
				"IDT*IS2103 Enterprise Systems Server-side Design and Development", 
				"IDT*IS3106 Enterprise Systems Interface Design and Development", 
			],
			tags: [
				"Data Structures & Algorithms",
				"Database Management System",
				"Computer Networks",
				"Enterprise Architecture Design",
				"Software Development",
			],
			icon: "graduation-cap",
		},
		{
			title: "Singapore-Cambridge GCE Advanced-Level Certificate",
			duration: "Jan 2016 - Dec 2017",
			subtitle: "Victoria Junior College, Singapore",
			details: [
				"Secured 83.75/90 RP in GCE A-Level Examinations.",
				"Attained multiple awards, such as the Edusave Awards for Achievement, Good Leadership and Service, awarded to recognize pupil's leadership qualities, services rendered and excellence in non-academic activities, as well as SYF Distinction Award for Guitar Ensemble",
			],
			tags: ["Biology", "Chemistry", "Mathematics", "Economics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com",
				},
				{
					text: "GitHub",
					link: "https://github.com/lyrador",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/lyrador/darylyeejh.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/darylyee/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"-",
			],
		},
	],
};

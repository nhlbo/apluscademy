import mongoose from 'mongoose'
import { Category } from './src/models/category'
import { Chapter } from './src/models/chapter'
import { Course } from './src/models/course'
import { Review } from './src/models/review'
import { User, UserOTPVerification } from './src/models/user'

const MONGO_DB_URL = process.env.MONGO_DB_URL || ''

mongoose.connect(MONGO_DB_URL).then(() => console.log('Connected to the database.'))

const users = [
  {
    name: 'Nguyen Hoang Long',
    email: '19127463@student.hcmus.edu.vn',
    password: '12345678',
    role: 'student'
  },
  { email: 'nanera@gmail.com', password: '12345678', role: 'student' },
  {
    name: 'Nguyen Hoang Long',
    email: 'hoanglong@gmail.com',
    password: '12345678',
    role: 'lecturer',
    about:
      "Minerva McGonagall was born on 4 October in Scotland to Robert McGonagall and Isobel Ross. McGonagall was born a half-blood witch as her father was a Muggle and her mother a witch. McGonagall began her Hogwarts education at the age of eleven and was sorted into Gryffindor after being the longest ever Hatstall between Gryffindor and Ravenclaw. McGonagall became friends with Hufflepuff student and future colleague Pomona Sprout and gained a particular talent in the art of Transfiguration under the tutelage of then Transfiguration professor Albus Dumbledore. During this time, McGonagall managed to become an Animagus, taking the form of a tabby cat and filed her paperwork to be officially registered. McGonagall was also a skilled member of the Gryffindor Quidditch team. After graduation, McGonagall became an employee for the Ministry of Magic in the Department of Magical Law Enforcement where she met her husband, Elphinstone Urquart. McGonagall was offered a promotion but turned it down and applied to teach Transfiguration at Hogwarts under Dumbledore. During her employment at Hogwarts, McGonagall grew particularly close to Dumbledore and the two were near inseparable friends and colleagues, and he began to recognise her as one of his most trusted allies. Eventually, McGonagall became the Head of the Transfiguration Department as well as the Head of Gryffindor House. After Headmaster Armando Dippet's retirement and Dumbledore's appointment as Headmaster, McGonagall became his Deputy Headmistress. Despite being a crucial force during the First Wizarding War against Lord Voldemort, McGonagall was not a member of the initial forming of the Order of the Phoenix. During the war, McGonagall lost her brother, Robert Jr, and two of her favourite students, James and Lily Potter. Following the death of the Potters and the first downfall of Voldemort, McGonagall accompanied Dumbledore and Rubeus Hagrid in delivering the sole survivor of the encounter, Harry Potter, to his aunt and uncle Petunia and Vernon Dursley in Surrey. Despite McGonagall's reservations that the Dursleys were the \"worst kind of Muggles\", she understood that due to the framing and imprisonment of Harry's godfather Sirius Black, the Dursleys were the only family the infant had left. After the war, McGonagall and Elphinstone married, but three years later he died from a Venomous Tentacula bite, making Minerva a widow.[citation needed]"
  },
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '12345678',
    role: 'admin'
  }
]

const data = {
  Categories: [
    {
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg',
      name: 'Development',
      courses: [
        {
          title: 'Javascript for Beginners',
          shortDesc:
            'Learn javascript online and supercharge your web design with this Javascript for beginners training course.',
          longDesc:
            '<p>Take this Javascript training course and start learning Javascript today.<br><br>"As a business guy I have no place in programming." Ten years ago you could have gotten away with that statement. Today you say that to your colleagues and they scoff at you before they go back to their computers to fix real problems and do real work.<br><br>If you want to do something useful start by learning Javascript . In these days when the browser is central to all computer use knowing "the language of the browser" is the most important step. A few years ago Javascript potential was uncertain and many programmers considered it useless. These days however competent programmers have identified Javascript real potential and uses and it has gone from a toy language to the main language of the browser. It has become one of the most useful languages of this era. Every developer needs at least a basic understanding of Javascript. A developer who knows Javascript is the rockstar of the company and is in constant demand by employers. Our online Javascript</p>\n<p>course will get you started by teaching all the essential aspects of coding in Javascript. So... what\'s it gonna be? Do you want to supercharge your career and be in constant demand by employers? Do you want to learn how to create dynamic and innovative Javascript documents? Start programming today with our Javascript course for Beginners training and take control of your career.</p>',
          viewCount: 286,
          totalRatingStars: 11,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'Excellent explanation with accompanying videos. I expected a few more videos in this session to help me learn more about JavaScript.'
            },
            {
              ratingStars: 4,
              feedback: 'Very good but some of the lab instructions are a little vague for a beginner.'
            },
            {
              ratingStars: 3,
              feedback: 'Not bad not also not good'
            }
          ],
          chapters: [
            {
              video: 'Javascript for Beginners - 1.webm',
              title: 'Javascript for Beginners'
            },
            {
              video: 'Javascript for Beginners - 2.mp4',
              title: 'Course Introduction'
            },
            {
              video: 'Javascript for Beginners - 3.mp4',
              title: 'Introducing Mark and the course'
            },
            {
              video: 'Javascript for Beginners - 4.mp4',
              title: 'Your development toolbox'
            }
          ],
          thumbnail:
            'https://techvccloud.mediacdn.vn/zoom/600_315/2018/5/31/js-15277589636571360694919-0-93-340-698-crop-15277589683161724742811.png',
          basePrice: 299
        },
        {
          title: 'Become a Certified HTML, CSS, JavaScript Web Developer',
          shortDesc:
            'Understand and enjoy classical music at your own pace. A music history course, including a music theory introduction.',
          longDesc:
            '<p><strong>Completely Updated for 2023/2024 with 40 NEW lectures coding activities and projects!&nbsp;</strong></p>\n<p>Learn What It Takes to Code Dynamic, Professional Websites and Web Apps From The Comfort of Your Own Home&nbsp;</p>\n<p>Do you ever browse the internet wondering how your favorite websites were built? Facebook, Twitter, Amazon&mdash;they were all created by people who at one point in time didn&rsquo;t know anything about coding. How did they obtain this knowledge?&nbsp;</p>\n<p>In this comprehensive course, I&rsquo;m going to show you everything you need to know so that you can follow in these people&rsquo;s footsteps.&nbsp;</p>\n<p>You&rsquo;re going to learn how to code AND you&rsquo;re going to become a certified professional from a recognized international trainer. And best of all, you&rsquo;re going to have fun doing it.&nbsp;</p>\n<p>You Don&rsquo;t Have to Be a Genius or a Mathematical Wizard.&nbsp;</p>\n<p>So many people believe that you must have a special &lsquo;gift&rsquo; to create professional-quality, dynamic websites/web apps. I&rsquo;m here to tell you once and for all that this is false. All you need to have is the desire to learn and the ability to follow instructions&mdash;that&rsquo;s it!&nbsp;</p>\n<p>Our course starts teaching basic coding principles and develops your coding skills in a variety of languages from beginner through to advanced. Here it is, once and for all, a complete guide that will take you from novice to web developer.&nbsp;</p>\n<p>Skip Hours of Frustration and Thousands of Wasted Dollars and Become 100% Certified&nbsp;</p>\n<p>The internet has changed the rules of doing business. More and more companies are migrating online while many new, never before seen businesses are created every day thanks to the power of this phenomenon. You know what that means? Higher demand for people just like you!&nbsp;</p>\n<p>But the problem for these businesses is that while demand is high, supply is short.&nbsp;</p>\n<p>Please don&rsquo;t let a lack of knowledge stop you from having the career of your dreams, not when the knowledge you need is right here and is extremely affordable.&nbsp;</p>\n<p>Don&rsquo;t worry, you won&rsquo;t need to buy any additional courses, it&rsquo;s all here. No need to spend four years and over $15,000 per year in college tuition either&mdash;it really is all here. From HTML to CSS then to Javascript and finally PHP, you will learn how to Become a Certified Web Developer.&nbsp;</p>\n<p>It Doesn&rsquo;t Matter Where You&rsquo;re Starting From...You Can Do It!&nbsp;</p>\n<p>Maybe:&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re planning on studying coding at college and want to build a rock-solid foundation so that you have a huge head start before your course begins?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re dissatisfied with your current job and want to learn exactly what it takes to become a fully qualified web developer?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re currently working in IT but want to expand your skill base so that you&rsquo;re 100% up to date with the latest developments in web technology?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You want to develop mobile apps or websites on the side to create some additional income while retaining your current job?&nbsp;</p>\n<p><strong>Learn Skills That Will Benefit You for The Rest of Your Life&nbsp;</strong></p>\n<p>- Imagine being able to create a web app that is downloaded by millions of paying customers&mdash;or a website that&rsquo;s visited by people from all seven continents.&nbsp;</p>\n<p>- Imagine the limitless opportunities that having these programming skills will give you.&nbsp;</p>\n<p>- Imagine working in a field that challenges you and allows you to express yourself freely every day.&nbsp;</p>\n<p>- Imagine being paid extremely well for developing products and services that can help change people&rsquo;s lives.&nbsp;</p>\n<p>Stop imagining and take action! It&rsquo;s time to start your journey. Your future is waiting for you...</p>',
          viewCount: 146,
          totalRatingStars: 17,
          reviewCount: 4,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'I loved the teaching and the exercise help me to understand the topic more than just watching the video.'
            },
            {
              ratingStars: 4,
              feedback:
                'Mark is very dedicated, has great knowledge and transfers it through his videos. Easy to understand and follow. Thank you for this amazing course!'
            },
            {
              ratingStars: 5,
              feedback: 'Learned a lot through this course.'
            },
            {
              ratingStars: 4,
              feedback: 'A pretty good start to my journey becoming a web developer.'
            }
          ],
          chapters: [
            {
              video: 'Become a Certified HTML, CSS, JavaScript Web Developer - 1.mp4',
              title: 'About the course'
            },
            {
              video: 'Become a Certified HTML, CSS, JavaScript Web Developer - 2.mp4',
              title: 'About our certification'
            },
            {
              video: 'Become a Certified HTML, CSS, JavaScript Web Developer - 3.mp4',
              title: 'Getting your questions answered'
            }
          ],
          thumbnail: 'https://nentang.vn/wp-content/uploads/2018/07/html-css-js-course-intro.jpeg',
          basePrice: 399
        },
        {
          title: 'Learn C# Programming (In Ten Easy Steps)',
          shortDesc: 'The simplest way to learn C# programming.',
          longDesc:
            '<p><strong>Learn C# Programming</strong>&nbsp;<strong>(in ten easy steps)</strong>&nbsp;<em>[Version 2]</em>&nbsp;is suitable for&nbsp;<em>beginner&nbsp;</em>programmers or anyone with experience in another programming language who needs to learn C# from the ground up. Step-by-step it explains how to write C# code to develop Windows applications using either the&nbsp;<strong>free Visual Studio Community Edition</strong>&nbsp;or a commercial edition of Microsoft Visual Studio (it even explains how to write C# programs using free tools for OS X). This is the completely revised and updated second version of this&nbsp;course.&nbsp;</p>\n<p><strong>C#</strong>&nbsp;is one of the most widely used an important of all modern programming languages. If you need to learn C#&nbsp;<em>quickly</em>&nbsp;and&nbsp;<em>painlessly</em>, this is the perfect course.</p>\n<p>You will begin by learning the core features of programming &ndash; variables, constants, functions and data types. You will move on rapidly to learn about Object Orientation and the more advanced features of C# and the .NET framework such as file-handling, data-streaming, dealing with exceptions (errors) and overriding methods. Even if you start out as a complete beginner, by the end of this course you will have built a really solid foundation of programming knowledge and skills.</p>\n<p>All the&nbsp;<strong>source code</strong>&nbsp;of sample projects is provided ready for you to download, run and modify. The course also includes an&nbsp;<strong>eBook&nbsp;</strong>that provides even more information on the topics being discussed. And there are also interactive&nbsp;<strong>quizzes&nbsp;</strong>to test your understanding of each major topic.</p>\n<p>The course instructor,&nbsp;<em>Huw Collingbourne</em>, is Director of Technology with SapphireSteel Software, a company that specialises in Visual Studio development tools (written in C#) for professional programmers.</p>\n<p><em>Learn C# Programming (in ten easy steps)</em>&nbsp;is the fastest and simplest way to help you make the move from coding novice to professional programmer. The first version of this course was launched in 2012. The current version has been completely re-made and expanded with numerous new lessons. As an added bonus,&nbsp;<strong>the complete version 1</strong>&nbsp;of the course (<em>almost 4 additional hours of video&nbsp;instruction</em>) is also included as a free download.</p>',
          viewCount: 122,
          totalRatingStars: 18,
          reviewCount: 4,
          reviews: [
            {
              ratingStars: 5,
              feedback: 'Definitely helpful for my computer graphics course at school.'
            },
            {
              ratingStars: 3,
              feedback: 'Not using the lastest version of Visual Studio.'
            },
            {
              ratingStars: 5,
              feedback:
                'Speech pattern is very relaxed and easy to understand. Gives very thorough explanations.Never talks down to his audience. Conveys interest and excitement about the subject in his speech patterns.'
            },
            {
              ratingStars: 5,
              feedback:
                'Excellent introductory course to C#, with lots of work put in by the author to help keep things interesting.'
            }
          ],
          chapters: [
            {
              video: 'Learn C# Programming (In Ten Easy Steps) - 1.webm',
              title: 'Install Visual Studio'
            },
            {
              video: 'Learn C# Programming (In Ten Easy Steps) - 2.webm',
              title: 'Your first C# project'
            },
            {
              video: 'Learn C# Programming (In Ten Easy Steps) - 3.webm',
              title: 'Adding components to a form'
            }
          ],
          thumbnail: 'https://i.redd.it/nbc8i22ia3091.png',
          basePrice: 199
        },
        {
          title: 'AJAX Development',
          shortDesc: 'Create Elegant, Powerful Web and Mobile Applications Using AJAX.',
          longDesc:
            '<p>You&rsquo;ve learned a little Javascript, &nbsp;but you still look at websites with slick, smooth and elegant user interfaces and want to know how web developers create that. The answer is simple: Ajax. &nbsp;You&rsquo;ve probably heard of it, but you&rsquo;ve always wondered &ldquo;What is Ajax&rdquo;? Ajax is simply Asynchronous Javascript and XML. By taking our Ajax course, you can make pages on your web application respond quickly, and with a minimum of screen refreshes.</p>\n<p><br>With our Ajax course and a little Javascript knowledge you can use Ajax to take database information and store, alter, sort and conditionally format it all on the client side. &nbsp;This minimizes the load on your server and makes your applications respond quickly and without reloading the HTML page. &nbsp;Ajax communicates with the server behind the scenes while your user continues to use your web site, accessing the information they want. Our course will show you numerous Ajax examples and help you become proficient in using Ajax.<br><br>In our Ajax course, master trainer Mark Lassoff takes you through the basics of Ajax right to advanced topics like parsing JSON responses from web services. &nbsp;Our Ajax course is recommended for all web developers who want to improve their client side skills, and make professional, fast and responsive web applications.</p>',
          viewCount: 217,
          totalRatingStars: 10,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 2,
              feedback: 'Instructor talks too fast. Gotta watch it on slower playback speed.'
            },
            {
              ratingStars: 4,
              feedback:
                'Es un curso demasiado básico y está muy desactualizado. Podría llegar a ser útil para personas que apenas está ingresadno al mundo del ajax pero no lo veo como una buena base sino un pequeño pantallaso. No veo la necesitdad de armar un json de la forma en la que se hizo.'
            },
            {
              ratingStars: 4,
              feedback:
                'It is quite interesting, especially for the practical part. It is very dynamic too and quite organized and well explained. The only thing I would like you to add more information to configure localhost 8888 and try at the same time, maybe with Xampp?'
            }
          ],
          chapters: [
            {
              video: 'AJAX Development - 1.mp4',
              title: 'Ajaxified Web Sites'
            },
            {
              video: 'AJAX Development - 2.mp4',
              title: 'Dynamic content placement'
            },
            {
              video: 'AJAX Development - 3.webm',
              title: 'The XMLHTTP Request Object'
            }
          ],
          thumbnail: 'https://wiki.matbao.net/wp-content/uploads/2019/08/ajax-la-gi-ajax-dinh-nghia-1.png',
          basePrice: 129
        },
        {
          title: 'Java Swing (GUI) Programming From Beginner to Expert',
          shortDesc:
            'Learn how to create desktop and Internet GUI Java programs and take your Java programming to the next level.',
          longDesc:
            "<p>This course teaches you how to create desktop and web-based applications using Java Swing, Java's built-in user interface toolkit. Each tutorial is fairly self-contained; but we'll also build two complete applications step by step along the way, so you can choose either to work through the whole course or to dip in and out.</p>\n<p>Among other things we'll look at nearly all Swing widgets, we'll take a look at JDBC for database access, the graphics API, model-view-controller (MVC) architecture, serialization for saving data, the listener-event model and even basic animation.</p>\n<p>When you finish the course, you'll be an advanced Swing developer, capable of creating complex and scalable Swing GUI applications.</p>",
          viewCount: 66,
          totalRatingStars: 14,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 5,
              feedback:
                'Ive always wanted to get at least a good depth of Java Swing knowledge... YouTube was just an okay resource, but this course is an absolute eye-opener and a very encouraging one. Thank you for this course, John. Im sure many like myself have really benefited from this course.'
            },
            {
              ratingStars: 4,
              feedback:
                'John gives easy-to-follow explanations, amazing examples, and also teaches design principles that were unexpected, but greatly appreciated.'
            },
            {
              ratingStars: 5,
              feedback:
                'This course is perfect and relevant even today. Im learning so much, not only about swing, but MVC and more. There are a few spots of trouble, like the database file not downloading, but you can easily find Johns work on GitHub under Cave of Programming or recreate the file from his well-explained videos. I highly recommend this course. Dont be put off by its age.'
            }
          ],
          chapters: [
            {
              video: 'Java Swing (GUI) Programming From Beginner to Expert - 1.mp4',
              title: 'About the course'
            },
            {
              video: 'Java Swing (GUI) Programming From Beginner to Expert - 2.mp4',
              title: 'About our certification'
            },
            {
              video: 'Java Swing (GUI) Programming From Beginner to Expert - 3.mp4',
              title: 'Getting your questions answered'
            }
          ],
          thumbnail: 'https://i.morioh.com/201107/4363daf9.webp',
          basePrice: 299
        }
      ]
    },
    {
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg',
      name: 'Music',
      courses: [
        {
          title: 'Adventures in Classical Music—Music Appreciation for All!',
          shortDesc:
            'Understand and enjoy classical music at your own pace. A music history course, including a music theory introduction.',
          longDesc:
            '<p>&nbsp;&nbsp;<strong>Music appreciation for the 21st century. Learn about Classical Music in the Western world from the Middle Ages to the present.&nbsp;</strong>&nbsp;</p>\n<p>&nbsp; You&rsquo;ll begin with an introduction to the various elements of music -- for example, melody, rhythm, pitch and harmony &ndash; to give you the basics and vocabulary of music theory to understand and appreciate any type of music.&nbsp; You&rsquo;ll then explore the History of Classical Music through its various stylistic periods, from medieval chant right up to the current cutting edge. Anyone interested in classical music will benefit from this course.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; About this course:&nbsp;&nbsp;</strong>&nbsp;</p>\n<ol>\n<li>\n<p>Over 3800 happy students</p>\n</li>\n<li>\n<p>Updated regularly</p>\n</li>\n<li>\n<p>Full, free lifetime access</p>\n</li>\n<li>\n<p>All future extra and upgraded lectures are always included for free</p>\n</li>\n<li>\n<p>Unconditional Udemy 30 day money-back guarantee</p>\n</li>\n<li>\n<p><strong>See testimonials from former students below</strong></p>\n</li>\n</ol>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; This course is structured in 32 sections;&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; the first section is devoted to the elements of music in order to give you a detailed primer in music theory: melody, rhythm, pitch, harmony, texture, tempo, dynamics and form. Section 1 includes a&nbsp;<strong>Short History of Rock and Roll</strong>&nbsp;to illustrate the musical elements and musical style.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; After that, each section is devoted to one of the broad eras of music history:&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Middle Ages.</strong>&nbsp;Learn about early music beginning with monophony and how polyphony developed during the period of the building of the great cathedrals.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Renaissance.</strong>&nbsp;What was happening in music during the period in which Michelangelo was painting the Sistine Chapel? A return to some Ancient ideals led to a rediscovery of the science of acoustics, providing a basis for the theory of modern harmony. How the course of music changed as a result of Martin Luther&rsquo;s break from the Church.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Baroque.</strong>&nbsp;Here we have the origins of opera, as well as a flowering of instrumental music, culminating in the works of Bach, Handel and Vivaldi.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Classical.</strong>&nbsp;In reaction to the florid complexities of the Baroque, and influenced by the Age of Reason, the Classical period focused on simplicity and elegance, producing such composers as Haydn, Mozart and Beethoven.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Romanticism.</strong>&nbsp;The Age of Reason was too &ldquo;reasonable&rdquo; for the the Romanticists. They valued heightened emotion over elegance. The music of Schumann, Chopin, Wagner, Tchaikovsky, Verdi and Puccini were some of its greatest accomplishments.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Modern Period.</strong>&nbsp;Formerly referred to as the 20th century period, it now needs to reflect its expansion into the 21st century. Some of the greatest composers of this period have been Stravinsky, Bartok, Schoenberg, Britten, Shostakovich, Ives, Copland and Barber.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; We conclude with a retrospective and some final remarks to wrap it all up.</p>',
          viewCount: 78,
          totalRatingStars: 13,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 3,
              feedback:
                "I wanted to thank you, Bill Neely, for sharing your knowledge with us. This has been a super-duper class, and I find myself a little sad to find it drawing to a close. I've always enjoyed classical music rather passively; I now feel that I can be an active participant, with a deeper understanding of the musical concepts, the composers themselves, and their historical context. Very cool!"
            },
            {
              ratingStars: 5,
              feedback:
                'Excellent! You just gotta know your Staccato from your Legato it’s that simple. Seriously, I’m really enjoying the instructions it’s working for me what can I say bravo Eric! Thanks eh’ ??????? Check out his YouTube: Guitar Sage'
            },
            {
              ratingStars: 5,
              feedback: 'Excellent! Would highly recomment this course!'
            }
          ],
          chapters: [
            {
              video: 'Adventures in Classical Music—Music Appreciation for All! - 1.mp4',
              title: 'Introductory Overview'
            },
            {
              video: 'Adventures in Classical Music—Music Appreciation for All! - 2.mp4',
              title: 'A history of Rock and Roll, Part 1'
            },
            {
              video: 'Adventures in Classical Music—Music Appreciation for All! - 3.webm',
              title: 'A history of Rock and Roll, Part 2'
            }
          ],
          thumbnail: 'https://miro.medium.com/max/1024/1*mixpt3aTomNCPC2-cBlmIw.jpeg',
          basePrice: 399
        },
        {
          title: 'Acoustic Guitar and Electric Guitar Lessons Getting Started',
          shortDesc:
            'Acoustic Guitar Theory, Fingerpicking, Fretting, Chords: Most Important 25 Videos For Getting Started w/ Playing Guitar',
          longDesc:
            '<p>Eliminate All the Major Struggles When Getting Started With Playing Guitar</p>\n<p>&nbsp; This course is the most&nbsp;<strong>"Direct and To the Point"</strong>&nbsp;course for ANY guitar player to watch and learn.&nbsp;</p>\n<p>&nbsp; Finding 2 Hours of Quality Guitar Lessons that can be accessed&nbsp;<em>anywhere</em>&nbsp;for FREE and at&nbsp;<em>any time</em>&nbsp;of the day is hard to come by these days.&nbsp;</p>\n<p>&nbsp; This free course solves all of those problems.&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Difference in Your Playing</p>\n<p>&nbsp; &nbsp;</p>\n<ul>\n<li>\n<p>Over 2 hours of Video and PDF attachments for most Lectures</p>\n</li>\n<li>\n<p>Access this course 24/7, Mac or PC, Iphone,&nbsp;Ipad and Android</p>\n</li>\n</ul>\n<p>&nbsp; Establishing solid core practice habits helps the speed of your results and also the quality of your results.&nbsp;</p>\n<p>You\'ll Go From First Time User, Picking Up the Guitar, to Chord Transitioning AND Everything in Between Including the 9 Most Essential Chords</p>\n<ul>\n<li>\n<p>Erich Andreas is Consider a Top 5 Online Guitar Teacher</p>\n</li>\n<li>\n<p>With&nbsp;<strong>more than 730,000</strong>&nbsp;Youtube subscribers and&nbsp;<strong>over 100 Million</strong>&nbsp;views his teachings have been able to reach Millions of people all around the world</p>\n</li>\n</ul>\n<p>&nbsp; The built in learning center allows you to track which videos you&nbsp;<strong>have or have not</strong>&nbsp;seen or watched.&nbsp; This is a great feature that gives the student the ability to learn at their own pace.&nbsp;</p>\n<p>Still undecided?&nbsp; Check out the value that\'s in this course.</p>\n<p>&nbsp; 23 Lectures equals out to be 6 hours of one-on-one lessons with Erich.&nbsp; That holds a value of $600 ($100/hr) and you get all of these videos, lectures, and PDFs for FREE.&nbsp;</p>\n<ul>\n<li>\n<p>Nearly 30 years of guitar experience both teaching and playing</p>\n</li>\n<li>\n<p>Incredible $600 value for Free</p>\n</li>\n</ul>\n<p>Add 2&nbsp;<em>Bonus Videos</em>&nbsp;- That Makes it a Total of 25 Videos!</p>\n<p>&nbsp;&nbsp;<strong>Special Tip:</strong>&nbsp; You\'re also the first to be notified about any promo codes for any of my other Udemy courses but you have to become a student of this free course to receive these special one-time promo codes.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>In all honesty, you can\'t find a hook-up as good as this anywhere else. 25 videos that will quickly help anyone get started with playing guitar ALL for Free.</strong>&nbsp;</p>\n<p>&nbsp; My guarantee is that you will see great guitar results if you follow this course and put in the practice.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong><em>Scroll up and click on the&nbsp;</em>"Start Learning Now"<em>&nbsp;button.</em></strong>&nbsp;</p>\n<p>&nbsp; Check out what our students have to say.&nbsp; Read the reviews.&nbsp;</p>\n<p>&nbsp; &nbsp; Get Started Today</p>',
          viewCount: 98,
          totalRatingStars: 12,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 5,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 3,
              feedback:
                'Sessions disjoined. Good content in some areas but little playing practice to action the theory and techniques taught.'
            }
          ],
          chapters: [
            {
              video: 'Acoustic Guitar and Electric Guitar Lessons Getting Started - 1.mp4',
              title: 'Introduction Video'
            },
            {
              video: 'Acoustic Guitar and Electric Guitar Lessons Getting Started - 2.mp4',
              title: 'Choosing an Acoustic guitar'
            },
            {
              video: 'Acoustic Guitar and Electric Guitar Lessons Getting Started - 3.mp4',
              title: 'Choosing an Electric guitar'
            },
            {
              video: 'Acoustic Guitar and Electric Guitar Lessons Getting Started - 4.mp4',
              title: 'Compare between the two guitars'
            }
          ],
          thumbnail:
            'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          basePrice: 179
        },
        {
          title: 'Complete Guitar Lessons System - Beginner to Advanced',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 98,
          totalRatingStars: 9,
          reviewCount: 2,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 5,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            }
          ],
          chapters: [
            {
              video: 'Complete Guitar Lessons System - Beginner to Advanced - 1.mp4',
              title: 'THE CORE - MODULE 1'
            },
            {
              video: 'Complete Guitar Lessons System - Beginner to Advanced - 2.mp4',
              title: 'THE CORE - MODULE 2'
            },
            {
              video: 'Complete Guitar Lessons System - Beginner to Advanced - 3.mp4',
              title: 'THE CORE - MODULE 3'
            }
          ],
          thumbnail:
            'https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          basePrice: 149
        },
        {
          title: 'Elite Singing Techniques - Phase I',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 98,
          totalRatingStars: 14,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 5,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 5,
              feedback: 'Nice vocal.'
            }
          ],
          chapters: [
            {
              video: 'Elite Singing Techniques - Phase I - 1.mp4',
              title: 'Vocal 1'
            },
            {
              video: 'Elite Singing Techniques - Phase I - 2.mp4',
              title: 'Vocal 2'
            },
            {
              video: 'Elite Singing Techniques - Phase I - 3.mp4',
              title: 'Vocal 3'
            }
          ],
          thumbnail:
            'https://img.freepik.com/premium-photo/young-pretty-woman-happy-motivated-singing-song-with-microphone-presenting-event-having-party-enjoy-moment_1258-5909.jpg?w=2000',
          basePrice: 99
        },
        {
          title: 'Mixing for Music Producers',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 98,
          totalRatingStars: 14,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 5,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 5,
              feedback: 'Nice vocal.'
            }
          ],
          chapters: [
            {
              video: 'Mixing for Music Producers - 1.mp4',
              title: 'Introduction to DJ'
            },
            {
              video: 'Mixing for Music Producers - 2.mp4',
              title: 'Mixing with MIDI'
            },
            {
              video: 'Mixing for Music Producers - 3.mp4',
              title: 'Introducing Logic Pro X'
            }
          ],
          thumbnail:
            'https://online.berklee.edu/takenote/wp-content/uploads/2020/11/what_music_producers_do_article_image_2020.jpg',
          basePrice: 499
        }
      ]
    },
    {
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg',
      name: 'Business',
      courses: [
        {
          title: 'Introduction to Trading',
          shortDesc:
            'Learn javascript online and supercharge your web design with this Javascript for beginners training course.',
          longDesc:
            '<p>Take this Javascript training course and start learning Javascript today.<br><br>"As a business guy I have no place in programming." Ten years ago you could have gotten away with that statement. Today you say that to your colleagues and they scoff at you before they go back to their computers to fix real problems and do real work.<br><br>If you want to do something useful start by learning Javascript . In these days when the browser is central to all computer use knowing "the language of the browser" is the most important step. A few years ago Javascript potential was uncertain and many programmers considered it useless. These days however competent programmers have identified Javascript real potential and uses and it has gone from a toy language to the main language of the browser. It has become one of the most useful languages of this era. Every developer needs at least a basic understanding of Javascript. A developer who knows Javascript is the rockstar of the company and is in constant demand by employers. Our online Javascript</p>\n<p>course will get you started by teaching all the essential aspects of coding in Javascript. So... what\'s it gonna be? Do you want to supercharge your career and be in constant demand by employers? Do you want to learn how to create dynamic and innovative Javascript documents? Start programming today with our Javascript course for Beginners training and take control of your career.</p>',
          viewCount: 486,
          totalRatingStars: 11,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'Excellent explanation with accompanying videos. I expected a few more videos in this session to help me learn more about JavaScript.'
            },
            {
              ratingStars: 2,
              feedback: 'Very good but some of the lab instructions are a little vague for a beginner.'
            },
            {
              ratingStars: 5,
              feedback: 'Not bad not also not good'
            }
          ],
          chapters: [
            {
              video: 'Introduction to Trading - 1.mp4',
              title: 'Javascript for Beginners'
            },
            {
              video: 'Introduction to Trading - 2.mp4',
              title: 'Course Introduction'
            },
            {
              video: 'Introduction to Trading - 3.mp4',
              title: 'Introducing Mark and the course'
            }
          ],
          thumbnail:
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
          basePrice: 399
        },
        {
          title: 'Marketing',
          shortDesc:
            'Understand and enjoy classical music at your own pace. A music history course, including a music theory introduction.',
          longDesc:
            '<p><strong>Completely Updated for 2023/2024 with 40 NEW lectures coding activities and projects!&nbsp;</strong></p>\n<p>Learn What It Takes to Code Dynamic, Professional Websites and Web Apps From The Comfort of Your Own Home&nbsp;</p>\n<p>Do you ever browse the internet wondering how your favorite websites were built? Facebook, Twitter, Amazon&mdash;they were all created by people who at one point in time didn&rsquo;t know anything about coding. How did they obtain this knowledge?&nbsp;</p>\n<p>In this comprehensive course, I&rsquo;m going to show you everything you need to know so that you can follow in these people&rsquo;s footsteps.&nbsp;</p>\n<p>You&rsquo;re going to learn how to code AND you&rsquo;re going to become a certified professional from a recognized international trainer. And best of all, you&rsquo;re going to have fun doing it.&nbsp;</p>\n<p>You Don&rsquo;t Have to Be a Genius or a Mathematical Wizard.&nbsp;</p>\n<p>So many people believe that you must have a special &lsquo;gift&rsquo; to create professional-quality, dynamic websites/web apps. I&rsquo;m here to tell you once and for all that this is false. All you need to have is the desire to learn and the ability to follow instructions&mdash;that&rsquo;s it!&nbsp;</p>\n<p>Our course starts teaching basic coding principles and develops your coding skills in a variety of languages from beginner through to advanced. Here it is, once and for all, a complete guide that will take you from novice to web developer.&nbsp;</p>\n<p>Skip Hours of Frustration and Thousands of Wasted Dollars and Become 100% Certified&nbsp;</p>\n<p>The internet has changed the rules of doing business. More and more companies are migrating online while many new, never before seen businesses are created every day thanks to the power of this phenomenon. You know what that means? Higher demand for people just like you!&nbsp;</p>\n<p>But the problem for these businesses is that while demand is high, supply is short.&nbsp;</p>\n<p>Please don&rsquo;t let a lack of knowledge stop you from having the career of your dreams, not when the knowledge you need is right here and is extremely affordable.&nbsp;</p>\n<p>Don&rsquo;t worry, you won&rsquo;t need to buy any additional courses, it&rsquo;s all here. No need to spend four years and over $15,000 per year in college tuition either&mdash;it really is all here. From HTML to CSS then to Javascript and finally PHP, you will learn how to Become a Certified Web Developer.&nbsp;</p>\n<p>It Doesn&rsquo;t Matter Where You&rsquo;re Starting From...You Can Do It!&nbsp;</p>\n<p>Maybe:&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re planning on studying coding at college and want to build a rock-solid foundation so that you have a huge head start before your course begins?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re dissatisfied with your current job and want to learn exactly what it takes to become a fully qualified web developer?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You&rsquo;re currently working in IT but want to expand your skill base so that you&rsquo;re 100% up to date with the latest developments in web technology?&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp;● You want to develop mobile apps or websites on the side to create some additional income while retaining your current job?&nbsp;</p>\n<p><strong>Learn Skills That Will Benefit You for The Rest of Your Life&nbsp;</strong></p>\n<p>- Imagine being able to create a web app that is downloaded by millions of paying customers&mdash;or a website that&rsquo;s visited by people from all seven continents.&nbsp;</p>\n<p>- Imagine the limitless opportunities that having these programming skills will give you.&nbsp;</p>\n<p>- Imagine working in a field that challenges you and allows you to express yourself freely every day.&nbsp;</p>\n<p>- Imagine being paid extremely well for developing products and services that can help change people&rsquo;s lives.&nbsp;</p>\n<p>Stop imagining and take action! It&rsquo;s time to start your journey. Your future is waiting for you...</p>',
          viewCount: 194,
          totalRatingStars: 12,
          reviewCount: 4,
          reviews: [
            {
              ratingStars: 3,
              feedback:
                'I loved the teaching and the exercise help me to understand the topic more than just watching the video.'
            },
            {
              ratingStars: 3,
              feedback:
                'Mark is very dedicated, has great knowledge and transfers it through his videos. Easy to understand and follow. Thank you for this amazing course!'
            },
            {
              ratingStars: 2,
              feedback: 'Learned a lot through this course.'
            },
            {
              ratingStars: 4,
              feedback: 'A pretty good start to my journey becoming a web developer.'
            }
          ],
          chapters: [
            {
              video: 'Marketing - 1.mp4',
              title: 'About the course'
            },
            {
              video: 'Marketing - 2.mp4',
              title: 'About our certification'
            },
            {
              video: 'Marketing - 3.mp4',
              title: 'Getting your questions answered'
            }
          ],
          thumbnail: 'https://www.lucidadvertising.com/wp-content/uploads/2020/06/marketing.jpg',
          basePrice: 349
        },
        {
          title: 'How to start your own business',
          shortDesc: 'The simplest way to learn C# programming.',
          longDesc:
            '<p><strong>Learn C# Programming</strong>&nbsp;<strong>(in ten easy steps)</strong>&nbsp;<em>[Version 2]</em>&nbsp;is suitable for&nbsp;<em>beginner&nbsp;</em>programmers or anyone with experience in another programming language who needs to learn C# from the ground up. Step-by-step it explains how to write C# code to develop Windows applications using either the&nbsp;<strong>free Visual Studio Community Edition</strong>&nbsp;or a commercial edition of Microsoft Visual Studio (it even explains how to write C# programs using free tools for OS X). This is the completely revised and updated second version of this&nbsp;course.&nbsp;</p>\n<p><strong>C#</strong>&nbsp;is one of the most widely used an important of all modern programming languages. If you need to learn C#&nbsp;<em>quickly</em>&nbsp;and&nbsp;<em>painlessly</em>, this is the perfect course.</p>\n<p>You will begin by learning the core features of programming &ndash; variables, constants, functions and data types. You will move on rapidly to learn about Object Orientation and the more advanced features of C# and the .NET framework such as file-handling, data-streaming, dealing with exceptions (errors) and overriding methods. Even if you start out as a complete beginner, by the end of this course you will have built a really solid foundation of programming knowledge and skills.</p>\n<p>All the&nbsp;<strong>source code</strong>&nbsp;of sample projects is provided ready for you to download, run and modify. The course also includes an&nbsp;<strong>eBook&nbsp;</strong>that provides even more information on the topics being discussed. And there are also interactive&nbsp;<strong>quizzes&nbsp;</strong>to test your understanding of each major topic.</p>\n<p>The course instructor,&nbsp;<em>Huw Collingbourne</em>, is Director of Technology with SapphireSteel Software, a company that specialises in Visual Studio development tools (written in C#) for professional programmers.</p>\n<p><em>Learn C# Programming (in ten easy steps)</em>&nbsp;is the fastest and simplest way to help you make the move from coding novice to professional programmer. The first version of this course was launched in 2012. The current version has been completely re-made and expanded with numerous new lessons. As an added bonus,&nbsp;<strong>the complete version 1</strong>&nbsp;of the course (<em>almost 4 additional hours of video&nbsp;instruction</em>) is also included as a free download.</p>',
          viewCount: 122,
          totalRatingStars: 12,
          reviewCount: 4,
          reviews: [
            {
              ratingStars: 2,
              feedback: 'Definitely helpful for my computer graphics course at school.'
            },
            {
              ratingStars: 3,
              feedback: 'Not using the lastest version of Visual Studio.'
            },
            {
              ratingStars: 5,
              feedback:
                'Speech pattern is very relaxed and easy to understand. Gives very thorough explanations.Never talks down to his audience. Conveys interest and excitement about the subject in his speech patterns.'
            },
            {
              ratingStars: 2,
              feedback:
                'Excellent introductory course to C#, with lots of work put in by the author to help keep things interesting.'
            }
          ],
          chapters: [
            {
              video: 'How to start your own business - 1.mp4',
              title: 'Install Visual Studio'
            },
            {
              video: 'How to start your own business - 2.mp4',
              title: 'Your first C# project'
            },
            {
              video: 'How to start your own business - 3.mp4',
              title: 'Adding components to a form'
            }
          ],
          thumbnail:
            'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
          basePrice: 379
        },
        {
          title: 'Business Analyst',
          shortDesc: 'Create Elegant, Powerful Web and Mobile Applications Using AJAX.',
          longDesc:
            '<p>You&rsquo;ve learned a little Javascript, &nbsp;but you still look at websites with slick, smooth and elegant user interfaces and want to know how web developers create that. The answer is simple: Ajax. &nbsp;You&rsquo;ve probably heard of it, but you&rsquo;ve always wondered &ldquo;What is Ajax&rdquo;? Ajax is simply Asynchronous Javascript and XML. By taking our Ajax course, you can make pages on your web application respond quickly, and with a minimum of screen refreshes.</p>\n<p><br>With our Ajax course and a little Javascript knowledge you can use Ajax to take database information and store, alter, sort and conditionally format it all on the client side. &nbsp;This minimizes the load on your server and makes your applications respond quickly and without reloading the HTML page. &nbsp;Ajax communicates with the server behind the scenes while your user continues to use your web site, accessing the information they want. Our course will show you numerous Ajax examples and help you become proficient in using Ajax.<br><br>In our Ajax course, master trainer Mark Lassoff takes you through the basics of Ajax right to advanced topics like parsing JSON responses from web services. &nbsp;Our Ajax course is recommended for all web developers who want to improve their client side skills, and make professional, fast and responsive web applications.</p>',
          viewCount: 562,
          totalRatingStars: 7,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 2,
              feedback: 'Instructor talks too fast. Gotta watch it on slower playback speed.'
            },
            {
              ratingStars: 4,
              feedback:
                'Es un curso demasiado básico y está muy desactualizado. Podría llegar a ser útil para personas que apenas está ingresadno al mundo del ajax pero no lo veo como una buena base sino un pequeño pantallaso. No veo la necesitdad de armar un json de la forma en la que se hizo.'
            },
            {
              ratingStars: 1,
              feedback:
                'It is quite interesting, especially for the practical part. It is very dynamic too and quite organized and well explained. The only thing I would like you to add more information to configure localhost 8888 and try at the same time, maybe with Xampp?'
            }
          ],
          chapters: [
            {
              video: 'Business Analyst - 1.mp4',
              title: 'Ajaxified Web Sites'
            },
            {
              video: 'Business Analyst - 2.mp4',
              title: 'Dynamic content placement'
            },
            {
              video: 'Business Analyst - 3.mp4',
              title: 'The XMLHTTP Request Object'
            }
          ],
          thumbnail: 'https://images.viblo.asia/59f9277c-323f-4c6a-b151-ca52f8778db5.jpg',
          basePrice: 429
        },
        {
          title: 'Financial',
          shortDesc:
            'Learn how to create desktop and Internet GUI Java programs and take your Java programming to the next level.',
          longDesc:
            "<p>This course teaches you how to create desktop and web-based applications using Java Swing, Java's built-in user interface toolkit. Each tutorial is fairly self-contained; but we'll also build two complete applications step by step along the way, so you can choose either to work through the whole course or to dip in and out.</p>\n<p>Among other things we'll look at nearly all Swing widgets, we'll take a look at JDBC for database access, the graphics API, model-view-controller (MVC) architecture, serialization for saving data, the listener-event model and even basic animation.</p>\n<p>When you finish the course, you'll be an advanced Swing developer, capable of creating complex and scalable Swing GUI applications.</p>",
          viewCount: 676,
          totalRatingStars: 12,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 5,
              feedback:
                'Ive always wanted to get at least a good depth of Java Swing knowledge... YouTube was just an okay resource, but this course is an absolute eye-opener and a very encouraging one. Thank you for this course, John. Im sure many like myself have really benefited from this course.'
            },
            {
              ratingStars: 5,
              feedback:
                'John gives easy-to-follow explanations, amazing examples, and also teaches design principles that were unexpected, but greatly appreciated.'
            },
            {
              ratingStars: 2,
              feedback:
                'This course is perfect and relevant even today. Im learning so much, not only about swing, but MVC and more. There are a few spots of trouble, like the database file not downloading, but you can easily find Johns work on GitHub under Cave of Programming or recreate the file from his well-explained videos. I highly recommend this course. Dont be put off by its age.'
            }
          ],
          chapters: [
            {
              video: 'Financial - 1.mp4',
              title: 'About the course'
            },
            {
              video: 'Financial - 2.mp4',
              title: 'About our certification'
            },
            {
              video: 'Financial - 3.mp4',
              title: 'Getting your questions answered'
            }
          ],
          thumbnail:
            'https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?w=2000',
          basePrice: 279
        }
      ]
    },
    {
      image: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg',
      name: 'Personal Development',
      courses: [
        {
          title: 'Learn how to learn',
          shortDesc:
            'Understand and enjoy classical music at your own pace. A music history course, including a music theory introduction.',
          longDesc:
            '<p>&nbsp;&nbsp;<strong>Music appreciation for the 21st century. Learn about Classical Music in the Western world from the Middle Ages to the present.&nbsp;</strong>&nbsp;</p>\n<p>&nbsp; You&rsquo;ll begin with an introduction to the various elements of music -- for example, melody, rhythm, pitch and harmony &ndash; to give you the basics and vocabulary of music theory to understand and appreciate any type of music.&nbsp; You&rsquo;ll then explore the History of Classical Music through its various stylistic periods, from medieval chant right up to the current cutting edge. Anyone interested in classical music will benefit from this course.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; About this course:&nbsp;&nbsp;</strong>&nbsp;</p>\n<ol>\n<li>\n<p>Over 3800 happy students</p>\n</li>\n<li>\n<p>Updated regularly</p>\n</li>\n<li>\n<p>Full, free lifetime access</p>\n</li>\n<li>\n<p>All future extra and upgraded lectures are always included for free</p>\n</li>\n<li>\n<p>Unconditional Udemy 30 day money-back guarantee</p>\n</li>\n<li>\n<p><strong>See testimonials from former students below</strong></p>\n</li>\n</ol>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; This course is structured in 32 sections;&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; the first section is devoted to the elements of music in order to give you a detailed primer in music theory: melody, rhythm, pitch, harmony, texture, tempo, dynamics and form. Section 1 includes a&nbsp;<strong>Short History of Rock and Roll</strong>&nbsp;to illustrate the musical elements and musical style.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; After that, each section is devoted to one of the broad eras of music history:&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Middle Ages.</strong>&nbsp;Learn about early music beginning with monophony and how polyphony developed during the period of the building of the great cathedrals.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Renaissance.</strong>&nbsp;What was happening in music during the period in which Michelangelo was painting the Sistine Chapel? A return to some Ancient ideals led to a rediscovery of the science of acoustics, providing a basis for the theory of modern harmony. How the course of music changed as a result of Martin Luther&rsquo;s break from the Church.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Baroque.</strong>&nbsp;Here we have the origins of opera, as well as a flowering of instrumental music, culminating in the works of Bach, Handel and Vivaldi.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Classical.</strong>&nbsp;In reaction to the florid complexities of the Baroque, and influenced by the Age of Reason, the Classical period focused on simplicity and elegance, producing such composers as Haydn, Mozart and Beethoven.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Romanticism.</strong>&nbsp;The Age of Reason was too &ldquo;reasonable&rdquo; for the the Romanticists. They valued heightened emotion over elegance. The music of Schumann, Chopin, Wagner, Tchaikovsky, Verdi and Puccini were some of its greatest accomplishments.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Modern Period.</strong>&nbsp;Formerly referred to as the 20th century period, it now needs to reflect its expansion into the 21st century. Some of the greatest composers of this period have been Stravinsky, Bartok, Schoenberg, Britten, Shostakovich, Ives, Copland and Barber.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; We conclude with a retrospective and some final remarks to wrap it all up.</p>',
          viewCount: 983,
          totalRatingStars: 9,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 2,
              feedback:
                "I wanted to thank you, Bill Neely, for sharing your knowledge with us. This has been a super-duper class, and I find myself a little sad to find it drawing to a close. I've always enjoyed classical music rather passively; I now feel that I can be an active participant, with a deeper understanding of the musical concepts, the composers themselves, and their historical context. Very cool!"
            },
            {
              ratingStars: 4,
              feedback:
                'Excellent! You just gotta know your Staccato from your Legato it’s that simple. Seriously, I’m really enjoying the instructions it’s working for me what can I say bravo Eric! Thanks eh’ ??????? Check out his YouTube: Guitar Sage'
            },
            {
              ratingStars: 3,
              feedback: 'Excellent! Would highly recomment this course!'
            }
          ],
          chapters: [
            {
              video: 'Learn how to learn - 1.mp4',
              title: 'Introductory Overview'
            },
            {
              video: 'Learn how to learn - 2.mp4',
              title: 'A history of Rock and Roll, Part 1'
            },
            {
              video: 'Learn how to learn - 3.mp4',
              title: 'A history of Rock and Roll, Part 2'
            }
          ],
          thumbnail: 'https://static.toiimg.com/thumb/msid-64915824,width-1280,height-720,resizemode-4/.jpg',
          basePrice: 99
        },
        {
          title: 'Fail better',
          shortDesc:
            'Acoustic Guitar Theory, Fingerpicking, Fretting, Chords: Most Important 25 Videos For Getting Started w/ Playing Guitar',
          longDesc:
            '<p>Eliminate All the Major Struggles When Getting Started With Playing Guitar</p>\n<p>&nbsp; This course is the most&nbsp;<strong>"Direct and To the Point"</strong>&nbsp;course for ANY guitar player to watch and learn.&nbsp;</p>\n<p>&nbsp; Finding 2 Hours of Quality Guitar Lessons that can be accessed&nbsp;<em>anywhere</em>&nbsp;for FREE and at&nbsp;<em>any time</em>&nbsp;of the day is hard to come by these days.&nbsp;</p>\n<p>&nbsp; This free course solves all of those problems.&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Difference in Your Playing</p>\n<p>&nbsp; &nbsp;</p>\n<ul>\n<li>\n<p>Over 2 hours of Video and PDF attachments for most Lectures</p>\n</li>\n<li>\n<p>Access this course 24/7, Mac or PC, Iphone,&nbsp;Ipad and Android</p>\n</li>\n</ul>\n<p>&nbsp; Establishing solid core practice habits helps the speed of your results and also the quality of your results.&nbsp;</p>\n<p>You\'ll Go From First Time User, Picking Up the Guitar, to Chord Transitioning AND Everything in Between Including the 9 Most Essential Chords</p>\n<ul>\n<li>\n<p>Erich Andreas is Consider a Top 5 Online Guitar Teacher</p>\n</li>\n<li>\n<p>With&nbsp;<strong>more than 730,000</strong>&nbsp;Youtube subscribers and&nbsp;<strong>over 100 Million</strong>&nbsp;views his teachings have been able to reach Millions of people all around the world</p>\n</li>\n</ul>\n<p>&nbsp; The built in learning center allows you to track which videos you&nbsp;<strong>have or have not</strong>&nbsp;seen or watched.&nbsp; This is a great feature that gives the student the ability to learn at their own pace.&nbsp;</p>\n<p>Still undecided?&nbsp; Check out the value that\'s in this course.</p>\n<p>&nbsp; 23 Lectures equals out to be 6 hours of one-on-one lessons with Erich.&nbsp; That holds a value of $600 ($100/hr) and you get all of these videos, lectures, and PDFs for FREE.&nbsp;</p>\n<ul>\n<li>\n<p>Nearly 30 years of guitar experience both teaching and playing</p>\n</li>\n<li>\n<p>Incredible $600 value for Free</p>\n</li>\n</ul>\n<p>Add 2&nbsp;<em>Bonus Videos</em>&nbsp;- That Makes it a Total of 25 Videos!</p>\n<p>&nbsp;&nbsp;<strong>Special Tip:</strong>&nbsp; You\'re also the first to be notified about any promo codes for any of my other Udemy courses but you have to become a student of this free course to receive these special one-time promo codes.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>In all honesty, you can\'t find a hook-up as good as this anywhere else. 25 videos that will quickly help anyone get started with playing guitar ALL for Free.</strong>&nbsp;</p>\n<p>&nbsp; My guarantee is that you will see great guitar results if you follow this course and put in the practice.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong><em>Scroll up and click on the&nbsp;</em>"Start Learning Now"<em>&nbsp;button.</em></strong>&nbsp;</p>\n<p>&nbsp; Check out what our students have to say.&nbsp; Read the reviews.&nbsp;</p>\n<p>&nbsp; &nbsp; Get Started Today</p>',
          viewCount: 436,
          totalRatingStars: 8,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 4,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 1,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 3,
              feedback:
                'Sessions disjoined. Good content in some areas but little playing practice to action the theory and techniques taught.'
            }
          ],
          chapters: [
            {
              video: 'Fail better - 1.mp4',
              title: 'Introduction Video'
            },
            {
              video: 'Fail better - 2.mp4',
              title: 'Choosing an Acoustic guitar'
            },
            {
              video: 'Fail better - 3.mp4',
              title: 'Choosing an Electric guitar'
            }
          ],
          thumbnail: 'https://thumbs.dreamstime.com/b/pass-fail-red-pen-38454720.jpg',
          basePrice: 169
        },
        {
          title: 'Lazy is fine',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 444,
          totalRatingStars: 7,
          reviewCount: 2,
          reviews: [
            {
              ratingStars: 3,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 4,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            }
          ],
          chapters: [
            {
              video: 'Lazy is fine - 1.mp4',
              title: 'THE CORE - MODULE 1'
            },
            {
              video: 'Lazy is fine - 2.mp4',
              title: 'THE CORE - MODULE 2'
            },
            {
              video: 'Lazy is fine - 3.mp4',
              title: 'THE CORE - MODULE 3'
            }
          ],
          thumbnail: 'https://www.oberlo.com/media/1605807659-image3.jpg?fit=max&fm=jpg&w=1824',
          basePrice: 259
        },
        {
          title: 'Love yourself',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 240,
          totalRatingStars: 10,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 5,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 2,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 3,
              feedback: 'Nice vocal.'
            }
          ],
          chapters: [
            {
              video: 'Love yourself - 1.mp4',
              title: 'Vocal 1'
            },
            {
              video: 'Love yourself - 2.mp4',
              title: 'Vocal 2'
            },
            {
              video: 'Love yourself - 3.mp4',
              title: 'Vocal 3'
            }
          ],
          thumbnail: 'https://www.healthshots.com/wp-content/uploads/2020/02/self-love-2.jpg',
          basePrice: 399
        },
        {
          title: 'Quality Sleep',
          shortDesc:
            'All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra',
          longDesc:
            '<p>Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;This course is your&nbsp;<strong>"<em>Ticket</em>"</strong>&nbsp;to playing guitar.&nbsp;&nbsp;<strong>It is the most&nbsp;<em>direct and to the point</em>&nbsp;complete online guitar course.</strong>&nbsp;</p>\n<p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing</p>\n<ul>\n<li>\n<p>306&nbsp;Lectures/Videos with PDF Attachments</p>\n</li>\n<li>\n<p>Over 40 hours of video</p>\n</li>\n<li>\n<p>It\'s available on a PC or MAC and there is a iPad,&nbsp;iPhone and Android&nbsp;app ready to go!&nbsp;</p>\n</li>\n<li>\n<p>Keeping track of which videos(lectures) you have already watched is a breeze.&nbsp; Udemy has a great way of keeping track of your completed lessons(lectures).</p>\n</li>\n<li>\n<p>The entire course is organized in step-by-step easy to follow layout</p>\n</li>\n</ul>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;The more you practice the better you will get.&nbsp; With the&nbsp;<em>Right Practice</em>&nbsp;style you will be able to witness fast results!&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp;Erich\'s teachings are different than all of the other online teachers.&nbsp; He has made it super easy to be successful at playing guitar.&nbsp; All you have to do is follow the videos in order and put together some good practice habits.&nbsp;</p>\n<p>Here is what Renee Martin had to say about Erichs Course: See reviews at the bottom.</p>\n<p>&nbsp;&nbsp;<strong>"WOW! 0 to 60 in 306 Lessons!</strong>&nbsp;</p>',
          viewCount: 557,
          totalRatingStars: 9,
          reviewCount: 3,
          reviews: [
            {
              ratingStars: 5,
              feedback:
                'The information about purchasing a guitar was very intuitive. I already own three and what you said about budget, sound and feel made me realize that I did things right when I bought the guitars.'
            },
            {
              ratingStars: 3,
              feedback:
                "The technique to mute the strings isn't appropriate and can lead to bad habits. Overall it's fine to know different aspects though."
            },
            {
              ratingStars: 1,
              feedback: 'Nice vocal.'
            }
          ],
          chapters: [
            {
              video: 'Quality Sleep - 1.mp4',
              title: 'Introduction to DJ'
            },
            {
              video: 'Quality Sleep - 2.mp4',
              title: 'Mixing with MIDI'
            },
            {
              video: 'Quality Sleep - 3.mp4',
              title: 'Introducing Logic Pro X'
            }
          ],
          thumbnail: 'https://www.helpguide.org/wp-content/uploads/young-woman-smiling-in-bed-stretching-arms-out.jpg',
          basePrice: 129
        }
      ]
    }
  ]
}

const nukedb = async () => {
  await User.collection.drop().then(() => console.log('User dropped'))
  const userModels = await Promise.all(
    users.map(async (user) => {
      return await User.create({
        email: user.email,
        isVerified: true,
        role: user.role,
        name: user.name,
        about: user.about
      }).then(async (result) => {
        result.password = user.password
        return await result.save()
      })
    })
  )
  const students = userModels.filter((user) => user.role == 'student')
  const lecturers = userModels.filter((user) => user.role == 'lecturer')

  await UserOTPVerification.collection.drop().then(() => console.log('UserOTPVerification dropped'))
  await Category.collection.drop().then(() => console.log('Category dropped'))
  await Course.collection.drop().then(() => console.log('Course dropped'))
  await Review.collection.drop().then(() => console.log('Review dropped'))
  const categories = data.Categories
  await Promise.all(
    categories.map(async (category) => {
      const courses = category.courses
      const courseModels = await Promise.all(
        courses.map(async (course) => {
          const reviews = await Promise.all(
            course.reviews.map(async (review) => {
              const student = students[Math.floor(Math.random() * students.length)]
              return await Review.create({
                author: student._id,
                ratingStars: review.ratingStars,
                feedback: review.feedback
              })
            })
          )
          const chapters = await Promise.all(
            course.chapters.map(async (chapter) => {
              return await Chapter.create({
                video: `https://apluscademy.sgp1.cdn.digitaloceanspaces.com/${chapter.video}`,
                title: chapter.title
              })
            })
          )
          const lecturer = lecturers[Math.floor(Math.random() * lecturers.length)]
          const reviewIds = reviews.map((review) => review._id)
          return await Course.create({
            lecturer: lecturer._id,
            title: course.title,
            shortDesc: course.shortDesc,
            longDesc: course.longDesc,
            markedAsComplete: true,
            viewCount: course.viewCount,
            totalRatingStars: course.totalRatingStars,
            reviewCount: course.reviewCount,
            basePrice: course.basePrice,
            image: course.thumbnail,
            reviews: reviewIds,
            chapters: chapters,
            category: category.name
          })
        })
      )
      const courseIds = courseModels.map((course) => course._id)
      return await Category.create({ name: category.name, image: category.image, courses: courseIds })
    })
  ).then(() => {
    console.log('Category created')
  })
}

nukedb().then(() => console.log('nuke db done'))

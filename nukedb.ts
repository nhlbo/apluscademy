import mongoose from 'mongoose'
import { Category } from './src/models/category'
import { Course } from './src/models/course'
import { Review } from './src/models/review'
import { User, UserOTPVerification } from './src/models/user'

const MONGO_DB_URL = process.env.MONGO_DB_URL || ''

mongoose.connect(MONGO_DB_URL).then(() => console.log('Connected to the database.'))

const users = [
  {
    email: '19127463@student.hcmus.edu.vn',
    password: '12345678',
    role: 'student'
  },
  { email: 'nanera@gmail.com', password: '12345678', role: 'student' },
  {
    email: 'hoanglong@gmail.com',
    password: '12345678',
    role: 'lecturer'
  },
  {
    email: 'admin@gmail.com',
    password: '12345678',
    role: 'admin'
  }
]

const data = {
  Categories: [
    {
      name: 'Development',
      image: '',
      courses: [
        {
          title: 'Javascript for Beginners',
          shortDesc:
            'Learn javascript online and supercharge your web design with this Javascript for beginners training course.',
          longDesc:
            '<p>Take this Javascript training course and start learning Javascript today.<br><br>"As a business guy I have no place in programming." Ten years ago you could have gotten away with that statement. Today you say that to your colleagues and they scoff at you before they go back to their computers to fix real problems and do real work.<br><br>If you want to do something useful start by learning Javascript . In these days when the browser is central to all computer use knowing "the language of the browser" is the most important step. A few years ago Javascript potential was uncertain and many programmers considered it useless. These days however competent programmers have identified Javascript real potential and uses and it has gone from a toy language to the main language of the browser. It has become one of the most useful languages of this era. Every developer needs at least a basic understanding of Javascript. A developer who knows Javascript is the rockstar of the company and is in constant demand by employers. Our online Javascript</p>\n<p>course will get you started by teaching all the essential aspects of coding in Javascript. So... what\'s it gonna be? Do you want to supercharge your career and be in constant demand by employers? Do you want to learn how to create dynamic and innovative Javascript documents? Start programming today with our Javascript course for Beginners training and take control of your career.</p>',
          viewCount: 286,
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
        }
      ]
    },
    {
      name: 'Music',
      courses: [
        {
          title: 'Adventures in Classical Music—Music Appreciation for All!',
          shortDesc:
            'Understand and enjoy classical music at your own pace. A music history course, including a music theory introduction.',
          longDesc:
            '<p>&nbsp;&nbsp;<strong>Music appreciation for the 21st century. Learn about Classical Music in the Western world from the Middle Ages to the present.&nbsp;</strong>&nbsp;</p>\n<p>&nbsp; You&rsquo;ll begin with an introduction to the various elements of music -- for example, melody, rhythm, pitch and harmony &ndash; to give you the basics and vocabulary of music theory to understand and appreciate any type of music.&nbsp; You&rsquo;ll then explore the History of Classical Music through its various stylistic periods, from medieval chant right up to the current cutting edge. Anyone interested in classical music will benefit from this course.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; About this course:&nbsp;&nbsp;</strong>&nbsp;</p>\n<ol>\n<li>\n<p>Over 3800 happy students</p>\n</li>\n<li>\n<p>Updated regularly</p>\n</li>\n<li>\n<p>Full, free lifetime access</p>\n</li>\n<li>\n<p>All future extra and upgraded lectures are always included for free</p>\n</li>\n<li>\n<p>Unconditional Udemy 30 day money-back guarantee</p>\n</li>\n<li>\n<p><strong>See testimonials from former students below</strong></p>\n</li>\n</ol>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______________________________________________________________________&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; This course is structured in 32 sections;&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; the first section is devoted to the elements of music in order to give you a detailed primer in music theory: melody, rhythm, pitch, harmony, texture, tempo, dynamics and form. Section 1 includes a&nbsp;<strong>Short History of Rock and Roll</strong>&nbsp;to illustrate the musical elements and musical style.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; After that, each section is devoted to one of the broad eras of music history:&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Middle Ages.</strong>&nbsp;Learn about early music beginning with monophony and how polyphony developed during the period of the building of the great cathedrals.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Renaissance.</strong>&nbsp;What was happening in music during the period in which Michelangelo was painting the Sistine Chapel? A return to some Ancient ideals led to a rediscovery of the science of acoustics, providing a basis for the theory of modern harmony. How the course of music changed as a result of Martin Luther&rsquo;s break from the Church.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Baroque.</strong>&nbsp;Here we have the origins of opera, as well as a flowering of instrumental music, culminating in the works of Bach, Handel and Vivaldi.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Classical.</strong>&nbsp;In reaction to the florid complexities of the Baroque, and influenced by the Age of Reason, the Classical period focused on simplicity and elegance, producing such composers as Haydn, Mozart and Beethoven.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; Romanticism.</strong>&nbsp;The Age of Reason was too &ldquo;reasonable&rdquo; for the the Romanticists. They valued heightened emotion over elegance. The music of Schumann, Chopin, Wagner, Tchaikovsky, Verdi and Puccini were some of its greatest accomplishments.&nbsp;</p>\n<p>&nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; The Modern Period.</strong>&nbsp;Formerly referred to as the 20th century period, it now needs to reflect its expansion into the 21st century. Some of the greatest composers of this period have been Stravinsky, Bartok, Schoenberg, Britten, Shostakovich, Ives, Copland and Barber.&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &bull; We conclude with a retrospective and some final remarks to wrap it all up.</p>',
          viewCount: 78,
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
          basePrice: 349
        }
      ]
    }
  ]
}

const nukedb = async () => {
  await User.collection.drop().then(() => console.log('User dropped'))
  const userModels = await Promise.all(
    users.map(async (user) => {
      return await User.create({ email: user.email, isVerified: true, role: user.role }).then(async (result) => {
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
          const lecturer = lecturers[Math.floor(Math.random() * lecturers.length)]
          const reviewIds = reviews.map(review => review._id)
          return await Course.create({
            lecturer: lecturer._id,
            title: course.title,
            shortDesc: course.shortDesc,
            longDesc: course.longDesc,
            markedAsComplete: true,
            viewCount: course.viewCount,
            basePrice: course.basePrice,
            image: course.thumbnail,
            reviews: reviewIds
          })
        })
      )
      const courseIds = courseModels.map(course => course._id)
      return await Category.create({ name: category.name, image: category.image, courses: courseIds })
    })
  ).then(() => {
    console.log('Category created')
  })
}

nukedb().then(() => console.log('nuke db done'))

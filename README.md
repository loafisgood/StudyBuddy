## Inspiration
As students, we're no strangers to learning and studying tools like Quizlet. However, an increasing amount of these educational tools have transitioned into subscription-based education services, rendering studying an almost "pay-to-win" situation. To combat this, we've created StuddyBuddy, an online tool that helps students understand and study for their coursework. By crafting a personalized AI-powered study buddy (a black bear named BuddyBear), we strive towards making online studying more inclusive and accessible for all students. 

## What it does
By harnessing the power of AI, StuddyBuddy performs features such as summarizing passages from course resources (uploaded by students) and crafting personalized practice problems to help students learn better. Instead of mandating account registration, StuddyBuddy only requires users to input their names for personalization, similar to a drop-in study or tutoring session. 

## How we built it
Our journey to create StuddyBuddy began with a clear mission: to tackle the issue of subscription-based educational tools and make learning more inclusive. We utilized modern technology and AI, with Next.js for the flexible front end and Express for a robust back end, to build a dynamic and responsive web application.

StuddyBuddy's centerpiece is BuddyBear, our AI study companion. BuddyBear uses natural language processing and machine learning to simplify complex course materials and create personalized practice problems for each student. What sets us apart is our user-friendly approach. We simplified onboarding - students only need to input their names for personalization, making it feel like a drop-in study session.

Through Next.js, Express, and AI, we've created an innovative and accessible solution, aiming to break down barriers and empower students to excel.

## Challenges we ran into
Developing a platform like StuddyBuddy posed some intriguing user experience challenges. We aimed to create a seamless and engaging learning environment for students, which demanded a deep understanding of their preferences and needs. Ensuring a user-friendly interface that students would find intuitive was a top priority. We ran into issues like designing a layout that's both informative and clutter-free, and it required multiple iterations and user feedback to strike the right balance. Additionally, making the registration process as frictionless as possible while still personalizing the experience was a design challenge. We addressed these issues by conducting extensive usability testing and implementing user-centric design principles to ensure that StuddyBuddy is a platform that students love to use.

Implementing BuddyBear, our AI study companion, introduced a set of unique challenges. The AI needed to accurately summarize complex course materials and generate personalized practice problems. Achieving this required substantial expertise in natural language processing and machine learning. We faced hurdles in fine-tuning the algorithms to ensure the content summaries were not overly simplistic or too complex. Maintaining a balance between accuracy and readability was a constant challenge. Additionally, making BuddyBear adaptable to various subjects and resource types was a significant task. We overcame these challenges through continuous refinement, extensive testing, and a dedicated team of AI experts who constantly fine-tuned the algorithms. The result is a highly effective AI companion that enhances the learning experience for our users.

These challenges, while demanding, ultimately led to a better and more refined platform that meets the needs of students. We see them as opportunities for growth and improvement, and our commitment to overcoming them is what makes StuddyBuddy a valuable tool for the education community.

## Accomplishments that we're proud of
One of our proudest accomplishments is addressing the issue of subscription-based education tools. We've created a platform that empowers students by providing high-quality educational support without the hefty price tag. StuddyBuddy aims to level the playing field and make learning accessible to all students, regardless of their financial resources. The development of BuddyBear, our AI companion, is another significant achievement. Through natural language processing and machine learning, BuddyBear can summarize complex course materials and generate personalized practice problems. This accomplishment not only enhances the learning experience but also showcases our commitment to using cutting-edge technology for educational benefit.

## What we learned
One of the most important lessons we learned is the value of putting the user at the center of our design and development process. Regular user testing and feedback sessions helped us understand the user's needs, preferences, and pain points. This approach enabled us to create a platform that truly serves our target audience. The implementation of AI in education was a significant learning point for us. We explored the capabilities of natural language processing and machine learning to develop BuddyBear, our AI-powered study buddy. This experience highlighted the potential of AI to enhance the educational experience and provide personalized support to students. Our project reinforced the importance of inclusivity in education. We recognized that not all students have access to expensive educational tools, and we learned that it's our responsibility to provide an inclusive solution. StuddyBuddy aims to make quality education accessible to all, regardless of financial resources.

## What's next for StuddyBuddy 
- Optional account registration so students can track daily study progress and earn rewards (different BuddyBear avatars) when they reach milestones
- A studying stats feature where students can view topics ranked by proficiency; questions that are answered incorrectly will reappear when students ask BuddyBear for practice problems.



  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

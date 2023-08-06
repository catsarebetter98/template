import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Banner from '../utils/Banner';

import Header from "../utils/Header";
import Footer from '../utils/Footer';

import Projects from '../components/Projects';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
  TikTokIcon,
  ThreadsIcon
} from '../components/SocialIcons';
import logoAirbnb from '../../../../static/images/blog/logos/airbnb.svg';
import logoFacebook from '../../../../static/images/blog/logos/facebook.svg';
import logoPlanetaria from '../../../../static/images/blog/logos/planetaria.svg';
import logoStarbucks from '../../../../static/images/blog/logos/starbucks.svg';
import image1 from '../../../../static/images/blog/photos/image-1.jpg';
import image2 from '../../../../static/images/blog/photos/image-2.jpg';
import image3 from '../../../../static/images/blog/photos/image-3.jpg';
import image4 from '../../../../static/images/blog/photos/image-4.jpg';
import image5 from '../../../../static/images/blog/photos/image-5.jpg';

import logoAnimaginary from '../../../../static/images/blog/logos/animaginary.svg';
import logoCosmos from '../../../../static/images/blog/logos/cosmos.svg';
import logoHelioStream from '../../../../static/images/blog/logos/helio-stream.svg';
import logoOpenShuttle from '../../../../static/images/blog/logos/open-shuttle.svg';

const software_projects = [
  {
    name: 'Instacart Help Page',
    description:
      'In 2020 I was the sole engineer in charge of the Instacart Help Page. My favorite project was a chatbot integration that saved the company ~$27,000 per day.',
    link: { href: 'http://instacart.com/help', label: 'Instacart Help Page' },
    value: "Faster support responses -> more groceries delivered.",
    tech: "Ruby on Rails, React."
    // logo: logoPlanetaria,
  },
  {
    name: 'Leadcat',
    description:
      'I scraped Twitter post-Elon to get high-quality leads for enterprise account executives. Used AI to generate data-driven outbound messages. Integrated with the Twitter and OpenAI API. Discontinued and converted to an engineering marketing tool.',
    link: { href: 'https://leadcat.co', label: 'Leadcat' },
    value: "More leads -> more sales.",
    tech: "Django, React, Python, TailwindCSS, OpenAI API"
    // logo: logoAnimaginary,
  },
  {
    name: 'Chips',
    description:
      'Full-featured slack app directory.',
    link: { href: '#', label: 'github.com' },
    value: "",
    tech: "Django, React, Python"
    // logo: logoHelioStream,
  },
  {
    name: 'RemoteTechJob',
    description:
      "Webscraper that sent you jobs as soon as they were posted on a company's job page.",
    link: { href: '#', label: 'github.com' },
    value: "Faster time to apply -> more interview opportunity",
    tech: "Tech used: Django, Python, React, AntDesign."
    // logo: logoCosmos,
  }
];

const writing_projects = [
  {
    name: "Hello There: An Introvert's Guide To Professional Networking",
    description:
      'Published a guide on professional networking. Went #1 on HackerNoon for the day, top 20 for the week.',
    link: { href: 'https://hackernoon.com/hello-there-the-introverted-developers-guide-to-professional-networking', label: 'link' },
    value: "500+ page views through backlink on day 1.",
    // logo: logoPlanetaria,
  },
  {
    name: 'Do Any Startups Use Wordpress After 20 Years?',
    description:
      'Investigative piece on Wordpress and the impact across new YC startups.',
    link: { href: 'https://autopitch.ai/posts/blog/do-any-startups-use-wordpress-after-20-years', label: 'link' },
    value: "#4 on HackerNews for the day. 7,000 page views and 135 backlinks generated on the first day.",
    // logo: logoAnimaginary,
  },
  {
    name: 'The TPM Course Learning Hub',
    description:
      'A learning hub that drove 45 email sign ups for a cohort-based course I built with Maven. Built around a few key topics for the target audience.',
    link: { href: 'https://productmanagers.hshidara.com/learn', label: 'link' },
    value: "45 email sign ups -> more revenue",
    // logo: logoAnimaginary,
  }
];

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props} target={"_blank"}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]
}
 const ResumeItem = ({ company, title, logo, start, end }) => (
    <div className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src={logo} alt="" className="h-7 w-7" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${start.label ?? start} until ${
                    end.label ?? end
                }`}
            >
                <time dateTime={start.dateTime ?? start}>
                    {start.label ?? start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={end.dateTime ?? end}>
                    {end.label ?? end}
                </time>
            </dd>
        </dl>
    </div>
);

function Photos() {
    const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

const logoData = [
  {
    name: 'Indeed',
    url: 'https://logo.clearbit.com/indeed.com',
  },
  {
    name: 'Instacart',
    url: 'https://logo.clearbit.com/instacart.com',
  },
  {
    name: 'Collective Health',
    url: 'https://logo.clearbit.com/collectivehealth.com',
  },
];

const Logo = ({ url }) => (
  <img src={url} alt="Logo" className="w-8 h-8 m-2 rounded-full" />
);

const LogoRow = () => {
  const logoData = [
    {
      name: 'Indeed',
      url: 'https://logo.clearbit.com/indeed.com',
    },
    {
      name: 'Instacart',
      url: 'https://logo.clearbit.com/instacart.com',
    },
    {
      name: 'Collective Health',
      url: 'https://logo.clearbit.com/collectivehealth.com',
    },
  ];

  return (
    <span className='flex flex-row justify-start items-center mt-2'>
      Prev:
      {logoData.map((logo) => (
        <Logo url={logo.url} />
      ))}
    </span>
  );
};

function Home() {
    return (
        <div>
            <Banner />
            <Container className="mt-9 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        Software engineer, content marketer, and launch expert.
                    </h1>
                    <p className="mt-6 text-base text-zinc-400 text-xl">
                        I'm Hide. I'm passionate about profitable internet businesses. Currently – consultant and creator. My life's work is to 
                        <b className='ml-2'>exponentially increase the TGMV (total gross merchandise value) of online businesses</b>. 
                        <LogoRow />
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://twitter.com/catsarecuter98"
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href="https://github.com/catsarebetter98"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://linkedin.com/in/hshidara"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                        <SocialLink
                            href="https://www.tiktok.com/@catsarecuter98"
                            aria-label="Follow on TikTok"
                            icon={TikTokIcon}
                        />
                        <SocialLink
                            href="https://www.youtube.com/@hshidara"
                            aria-label="Follow on Youtube"
                            icon={YouTubeIcon}
                        />
                        <SocialLink
                            href="https://www.threads.net/@catsarebetter98"
                            aria-label="Follow on Threads"
                            icon={ThreadsIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos />
            <Projects projects={software_projects} title={"Software"} intro={"I've been lucky to work with some incredible engineers and some awesome projects. Here's a few things I've built and how much money they've made."}/>
            <Projects projects={writing_projects} title={"Writing"} intro={"I'm always writing. It's my passion and joy. Occasionally I'll publish them to the internet. If they're well-written and promoted, sometimes they'll go viral."}/>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('home'));

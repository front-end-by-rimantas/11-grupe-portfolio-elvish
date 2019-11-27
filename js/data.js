"use strict";

// header
const headerlinks = [
    { title: 'Home',
      idname: 'hero'
    },
    { title: 'About',
      idname: 'aboutme'
    },
    { title: 'Services',
    idname: 'services'
    },
    { title: 'Education',
      idname: 'education'
    },
    { title: 'Work',
      idname: 'work'
    },
    { title: 'Client',
      idname: 'client'
    },
    { title: 'Blog',
      idname: 'blog'
    },
    { title: 'Contact',
      idname: 'contact'
    },
];

// hero

// about me
const skills1 = [
    {
        title: 'Development',
        value: 80
    },
    {
        title: 'WordPress',
        value: 59
    },
    {
        title: 'Photoshop',
        value: 88
    },
    {
        title: 'Html',
        value: 96
    },
    {
        title: 'Css',
        value: 70
    },
    {
        title: 'Asp.net',
        value: 58
    }
];
// services
const services = [
    {
        icon: '1.png',
        title: 'Graphic Design',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: '2.png',
        title: 'Unlimited Color',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: '3.png',
        title: 'Media Marketing',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: '4.png',
        title: 'Unlimited Wifi',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: '5.png',
        title: 'Responsive Design',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: '6.png',
        title: 'Easy to customize',
        about: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    }
];
// statistika
const statistics = [
    {
        icon: '1.png',
        value_start: 4,
        value_end: 150,
        title: 'Working Hours'
    },
    {
        icon: '2.png',
        value_start: 10,
        value_end: 568,
        title: 'Completed Projects'
    },
    {
        icon: '3.png',
        value_start: 201,
        value_end: 656,
        title: 'No. of Clients'
    },
    {
        icon: '4.png',
        value_start: 6,
        value_end: 356,
        title: 'Team Member'
    }
];
// education
const educationLeft = [
    {
        date: '2010 - 2014',
        title: 'Studied At Cambridge University',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        date: '2014 - 2016',
        title: 'Master In Computer Science',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        date: '2016 - 2018',
        title: 'UI/UX Designer',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    }
];
const educationRight = [
    {
        date: '2010 - 2014',
        title: 'Senior Graphic Designer',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        date: '2014 - 2016',
        title: 'Web Developer',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        date: '2016 - 2018',
        title: 'Freelancer And Themeforest',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.'
    }
];
// hire me

// our work
const works = [
    {
        name: 'studio & art',
        title: ['ul elements', 'icons'],
        photo: '1.jpg',
        tags: ['webdesign', 'wordpress']
    },
    {
        name: 'creatice & art',
        title: ['illustrations'],
        photo: '2.jpg',
        tags: ['seo', 'webdesign']
    },
    {
        name: 'open imagination',
        title: ['media', 'icons'],
        photo: '3.jpg',
        tags: ['work']
    },
    {
        name: 'locked steel gate',
        title: ['graphics', 'ul elements'],
        photo: '4.jpg',
        tags: ['seo', 'webdesign']
    },
    {
        name: 'mac sunglasses',
        title: ['illustrations', 'graphics'],
        photo: '5.jpg',
        tags: ['seo', 'work']
    },
    {
        name: 'Backpack contents',
        title: ['ul elements', 'media'],
        photo: '6.jpg',
        tags: ['wordpress']
    },
];

// our clients
const clients = [
    {
        photo: '3.png',
        name: 'Kirk McFall',
        link: 'Google',
        about: ` "The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."`,
    },
    {
        photo: '3.png',
        name: 'Edward Evans',
        link: 'Google',
        about: ` "The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."`,
    },
    {
        photo: '3.png',
        name: 'Antonio Hernandez',
        link: 'Google',
        about: ` "The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."`,
    },
];
// great people
const greatList = [
    {
        icon: '1.png',
    },
    {
        icon: '2.png',
    },
    {
        icon: '3.png',
    },
    {
        icon: '4.png',
    },
    {
        icon: '5.png',
    },
    {
        icon: '6.png',
    }
];

// subscribe

// our blog
const blog_data = [
    {
        icon: ['./img/our-blog/blog-1.jpg'],
        title: 'There are many variations',
        tag: "Lifestyle",
        date: '13 February 2018',
        author: "Envato",
        about: 'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
        readLink: "#"
    },
    {
        icon: ['./img/our-blog/blog-2.jpg'],
        video: 'https://player.vimeo.com/video/29440238?title=0&byline=0&portrait=0',
        title: 'Contrary to popular belief',
        tag: "Travel",
        date: '13 February 2018',
        author: "Envato",
        about: 'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
        readLink: "#"
    },
    {
        icon: ['./img/our-blog/blog-5.jpg'],
        slide: ['./img/our-blog/blog-3.jpg','./img/our-blog/blog-4.jpg','./img/our-blog/blog-5.jpg'],
        title: 'Lorem ipsum is not simply',
        tag: "Food & Drinks",
        date: '13 February 2018',
        author: "Envato",
        about: 'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
        readLink: "#"
    }
];
// contact

// footer


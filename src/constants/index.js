// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
// import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

import shoe from "../assets/products/shoe.png";
import shoe1 from "../assets/products/shoe1.png";
import shoe2 from "../assets/products/shoe2.png";
import shoe3 from "../assets/products/shoe3.png";
import shoe4 from "../assets/products/shoe4.png";
import shoe5 from "../assets/products/shoe5.png";



export const navLinks = [
    { href: "#home", label: "Начало" },
    { href: "#products", label: "Продукти" },
    { href: "#about-us", label: "Инфо" },
    { href: "#contact-us", label: "Контакти" },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const sneaker_categories = [
    {
        id: "men",
        name: "Мъжки маратонки",
      },
      {
        id: "women",
        name: "Дамски маратонки",
      },
      {
        id: "kids",
        name: "Детски маратонки",
      },
      {
        id: "running",
        name: "Маратонки за бягане",
      },
      {
        id: "basketball",
        name: "Баскетболни обувки",
      },
      {
        id: "skateboarding",
        name: "Скейтборд обувки",
      },
      {
        id: "limited-edition",
        name: "Ограничена серия",
      },
      {
        id: "sale",
        name: "Намаления",
      },
      {
        id: "new-arrivals",
        name: "Нови модели",
      },
      {
        id: "retro",
        name: "Ретро класики",
      },
  ];
  
export const products = [
    {
        imgURL: shoe,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe1,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe2,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe3,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
    { imgURL: shoe4, name: "Nike Air Jordan-001", price: "$230.20" },
    { imgURL: shoe5, name: "Nike Air Jordan-02", price: "$205.20" },
    { imgURL: shoe3, name: "Nike Air Jordan-11", price: "$215.20" },
    { imgURL: shoe1, name: "Nike Air Jordan-20", price: "$225.20" },
    { imgURL: shoe, name: "Nike Air Jordan-30", price: "$235.20" },
    { imgURL: shoe2, name: "Nike Air Jordan-03", price: "$240.20" },
    { imgURL: shoe4, name: "Nike Air Jordan-12", price: "$250.20" },
    { imgURL: shoe3, name: "Nike Air Jordan-21", price: "$260.20" },
    { imgURL: shoe5, name: "Nike Air Jordan-31", price: "$270.20" },
    { imgURL: shoe, name: "Nike Air Jordan-04", price: "$280.20" },
    { imgURL: shoe1, name: "Nike Air Jordan-13", price: "$290.20" },
    { imgURL: shoe, name: "Nike Air Jordan-22", price: "$300.20" },
    { imgURL: shoe3, name: "Nike Air Jordan-32", price: "$310.20" },
    { imgURL: shoe2, name: "Nike Air Jordan-05", price: "$320.20" },
    { imgURL: shoe5, name: "Nike Air Jordan-14", price: "$330.20" },
    { imgURL: shoe4, name: "Nike Air Jordan-23", price: "$340.20" }
];

// export const services = [
//     {
//         imgURL: truckFast,
//         label: "Free shipping",
//         subtext: "Enjoy seamless shopping with our complimentary shipping service."
//     },
//     {
//         imgURL: shieldTick,
//         label: "Secure Payment",
//         subtext: "Experience worry-free transactions with our secure payment options."
//     },
//     {
//         imgURL: support,
//         label: "Love to help you",
//         subtext: "Our dedicated team is here to assist you every step of the way."
//     },
// ];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const faq = [
  {
    id: "0",
    question: "Как да избера правилния размер обувки?",
    answer: "Препоръчваме да измерите крака си и да използвате нашата таблица с размери, за да намерите най-подходящия номер."
  },
  {
    id: "1",
    question: "Как да се грижа за маратонките си?",
    answer: "За почистване използвайте мека четка и сапунена вода. Не ги перете в пералня, за да избегнете повреди."
  },
  {
    id: "2",
    question: "Предлагате ли безплатна доставка?",
    answer: "Да, предлагаме безплатна доставка за поръчки над 100 лв. в рамките на България."
  },
  {
    id: "3",
    question: "Как мога да върна или заменя поръчка?",
    answer: "Можете да върнете или замените поръчката си в рамките на 14 дни, ако обувките не са носени и са в оригиналната им опаковка."
  },
  {
    id: "4",
    question: "Какви методи на плащане приемате?",
    answer: "Приемаме плащания с кредитни и дебитни карти, наложен платеж и PayPal."
  },
  {
    id: "5",
    question: "Как мога да проверя статуса на поръчката си?",
    answer: "След изпращане на поръчката ще получите имейл с номер за проследяване, с който можете да следите статуса на вашата доставка."
  },
  {
    id: "6",
    question: "Предлагате ли отстъпки или промоции?",
    answer: "Да! Следете нашите социални мрежи и се абонирайте за бюлетина ни, за да получавате информация за нови промоции и отстъпки."
  },
  {
    id: "7",
    question: "Как мога да направя поръчка?",
    answer: "Добавете желаните продукти в количката, отидете на касата и следвайте инструкциите за плащане и доставка."
  },
  {
    id: "8",
    question: "Как да разбера дали даден модел е наличен?",
    answer: "Всяка продуктова страница показва наличността. Ако даден размер е изчерпан, можете да се абонирате за известие, когато отново стане наличен."
  },
  {
    id: "9",
    question: "Предлагате ли персонализирани маратонки?",
    answer: "В момента не предлагаме персонализиране, но често имаме лимитирани колекции с уникални дизайни."
  },
  {
    id: "10",
    question: "Какъв е срокът за доставка?",
    answer: "Стандартната доставка отнема 2-5 работни дни, в зависимост от вашето местоположение."
  },
  {
    id: "11",
    question: "Мога ли да сменя адреса за доставка след поръчка?",
    answer: "Ако поръчката ви още не е изпратена, можете да се свържете с нас, за да променим адреса за доставка."
  }
];



export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];

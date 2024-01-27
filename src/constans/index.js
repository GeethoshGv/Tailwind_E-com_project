import { facebook, instagram, twitter } from "../assets/icons";
import {
  image3,
  image4,
  image5,
  image7,
  image8,
  image10,
  image12,
  image13,
  image14,
  image16,
  head3,
  head2,
  head1,
} from "../assets/images";

export const navbarLinks = [
  { href: "#home", label: "Home" },
  { href: "#Collection", label: "Collection" },
  { href: "#products", label: "Products" },
  { href: "#featuredProduct", label: "Featured" },
  { href: "#contact-us", label: "Contact Us" },
];

export const products = [
  {
    imgURL: head2,
    name: "Sennheiser ",
    price: "$200.20",
  },
  {
    imgURL: image5,
    name: "Nike",
    price: "$210.20",
  },
  {
    imgURL: head3,
    name: "K-240",
    price: "$220.20",
  },
  {
    imgURL: image4,
    name: "Jordan",
    price: "$230.20",
  },
];
export const FeaturedProduct = [
  {
    imgURL: head1,
    name: "Marshall",
    price: "$150.20",
  },
  {
    imgURL: image7,
    name: "Nike Air ",
    price: "$210.20",
  },
  {
    imgURL: image8,
    name: " Air Jordan-10",
    price: "$220.20",
  },
  {
    imgURL: head3,
    name: "K-240",
    price: "$90.20",
  },
  {
    imgURL: image10,
    name: "Nike Air Jordan1",
    price: "$200.20",
  },
  {
    imgURL: head2,
    name: "Nike Air Jordan",
    price: "$210.20",
  },
];

export const services = [
  {
    imgURL: image12,
    label: " SHIPPING & RETURNS",
    subtext:
      "Enjoy shipping in 1-2 business days and easy returns and exchange with no extra cost.",
  },
  {
    imgURL: image13,
    label: "COLLECT IN STORE",
    subtext:
      "Order online and collect your order from your preferred Gucci boutique.",
  },
  {
    imgURL: image14,
    label: "ORDER TRACKING",
    subtext:
      "Once your order is on its way, we will send you a tracking number by email.",
  },
];
export const CustomProduct = [
  {
    imgURL: image16,
    label: " PERSONALIZATION",
    subtext:
      "Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.",
  },
  {
    imgURL: image3,
    label: "COLLECT IN STORE.",
    subtext:
      "XXXX's Collect In Store service combines the ease of shopping online with a personalized boutique experience.",
  },
  {
    imgURL: image5,
    label: "PACKAGING",
    subtext:
      "Choose our online exclusive tote or add a gift message at checkout to enjoy the boutique shopping bag.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force", link: "/" },
      { name: "Headphones", link: "/" },
      { name: " Jordan 1", link: "/" },
      { name: "Cap", link: "/" },
      { name: "Baca bucci", link: "/" },
      { name: "Shirt", link: "/" },
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
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

import { getAboutBhtPaths } from "@/graphql/../graphql_helperFunc";
import _ from "lodash";

const bhtPaths: any[] = [];

getAboutBhtPaths()
  .then((paths) => {
    paths.data.aboutBhutanSections.map((path) =>
      bhtPaths.push({
        name: `${_.startCase(path.url)
          .replace("And", "and")
          .replace("In", "in")}`,
        href: "/bhutan/[bhutan]",
        as: `/bhutan/${path.url}`,
      })
    );
    bhtPaths.push({
      name: "Sectors of Bhutan",
      href: "/bhutan/parts-of-bhutan",
      as: "/bhutan/parts-of-bhutan",
    });
  })
  .catch((err) => console.log(err));

const navLinks = [
  {
    name: "Home",
    href: "/",
    index: 0,
  },
  {
    name: "Packages",
    href: "/packages",
    index: 1,
    children: [
      {
        name: "Bhutan Luxury tours",
        href: "/packages/[name]",
        as: "/packages/bhutan-luxury-tours?page=1",
      },
      {
        name: "Cultural tours in Bhutan",
        href: "/packages/[name]",
        as: "/packages/cultural-tours-in-bhutan?page=1",
      },
      {
        name: "Student Educational Tours",
        href: "/packages/[name]",
        as: "/packages/student-educational-tours?page=1",
      },
      {
        name: "Trekking in Bhutan",
        href: "/packages/[name]",
        as: "/packages/trekking-in-bhutan?page=1",
      },
      {
        name: "Bhutan Festival Tours",
        href: "/packages/[name]",
        as: "/packages/bhutan-festival-tours?page=1",
      },
      {
        name: "Women Exclusive Tours",
        href: "/packages/[name]",
        as: "/packages/women-exclusive-tours?page=1",
      },
      {
        name: "Photograph Tours",
        href: "/packages/[name]",
        as: "/packages/photograph-tours?page=1",
      },
      {
        name: "Motorbike and Cycling Tours",
        href: "/packages/[name]",
        as: "/packages/motor-bike-and-cycling-tours?page=1",
      },
      {
        name: "Special Interest Tours",
        href: "/packages/[name]",
        as: "/packages/special-interest-tours?page=1",
      },
    ],
  },
  {
    name: "About Bhutan",
    href: "/bhutan",
    index: 2,
    children: bhtPaths,
  },
  {
    name: "test",
    href: "/",
    index: 3,
  },
  {
    name: "Contact Us",
    href: "/contact",
    index: 4,
  },
];

export default navLinks;

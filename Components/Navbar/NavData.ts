///<----Global Imports--->
import _ from "lodash";

//Graphql
import { getAboutBhtPaths } from "@/api/helperFunc";

const bhtPaths: any[] = [];

bhtPaths.push({
  name: "Overview",
  href: "/bhutan",
  as: "/bhutan",
});

getAboutBhtPaths().then((payload) => {
  //TODO: Add proper error handling
  if (payload.error) {
    throw new Error(JSON.stringify(payload.error));
  }
  payload.data.map((path) => {
    if (path.navURL)
      return bhtPaths.push({
        name: `${_.startCase(path.url)
          .replace("And", "and")
          .replace("In", "in")}`,
        href: "/bhutan/[bhutan]",
        as: `/bhutan/${path.url}`,
      });
    return "";
  });
  return bhtPaths.push({
    name: "Sectors of Bhutan",
    href: "/bhutan/sectors-of-bhutan",
    as: "/bhutan/sectors-of-bhutan",
  });
});

const navLinks = [
  {
    name: "Home",
    href: "/",
    index: 0,
    children: [],
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
    name: "About Us",
    href: "/about",
    index: 3,
    children: [],
  },
  {
    name: "Contact Us",
    href: "/contact",
    index: 4,
    children: [],
  },
];

export default navLinks;

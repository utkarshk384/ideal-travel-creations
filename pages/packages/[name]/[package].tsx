///<----Global Imports--->
import React, { useEffect } from "react";
import { NextSeoProps } from "next-seo";
import { Transition } from "react-transition-group";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import _ from "lodash";

///<----Local Imports--->
import Image from "@/components/ImageWrapper";
import withSEO from "@/components/withSEO";

///Custom Hooks
import useHideNav from "@/src/Hooks/useHideNav";
import useOverlay from "../../../src/Hooks/useOverlay";

//Animation
import animation from "@/animations/pkgAnimation";
import BookingTour from "@/components/Dialog Boxes/TourBooking";

//Styles
import styles from "styles/pages/dync-package.module.scss";

//Graphql
import { apolloQuery } from "@/apolloQuery";
import type {
  FullPkgQuery as IQuery,
  FullPkgQueryVariables as IVars,
  ComponentItineraryItinerary as Iitinerary,
} from "@/src/types/generated/graphql-frontend";
import fullPkgQuery from "@/graphql/fullPkgQuery.graphql";
import withError from "@/components/withError";
import Utilities from "@/src/utils";

const Package: React.FC<{ data?: IQuery }> = ({ data }) => {
  ///<----useStates--->
  const visible = useHideNav();

  ///<----Custom Hooks--->
  const { overlay, setOverlay } = useOverlay();

  ///<----Use Effects--->
  useEffect(() => {
    animation.init();
  }, []);

  return (
    <>
      <Transition
        in={overlay}
        mountOnEnter
        unmountOnExit
        timeout={1000}
        addEndListener={(node, done) =>
          animation.mountAnimation(node, done, overlay)
        }
      >
        <BookingTour setState={setOverlay!} />
      </Transition>

      <div className={styles.pkg}>
        <div className={styles["pkg-container"]}>
          <div className={`${styles["pkg-left"]} ${styles["pkg-item"]}`}>
            <div className={styles["l-title-wrapper"]}>
              <h1>{Utilities.startCase(data!.packages![0]?.title!)}</h1>
            </div>
            <div className={styles["l-img-container"]}>
              <Image
                src={data!.packages![0]?.images![0]?.url as string}
                layout="intrinsic"
                height={data!.packages![0]?.images![0]?.height as number}
                width={data!.packages![0]?.images![0]?.width as number}
              />
            </div>
            <div className={styles["l-desc"]}>
              <ReactMarkdown
                plugins={[[gfm, { tableCellPadding: true }]]}
                source={data?.packages![0]?.description as string}
              />
            </div>
          </div>
          <div
            className={`${styles["pkg-right"]} ${styles["pkg-item"]} ${
              visible ? "visible-nav" : "hidden-nav"
            }`}
          >
            <div className={`${styles["package-insight"]} ${styles["r-item"]}`}>
              <h3>Package Insight</h3>
              <hr />
              <p>{data?.packages![0]?.packageInsight}</p>
            </div>
            <div className={styles["r-item"]}>
              <h3>Arrival</h3>
              <hr />
              <p>{data?.packages![0]?.arrival}</p>
            </div>
            <div className={styles["r-item"]}>
              <h3>Departure</h3>
              <hr />
              <p>{data?.packages![0]?.departure}</p>
            </div>
            <div className={styles["r-item"]}>
              <h3>Duration</h3>
              <hr />
              <p>{data?.packages![0]?.duration}</p>
            </div>
            <div className={styles["r-item"]}>
              <h3>Best time to Travel</h3>
              <hr />
              <p>{data?.packages![0]?.bestTravelTime}</p>
            </div>
            <div className={styles["r-item"]}>
              <h3>Destinations</h3>
              <hr />
              <p>{data?.packages![0]?.destinations}</p>
            </div>

            <div className={styles["r-item"]}>
              <div className={styles["cta-btn"]}>
                <button onClick={() => setOverlay!(!overlay)}>
                  Book This Tour
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles["pkg-bot"]} ${styles["pkg-item"]}`}>
            <div className={styles["b-itineraries"]}>
              <h1>Itinerary</h1>
              {data?.packages![0]?.itineraries?.map((itinerary, i) => (
                <Itinerary
                  key={`adsoasodnasiub12${i * 1346}`}
                  data={itinerary as Iitinerary}
                />
              ))}
            </div>
            <div className={styles["b-highlight"]}>
              <h2>Package Highlight</h2>
              <ReactMarkdown
                plugins={[[gfm, { tableCellPadding: true }]]}
                source={data?.packages![0]?.packageHighlight as string}
              />
              <h2>Note</h2>
              <p>
                We reserve the right to change the itinerary/hotels as may be
                required, in case of unforeseen contingencies or unavailability
                of hotels.
              </p>
              <p>
                Some of the sites to be visited may be closed on government
                holidays or during breaks. In such cases we shall do other
                sightseeing in its place.
              </p>
              <p>
                The itinerary can be tailor made for any duration or with any
                destination & can be combined with any kind of activities such
                as rafting, cycling, etc.
              </p>
              <p>
                It is advisable to book tours in Bhutan at least 6 months prior
                to the travel date because of limited Bhutan tourism
                infrastructures and inventories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Itinerary: React.FC<{ data: Iitinerary }> = ({ data }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      key={data._id}
      className={styles.itinerary}
      onClick={(e) => {
        animation.itineraryDropdown(e);
      }}
    >
      <div className={styles["iti-t-container"]}>
        <div className={styles["iti-heading"]}>
          <h3>{data.name}</h3>
        </div>
        <button className={styles["iti-btn"]} />
      </div>
      <div className={styles["iti-c-container"]}>
        <ReactMarkdown source={data.content as string} />
      </div>
      <div className={styles["iti-d-container"]}>
        {data.altitude && (
          <div
            className={`${styles["iti-d-altitude"]} ${styles["iti-d-item"]}`}
          >
            <i
              className={`${styles["altitude-icon"]} ico ${styles["iti-d-icon"]}`}
            />
            <p>{data.altitude}</p>
          </div>
        )}
        {data.time && (
          <div className={`${styles["iti-d-time"]} ${styles["iti-d-item"]}`}>
            <i
              className={`${styles["time-icon"]} ico ${styles["iti-d-icon"]}`}
            />
            <p>{data.time}</p>
          </div>
        )}
        {data.distance && (
          <div
            className={`${styles["iti-d-distance"]} ${styles["iti-d-item"]}`}
          >
            <DrivingIcon
              className={`${styles["iti-d-icon"]} ${styles["svg"]}`}
            />
            <p>{`${data.distance} km`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const DrivingIcon: React.FC<{ className: string }> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      x="0"
      y="0"
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="#fff"
          d="M86 6.88C42.37 6.88 6.88 42.374 6.88 86c0 43.626 35.49 79.12 79.12 79.12s79.12-35.494 79.12-79.12c0-43.626-35.49-79.12-79.12-79.12zm0 20.64c32.319 0 58.48 26.161 58.48 58.48 0 32.319-26.161 58.48-58.48 58.48-32.319 0-58.48-26.161-58.48-58.48 0-32.319 26.161-58.48 58.48-58.48zm0 30.96c-21.469 0-25.44 15.36-50.525 17.032A51.651 51.651 0 0034.4 86c0 4.771.704 9.37 1.922 13.76H55.04c9.976 0 17.2 7.568 17.2 17.2v18.718c4.39 1.218 8.989 1.922 13.76 1.922 4.771 0 9.37-.704 13.76-1.922V116.96c0-9.288 7.912-17.2 17.2-17.2h18.718c1.218-4.39 1.922-8.989 1.922-13.76 0-3.598-.377-7.11-1.082-10.501C112.923 73.74 107.397 58.48 86 58.48zm0 13.76c7.599 0 13.76 6.161 13.76 13.76S93.599 99.76 86 99.76 72.24 93.599 72.24 86 78.401 72.24 86 72.24z"
        ></path>
      </g>
    </svg>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pkgTitle = ctx.query.package as string; // Get kebabed title from the url query parameter

  const query = await apolloQuery<IQuery, IVars>({
    query: fullPkgQuery,
    variables: { title: pkgTitle },
  });

  if (query.error) return { props: { error: query.error } };
  else if (query.data?.packages!.length === 0) {
    return { notFound: true };
  }

  const seo = query.data!.packages![0]!;

  //TODO: Make SEO available on backend GUI
  const seoConfig: NextSeoProps = {
    title: `${_.startCase(seo.title)} | Ideal Travel Creations`,
    description: seo.description,
    openGraph: {
      images: [
        {
          url: seo.images![0]?.url!,
          height: seo.images![0]!.height!,
          width: seo.images![0]!.width!,
          alt: seo.images![0]!.alternativeText!,
        },
      ],
    },
    twitter: { cardType: "summary" },
  };

  return { props: { seoConfig, data: query.data } };
};
export default withSEO(withError(Package));

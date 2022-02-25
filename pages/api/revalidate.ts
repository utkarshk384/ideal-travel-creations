import { NextApiHandler } from "next/types";

const handler: NextApiHandler = async (req, res) => {
  // Check for secret to confirm this is a valid request
  const token = req.headers["revalidate-token"];
  if (token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    /* Change to this when unstable_revalidate supports dynamic url revalidation*/
    // await res.unstable_revalidate("/testimonials/[testimonials]");

    await res.unstable_revalidate(`/testimonials/${req.body.pageNo}`);
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    /* Change to this when unstable_revalidate supports dynamic url revalidation*/
    // console.error(err);

    console.error(`Error revalidating page ${req.body.pageNo}: ${err}`);
    return res.status(500).send("Error revalidating");
  }
};

export default handler;

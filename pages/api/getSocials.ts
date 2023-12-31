// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
const query = groq`*[_type=="Social"]`;
import { Social } from "@/typings";

type Data = {
  socials: Social[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const socials:Social[]=await sanityClient.fetch(query);

  res.status(200).json({ socials });
}

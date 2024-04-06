import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe", email: "john.doe@example.com" });
}

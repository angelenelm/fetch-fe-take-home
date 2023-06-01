import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = req.body;

  try {
    const response = await fetch(
      'https://frontend-take-home-service.fetch.com/auth/login',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }
    );

    res.redirect('/dogs');
  } catch (error) {
    res.redirect('/error=true');
  }
}

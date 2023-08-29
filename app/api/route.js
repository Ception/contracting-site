import { NextResponse } from "next/server";

const { Client } = require("@googlemaps/google-maps-services-js");

export async function GET(request) {
  const client = new Client({});

  client
    .placeDetails({
      params: {
        place_id: process.env.PLACE_ID,
        fields: ["review"],
        key: process.env.API_KEY,
      },
      timeout: 1000,
    })
    .then((r) => {
      if (r.data.status === "OK") {
        const googleReviews = r.data.result.reviews || [];
        const reviews = googleReviews.map((review) => ({
          id: review.author_url,
          customer_name: review.author_name,
          review: review.text,
          rating: review.rating,
        }));
        NextResponse.json({ reviews });
      } else {
        NextResponse.status(400).json({ error: r.data.status });
      }
    })
    .catch((e) => {
      console.error(e.response.data.error_message);
      NextResponse.status(500).json({ error: "Failed to fetch reviews" });
    });
}
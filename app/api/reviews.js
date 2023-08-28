const { Client } = require("@googlemaps/google-maps-services-js");

export default async function handler(req, res) {
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
        res.json({ reviews });
      } else {
        res.status(400).json({ error: r.data.status });
      }
    })
    .catch((e) => {
      console.error(e.response.data.error_message);
      res.status(500).json({ error: "Failed to fetch reviews" });
    });
}
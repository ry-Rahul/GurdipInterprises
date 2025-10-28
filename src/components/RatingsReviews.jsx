import { Star } from "lucide-react"; // Star icon for ratings

export default function RatingsReviews() {
  // Sample reviews data
  const reviews = [
    {
      name: "Sundar.G",
      location: "Chennai, Tamil Nadu",
      date: "22-July-25",
      rating: 5,
      product: "Brake Rectifier",
      review: "Good support for our requirements. Keep it up 👍",
      tags: ["Response", "Quality", "Delivery"],
    },
    {
      name: "Aman Ali",
      location: "Bansbaria, West Bengal",
      date: "30-July-25",
      rating: 5,
      product: "Programming Cable",
      review: "",
      tags: [],
    },
    {
      name: "VAJIRMAHAMAD",
      location: "Bhavnagar, Gujarat",
      date: "18-August-25",
      rating: 5,
      product: "HMI Touch Panel",
      review: "Price can not share",
      tags: [],
    },
  ];

  return (
    // Main section background and padding
    <section className="bg-[#3d2f2a] py-12">
      {/* Center container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-8 border-b-4 border-[#f5c842] inline-block pb-2">
          Ratings & Reviews
        </h2>

        {/* Rating Summary + User Satisfaction */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Rating Summary Card */}
          <div className="bg-[#2a1f1c] p-8 rounded">
            {/* Overall Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl font-bold text-white">4.5</div>
              <div className="text-4xl text-[#f5c842]">/5</div>

              {/* Static stars */}
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 fill-[#f5c842] text-[#f5c842]"
                  />
                ))}
              </div>
            </div>

            {/* Total users */}
            <p className="text-gray-400">Reviewed by 30 Users</p>

            {/* Rating Breakdown bars */}
            <div className="mt-6 space-y-2">
              {[
                { stars: 5, percentage: 63 },
                { stars: 4, percentage: 10 },
                { stars: 3, percentage: 7 },
                { stars: 2, percentage: 7 },
                { stars: 1, percentage: 13 },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-white w-8">{item.stars}★</span>
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-white w-12 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* User Satisfaction Card */}
          <div className="bg-[#2a1f1c] p-8 rounded">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-green-500">👍</span> User Satisfaction
            </h3>

            {/* Satisfaction progress bars */}
            <div className="space-y-4">
              {[
                { label: "Response", percentage: 71 },
                { label: "Quality", percentage: 100 },
                { label: "Delivery", percentage: 100 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-white font-bold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Relevant Reviews */}
        <h3 className="text-2xl font-bold text-white mb-6">
          Most Relevant Reviews
        </h3>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#2a1f1c] p-6 rounded border-r-2 border-gray-700"
            >
              {/* Reviewer Info */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full" />
                  <div>
                    {/* Star Rating */}
                    <div className="flex text-[#f5c842] mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating ? "fill-[#f5c842]" : ""
                          }`}
                        />
                      ))}
                    </div>
                    {/* Name & Location */}
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-sm">{review.location}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>

              {/* Product name */}
              <p className="text-white text-sm mb-2">
                <span className="font-semibold">Product Name :</span>{" "}
                {review.product}
              </p>

              {/* Review text */}
              {review.review && (
                <p className="text-gray-300 text-sm mb-3">{review.review}</p>
              )}

              {/* Tags (if any) */}
              {review.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-green-500 text-sm flex items-center gap-1"
                    >
                      👍 {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-semibold px-8 py-3 rounded transition-colors">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

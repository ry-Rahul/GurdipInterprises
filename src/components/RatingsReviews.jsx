import { Avatar, Button, Card, Col, Progress, Rate, Row, Tag } from "antd";

import { StarFilled } from "@ant-design/icons";

export default function RatingsReviews() {
  // ✅ Sample reviews data
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

  // ✅ Rating Breakdown
  const breakdown = [
    { stars: 5, percent: 63 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 7 },
    { stars: 2, percent: 7 },
    { stars: 1, percent: 13 },
  ];

  // ✅ Satisfaction Categories
  const satisfaction = [
    { label: "Response", percent: 71 },
    { label: "Quality", percent: 100 },
    { label: "Delivery", percent: 100 },
  ];

  // ✅ Helper: Get avatar initials
  const getInitial = (name) => name.charAt(0).toUpperCase();

  return (
    <section className="bg-[#3d2f2a] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ---------- Header ---------- */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b-4 border-[#f5c842] inline-block pb-2">
          Ratings & Reviews
        </h2>

        {/* ---------- Summary Cards ---------- */}
        <Row gutter={[16, 16]} className="mb-10">
          {/* Left: Rating Summary */}
          <Col xs={24} md={12}>
            <Card
              className="bg-[#2a1f1c] border-none rounded-lg"
              bodyStyle={{ padding: "24px" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl font-bold text-white">4.5</div>
                <div className="text-[#f5c842] text-4xl">/5</div>
                <Rate disabled defaultValue={5} style={{ color: "#f5c842" }} />
              </div>
              <p className="text-gray-400 mb-6">Reviewed by 30 Users</p>

              {breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-3 mb-2">
                  <span className="text-white w-8">{b.stars}★</span>
                  <Progress
                    percent={b.percent}
                    showInfo={false}
                    strokeColor="#4ade80"
                    trailColor="#555"
                    className="flex-1"
                  />
                  <span className="text-white w-10 text-right">
                    {b.percent}%
                  </span>
                </div>
              ))}
            </Card>
          </Col>

          {/* Right: Satisfaction */}
          <Col xs={24} md={12}>
            <Card
              className="bg-[#2a1f1c] border-none rounded-lg"
              bodyStyle={{ padding: "24px" }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-green-500 text-2xl">👍</span> User
                Satisfaction
              </h3>

              {satisfaction.map((s) => (
                <div key={s.label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{s.label}</span>
                    <span className="text-white font-semibold">
                      {s.percent}%
                    </span>
                  </div>
                  <Progress
                    percent={s.percent}
                    showInfo={false}
                    strokeColor="#22c55e"
                    trailColor="#555"
                  />
                </div>
              ))}
            </Card>
          </Col>
        </Row>

        {/* ---------- Reviews List ---------- */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Most Relevant Reviews
        </h3>

        <Row gutter={[16, 16]}>
          {reviews.map((review, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                className="bg-[#2a1f1c] border border-gray-700 rounded-md"
                bodyStyle={{ padding: "20px" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {/* ✅ Avatar with Initial */}
                    <Avatar
                      style={{
                        backgroundColor: "#f5c842",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      size={48}
                    >
                      {getInitial(review.name)}
                    </Avatar>
                    <div>
                      <Rate
                        disabled
                        defaultValue={review.rating}
                        style={{ color: "#f5c842", fontSize: "14px" }}
                      />
                      <p className="text-white font-semibold">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                </div>

                <p className="text-white text-sm mb-2">
                  <span className="font-semibold">Product Name:</span>{" "}
                  {review.product}
                </p>

                {review.review && (
                  <p className="text-gray-300 text-sm mb-3">{review.review}</p>
                )}

                {review.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {review.tags.map((tag) => (
                      <Tag
                        key={tag}
                        color="green"
                        className="text-xs font-medium px-2 py-1"
                      >
                        👍 {tag}
                      </Tag>
                    ))}
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        {/* ---------- View More Button ---------- */}
        <div className="text-center mt-10">
          <Button
            type="primary"
            size="large"
            disabled
            classNames="cursor-not-allowed"
            style={{
              backgroundColor: "#f5c842",
              color: "#000",
              fontWeight: 600,
              border: "none",
            }}
            className="hover:bg-[#e5b832]"
          >
            View More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button, Card, Col, Form, Input, Row, Typography, message } from "antd";
import {
  EnvironmentOutlined,
  MessageOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import QuickContactModal from "../components/modal/QuickContactModal";
import emailjs from "@emailjs/browser";

const { Title, Text } = Typography;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false); // ✅ map toggle state
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal toggle state

  const handleSubmit = async (values) => {
    const { name, mobile, requirement } = values;

    if (!mobile || !name || !requirement) {
      message.warning("⚠️ Please fill all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      emailjs.init("JUowiqP2W8P156o5Z");

      await emailjs.send("service_0ypd3or", "template_1zf326r", {
        to_name: "DS Aqua Engineering",
        from_name: name,
        from_number: mobile,
        message: `📩 New Contact Inquiry:\n👤 ${name}\n📱 ${mobile}\n📝 ${requirement}`,
      });

      message.success("✅ Your inquiry has been sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error("EmailJS Error:", error);
      message.error("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#3d2f2a] text-gray-900">
      <Header />
      <Navigation />

      <div className="bg-[#2a1f1c] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Text className="text-[#f5c842] text-sm sm:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            » Contact Us
          </Text>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <Card
          className="bg-white rounded-lg shadow-md"
          bodyStyle={{ padding: "2rem" }}
        >
          <Row gutter={[32, 32]}>
            {/* ✅ Left: Contact Info */}
            <Col xs={24} md={12}>
              <Title level={3} className="text-[#EA4E02]">
                Contact Details
              </Title>

              <div className="space-y-5">
                {/* Contact Person */}
                <Card
                  size="small"
                  bordered={false}
                  className="bg-gray-50"
                  bodyStyle={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <UserOutlined className="text-xl text-[#EA4E02]" />
                  <div>
                    <Text type="secondary">Contact Person:</Text>
                    <br />
                    <Text strong>Gurdip Yadav (CEO)</Text>
                  </div>
                </Card>

                {/* Address */}
                <Card
                  size="small"
                  bordered={false}
                  className="bg-gray-50"
                  bodyStyle={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <EnvironmentOutlined className="text-xl text-[#EA4E02]" />
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Text type="secondary">Address:</Text>
                      <Button
                        type="link"
                        size="small"
                        onClick={() => setShowMap(!showMap)}
                        style={{ padding: 0 }}
                      >
                        {showMap ? "Hide Map" : "Get Direction"}
                      </Button>
                    </div>
                    <Text strong>DS Aqua Engineering</Text>
                    <br />
                    <Text>
                      Amod Residency, Shop Number 2, Near Arya Farm House,
                      Pandit Colony, Sector 73, Noida, Gautam Budh Nagar, Uttar
                      Pradesh - 201301, India
                    </Text>

                    {/* ✅ Small Embedded Map */}
                    {showMap && (
                      <div
                        style={{
                          borderRadius: "8px",
                          overflow: "hidden",
                          marginTop: "12px",
                          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.142318266469!2d77.38919407618348!3d28.584265074853153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f5430d77a7%3A0xf479e3dbe0308c89!2sAmod%20Residency!5e0!3m2!1sen!2sin!4v1699423761024!5m2!1sen!2sin"
                          width="100%"
                          height="220"
                          allowFullScreen=""
                          loading="lazy"
                          style={{
                            border: 0,
                            filter: "grayscale(15%) contrast(1.05)",
                          }}
                        ></iframe>
                      </div>
                    )}
                  </div>
                </Card>

                {/* Phone */}
                <Card
                  size="small"
                  bordered={false}
                  className="bg-gray-50"
                  bodyStyle={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <PhoneOutlined className="text-xl text-[#EA4E02]" />
                  <div>
                    <Text type="secondary">Call Us:</Text>
                    <br />
                    <Text strong className="text-[#1B9A83]">
                      +91 98115 47246
                    </Text>
                    <br />
                    <Button
                      size="small"
                      onClick={() => setIsModalOpen(true)}
                      icon={<MessageOutlined />}
                      style={{
                        marginTop: "6px",
                        backgroundColor: "#f5c842",
                        border: "none",
                        color: "#000",
                        fontWeight: "500",
                      }}
                    >
                      Send SMS
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>

            {/* ✅ Right: Contact Form */}
            <Col xs={24} md={12}>
              <Title level={3} className="text-[#EA4E02]">
                Contact Us
              </Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
              >
                {/* Requirement */}
                <Form.Item
                  name="requirement"
                  label="Requirement Details"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your requirement",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={6}
                    placeholder="Describe your requirement in detail..."
                  />
                </Form.Item>

                {/* Mobile */}
                <Form.Item
                  name="mobile"
                  label="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number",
                    },
                  ]}
                >
                  <Input
                    prefix="+91 "
                    placeholder="Enter your number"
                    type="tel"
                    maxLength={10}
                  />
                </Form.Item>

                {/* Name */}
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                {/* Submit */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loading}
                    style={{
                      backgroundColor: "#1B9A83",
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    {loading ? "Sending..." : "Contact Now"}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>

      <Footer />
      <QuickContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: "Contact Us",
          price: "",
          details: { description: "General contact request from header." },
        }}
      />
    </main>
  );
}

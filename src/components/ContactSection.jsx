import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Mail, MessageSquare, Phone } from "lucide-react";

import { Link } from "react-router-dom";
import QuickContactModal from "../components/modal/QuickContactModal";
import address from "../constants/address";
import { useState } from "react";

const { Title, Text } = Typography;

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactType, setSelectedContactType] =
    useState("General Inquiry");

  const openContactModal = (type) => {
    setSelectedContactType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* ✅ Contact Section */}
      <section className="bg-[#3d2f2a] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card
            bordered={false}
            className="bg-[#2a1f1c] border-t-4 border-[#e85d2a] rounded-md shadow-lg"
            bodyStyle={{ padding: "2rem" }}
          >
            {/* Title */}
            <Link
              to="/contact"
              className="text-lg sm:text-2xl font-bold text-white bg-[#e85d2a] inline-block px-6 py-2 rounded mb-6 hover:bg-[#d14e21] transition"
            >
              Contact Us
            </Link>

            {/* ✅ Layout */}
            <Row gutter={[32, 32]}>
              {/* Left — Company Info */}
              <Col xs={24} md={12}>
                <Space
                  direction="vertical"
                  size="middle"
                  className="text-white"
                >
                  <div>
                    <Title level={4} className="!text-white mb-0">
                      {address.company_name}
                    </Title>
                    <Text className="!text-gray-300">Gurdip Yadav (CEO)</Text>
                  </div>

                  {/* Address */}
                  <Space direction="vertical" size={2}>
                    <Text className="!text-gray-300 flex items-start gap-2 leading-relaxed">
                      <EnvironmentOutlined
                        style={{ color: "#f5c842", marginTop: 3 }}
                      />
                      {`${address.address.building}, ${address.address.landmark}, ${address.address.area}, ${address.address.city}, ${address.address.state} - ${address.address.pincode}`}
                    </Text>
                  </Space>

                  {/* ✅ Call Buttons */}
                  <Space direction="vertical" size="middle" className="w-full">
                    <Button
                      type="primary"
                      icon={<PhoneOutlined />}
                      size="large"
                      style={{
                        background: "#f5c842",
                        color: "#000",
                        fontWeight: 600,
                        border: "none",
                      }}
                      onClick={() => openContactModal("Call Request")}
                    >
                      Call Us: {address.contact.primary}
                    </Button>
                  </Space>
                </Space>
              </Col>

              {/* Right — Email & Map */}
              <Col xs={24} md={12}>
                <Space direction="vertical" size="middle" className="w-full">
                  <Button
                    block
                    icon={<Mail className="w-4 h-4" />}
                    size="large"
                    style={{
                      background: "#4b5563",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => openContactModal("Email Inquiry")}
                  >
                    Contact via E-mail
                  </Button>

                  <Button
                    block
                    icon={<MessageSquare className="w-4 h-4" />}
                    size="large"
                    style={{
                      background: "#4b5563",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => openContactModal("SMS Inquiry")}
                  >
                    Contact via SMS
                  </Button>

                  {/* ✅ Embedded Google Map */}
                  <Card
                    className="overflow-hidden border-none"
                    bodyStyle={{ padding: 0 }}
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.142318266469!2d77.38919407618348!3d28.584265074853153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f5430d77a7%3A0xf479e3dbe0308c89!2sAmod%20Residency!5e0!3m2!1sen!2sin!4v1699423761024!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      allowFullScreen=""
                      loading="lazy"
                      style={{
                        border: 0,
                        borderRadius: "10px",
                        filter: "grayscale(20%) contrast(1.1)",
                      }}
                    ></iframe>
                  </Card>
                </Space>
              </Col>
            </Row>

            {/* ✅ Divider + Social Links */}
            <Divider className="!border-gray-700 !my-8" />
            <Row justify="space-between" align="middle">
              <Col
                xs={24}
                sm={6}
                className="text-center sm:text-left mb-4 sm:mb-0"
              >
                <Text className="!text-white font-medium">Share Us :</Text>
              </Col>
              <Col xs={24} sm={18}>
                <Space
                  size="middle"
                  className="justify-center sm:justify-end w-full"
                >
                  <a
                    href="#"
                    className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center text-white text-sm font-bold hover:opacity-80 transition"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-[#1da1f2] rounded flex items-center justify-center text-white text-sm font-bold hover:opacity-80 transition"
                  >
                    t
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center text-white text-sm font-bold hover:opacity-80 transition"
                  >
                    in
                  </a>
                </Space>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      {/* ✅ Quick Contact Modal */}
      <QuickContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: selectedContactType,
          price: "",
          details: { description: "General website contact request." },
        }}
      />
    </>
  );
}

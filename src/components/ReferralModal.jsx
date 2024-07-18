import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import axios from "axios";

const ReferralModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    courseName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseName,
    } = formData;
    if (
      !referrerName ||
      !referrerEmail ||
      !refereeName ||
      !refereeEmail ||
      !courseName
    ) {
      setError("Please fill in all mandatory fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://accredian-backend-task-9ts1.onrender.com/api/referals",
          formData,
          {
            withCredentials: true,
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }

      setIsModalOpen(false);
      //   message.success("Form submitted successfully!");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="px-6 py-1 bg-blue-500 text-white rounded-2xl h-10"
      >
        Refer Now
      </Button>
      <Modal
        title="Referral Form"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Referrer's Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Referrer's Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Referee's Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Referee's Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Course Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Additional Message
            </label>
            <Input.TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full h-24"
            />
          </div>
        </form>
        {error ? <div className="p-2 text-red-500">{error}</div> : <></>}
      </Modal>
    </>
  );
};

export default ReferralModal;

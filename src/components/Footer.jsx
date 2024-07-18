import React from "react";

const Footer = () => {
  return (
    <section className="w-full md:h-[40vh] bg-[#282828]">
      <div className=" h-[40vh] flex flex-col md:flex-row justify-around items-center text-white">
        <div className="flex flex-col ">
          <img src="/logo_white.png" alt="" className="w-52" />
        </div>
        <div>
          <h3 className="font-bold pb-10">Contact Us</h3>
          <h3>Email : admissions@accredian.com</h3>
          <h3>Enrolled Student Helpline: +91 7969322507</h3>
          <h3>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, Haryana 122015
          </h3>
          <h3>Follow Us </h3>
        </div>
        <div>
          <h3 className="font-bold pb-10">Programs</h3>
          <h3>Data Science & AI</h3>
          <h3>Product Management</h3>

          <h3>Business Analytics </h3>
        </div>
      </div>
      <div className="bg-[#282828] flex justify-between text-white p-10">
        <h3>© 2022 Biccas Inc. Copyright and rights reserved</h3>
        <h3>Terms and conditions • Privacy policy</h3>
      </div>
    </section>
  );
};

export default Footer;

"use client";

export function ContactMap() {
  return (
    <div className="bg-[#f6f9f9] py-8 px-4" id="contact">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-[#4a4a4a] mb-8 text-center">
          Our Location
        </h2>
        <div className="flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.954893331716!2d-112.84060102309691!3d49.69282224162407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e86fe6fdf8e9b%3A0x18a6b34669066e9e!2sSIX08%20Health!5e0!3m2!1sen!2sca!4v1734724482603!5m2!1sen!2sca" width="70%" height="450" style={{border:0}}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;

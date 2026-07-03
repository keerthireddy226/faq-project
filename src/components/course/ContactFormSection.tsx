import TrainingEnquiryForm from "./TrainingEnquiryForm";

export default function ContactFormSection({
  backgroundImage = "/Contact Form Banner.webp",
}: {
  backgroundImage?: string;
}) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="container relative z-10 flex justify-end">
        <TrainingEnquiryForm className="mt-10 mb-10" />
      </div>
    </section>
  );
}

export default function TrainingCatalogCTA() {
  return (
    <div
      className=" flex flex-col items-start justify-end rounded-[10px] bg-cover bg-center px-5 pb-6 pt-[220px]"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/68eccc1d6cc5db60ed84cf78_Frame%2010000036761%20(1).webp')",
      }}
    >
      <h3 className="text-2xl font-bold leading-tight text-white">
        Explore High-impact instructor-led training for your teams.
      </h3>

      <a
        href="/corporate-training-catalog"
        className="mt-5 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#1557ff]"
      >
        View Training Catalog
      </a>
    </div>
  );
}

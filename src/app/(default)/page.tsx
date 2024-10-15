export default function Page() {
  return (
    <>
      {[...Array(100)].map((i) => (
        <div key={i} className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            facilis molestiae quis quo saepe, sed. Aliquam commodi doloribus ea
            eaque, esse facere in ipsum iure libero perferendis quam rerum
            temporibus?
          </div>
        </div>
      ))}
    </>
  );
}

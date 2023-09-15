export default function Banner() {
  return (
    <>
      <section style={{ backgroundImage: "url(/background-pixles.svg)" }}>
        <ul className="flex items-center justify-center gap-[40vw]">
          <li>
            <div
              style={{ fontWeight: "600", fontSize: "40px" }}
              className=" absolute ml-40"
            >
              <h1 className="text-white">
                بوابتك <br />
                لرقمنة صناعتك
              </h1>
              <a href="/dashboard">
                <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-16 py-2 rounded-sm hover:bg-slate-700">
                  ابدأ الان
                </button>
              </a>
            </div>
          </li>
          <li>
            <img
              src="/banner-img.png"
              alt=""
              className="rounded-t-lg w-[650px] md:disabled"
            />
          </li>
        </ul>
      </section>
    </>
  );
}

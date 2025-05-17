function Search() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 max-w-md mx-auto">
      {/* ช่องค้นหา */}
      <input
        type="search"
        placeholder="ค้นหา"
        className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="searchInput"
      />

      {/* ตัวเลือกประเภท */}
      <select
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="categorySelect"
      >
        <option value="">ประเภท</option>
        <option value="อาสา">อาสา</option>
        <option value="ช่วยงาน">ช่วยงาน</option>
        <option value="อบรม">อบรม</option>
      </select>
    </section>
  );
}

export default Search;

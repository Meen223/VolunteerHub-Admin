//การ์ดประวัติ


function Story({ headers }) {
  return (
    <div
      className={`bg-pink-300 text-black font-medium text-center py-2 grid`}
      style={{
        gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
      }}
    >
      {headers.map((header, index) => (
        <div key={index}>{header}</div>
      ))}
    </div>
  );
}
export default Story;

export default function BackgroundCards({ id }) {
  return (
    <div className={`cards-container-${id} absolute w-full h-[82%] grid grid-cols-4 z-10 top-0 overflow-hidden`}>
      <div className="bg-card first">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-card second">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-card third">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-card forth">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

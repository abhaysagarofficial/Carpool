// import Image from "next/image"; // Removed unused import

export default function Navbar() {
  return (
    <div>
      <div
        id="navbar"
        className="flex justify-between h-20 bg-gray-800 text-white"
      >
        <div className="flex items-center">
          <div className="mx-10 text-2xl font-bold">Carpool</div>
          <div className="mx-10">
            <a href="/search_rides">Search Ride</a>
          </div>
          <div className="mx-10">
            <a href="/publish_ride">Publish Ride</a>
          </div>
          <div className="mx-10">
            <a href="/my_rides">Your Ride</a>
          </div>
        </div>

        <div className="flex items-center m-10">
          <input
            type="text"
            className="boder border-white p-2 bg-gray-800 text-white m-10"
            placeholder="Type"
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

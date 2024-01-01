import Image from "next/image"
import BgImg from '../../../../public/bgimg.jpg'

const teams = [
  {
    name: 'Mumbai Indian'
  },
  {
    name: "Delhi Capitals",
  },
  {
    name: "Kolkata Knight Riders",
  },
  {
    name: "Rajasthan Royals",
  },
  {
    name: "Sydney Sixers"
  },
  {
    name: "Chennai Super Kings"
  },
  {
    name: "Royal Challengers Bangalore"
  },
  {
    name: "Pune Warriors"
  },
  {
    name: "Sunrisers Hyderabad "
  },
  {
    name: "Kings XI Punjab"
  }
]

const Teams = () => {



  return (
    <section className="">
      <div>
        <div className="flex h-52">
          <Image src={BgImg} alt="Background Image" />
        </div>
        <div className="max-w-7xl my-14 mx-auto">
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full xl:mx-0 mx-4 text-sm text-left ">
                <thead className="text-xs text-white uppercase bg-[#0268BB] ">
                  <tr>
                    <th scope="col" className="px-6 font-medium text-xl py-3">
                      Sr No
                    </th>
                    <th scope="col" className="px-6 font-medium text-xl py-3">
                      Tournaments
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {
                    teams.map((team, index) => {
                      return <tr key={index} className="bg-white border-b text-[#0268BB] hover:bg-gray-50 ">
                        <th scope="row" className="px-6 py-4 font-medium text-xl  whitespace-nowrap ">
                          {(index + 1)}
                        </th>
                        <td className="px-6 py-4 flex  font-medium text-xl">
                          {team.name}
                        </td>
                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams
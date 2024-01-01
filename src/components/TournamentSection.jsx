import TournamentCard from "./TournamentCard"

const tournaments = [
  {
    tournamentName: 'Maharashtra Premier League'
  },
  {
    tournamentName: 'Gujarat Premier League'
  },
  {
    tournamentName: 'Mumbai Premier League'
  }

]

const TournamentSection = () => {
  return (
    <section className="lg:max-w-7xl lg:mx-auto my-20">
      <div className="flex justify-center flex-col">
        <div>
          <h1 className="text-[#022A60] font-semibold text-4xl uppercase text-center">Tournaments</h1>
        </div>
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-1 gap-10 justify-between md:grid-cols-2 lg:grid-cols-3">
            {
              tournaments.map((tournament, index) => (
                <TournamentCard key={index} name={tournament.tournamentName} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default TournamentSection
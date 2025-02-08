import { GetServerSideProps } from 'next';

interface Team {
  id: number;
  name: string;
  role: string;
  bio: string;
  profile_picture: string;
}

interface TeamsPageProps {
  teams: Team[];
}

const TeamsPage = ({ teams }: TeamsPageProps) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Amazing Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="group relative border p-4 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Profile Picture */}
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-4 border-4 border-blue-500 shadow-xl group-hover:shadow-2xl transition-shadow">
              <img
                src={team.profile_picture}
                alt={team.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Team Information */}
            <h2 className="text-xl font-semibold text-center">{team.name}</h2>
            <p className="text-lg font-medium text-center text-gray-600">{team.role}</p>
            <p className="mt-4 text-gray-700 text-center group-hover:text-gray-900 transition-colors">{team.bio}</p>

            {/* Hovered Content */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity rounded-lg">
              <p className="text-lg font-bold">{team.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://cms-headless-production.up.railway.app/api/teams');
  const data = await res.json();

  return {
    props: {
      teams: data.data,
    },
  };
};

export default TeamsPage;

import Cards from "../components/Cards";

export default function Team({ teamData }) {
  return (
    <>
      <h2>{teamData[0].domain} Team</h2>
      <Cards data={teamData} />
    </>
  );
}

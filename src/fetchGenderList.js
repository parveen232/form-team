export default function fetchGenderList(data) {
  const genders = [];
  for (let user of data) {
    if (!genders.includes(user.gender)) {
      genders.push(user.gender);
    }
  }
  return genders;
}

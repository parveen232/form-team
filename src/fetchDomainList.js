export default function fetchDomainList(data) {
  const domains = [];
  for (let user of data) {
    if (!domains.includes(user.domain)) {
      domains.push(user.domain);
    }
  }
  return domains;
}

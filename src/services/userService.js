export const getNonStaffUsers = () => {
  return fetch("http://localhost:8088/users?isStaff=false").then((res) =>
    res.json()
  );
};

export const getStaff = () => {
  return fetch("http://localhost:8088/users?isStaff=true").then((res) =>
    res.json()
  );
};

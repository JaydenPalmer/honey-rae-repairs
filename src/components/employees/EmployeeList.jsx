import { useEffect, useState } from "react";
import { getStaff } from "../../services/userService";
import { User } from "../../users/User";

export const EmployeeList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getStaff().then((staffArray) => {
      setStaff(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {staff.map((staffObj) => {
        return <User user={staffObj} key={staffObj.id} />;
      })}
    </div>
  );
};

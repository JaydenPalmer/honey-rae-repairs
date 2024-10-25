import { useEffect, useState } from "react";
import { getStaff } from "../../services/userService";
import { User } from "../../users/User";
import "./Employee.css";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/employees/${staffObj.id}`} key={staffObj.id}>
            <User user={staffObj} />
          </Link>
        );
      })}
    </div>
  );
};

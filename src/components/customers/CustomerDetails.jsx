import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";
import "./Customer.css";

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  // /customers/3
  // path="/customer/:customerId"
  const { customerId } = useParams(); // { customerId: 3 }

  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [customerId]);

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email : </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Adress : </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info">Phone Number : </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};

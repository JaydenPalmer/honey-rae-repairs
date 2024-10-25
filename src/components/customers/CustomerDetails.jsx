import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  // /customers/3
  // path="/customer/:customerId"
  const { customerId } = useParams(); // { customerId: 3 }

  useEffect(() => {
    getCustomerByUserId(customerId).then((customerObj) => {
      setCustomer(customerObj);
    });
  }, [customerId]);

  return <div>Customer #{customerId}</div>;
};

import { useEffect, useState } from "react";

function ApiExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((val) => val.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
        </tr>
        {data.map((val, index) => {
          return (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ApiExample;

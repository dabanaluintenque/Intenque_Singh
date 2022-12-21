
let xh = new XMLHttpRequest();
xh.addEventListener('load', Info);
xh.addEventListener('error', Nofound);
xh.open('Get', "/dataOutput", true);
xh.send();

function Info() {
  let allData = JSON.parse(xh.response);

  let rows = allData.map((row) => (
    <tr key={JSON.stringify(row)}>
      <td>{row.ProductId}</td>
      <td>{row.CompanyName}</td>
      <td>{row.ProductName}</td>
      <td>{row.CompanyId}</td>
      <td>{row.Quantity}</td>
    </tr>
  )); 
 
  let dataValues = (
    <div>
      <h2>All Products </h2>
      <table id="newTable">
        <thead>
          <tr>
            <th>ProductId</th>
            <th>Company Name</th>
            <th>Product Name</th>
            <th>Company Id</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

    </div> 
  );
  ReactDOM.render(dataValues, document.getElementById("data"));

  const dataTable = new simpleDatatables.DataTable("#newTable");
}

function Nofound() {
  console.log(xh.readyState);
  console.log(xh.status);
}




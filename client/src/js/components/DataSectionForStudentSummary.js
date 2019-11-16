import React from "react";
import DataBox from "./DataBox";
import Delinquents from "./Delinquents";

function handleClickDataToCSV(data, name) {
  //transfer student data into CSV file
  if (data.length) {
    const separator = ",";
    const keys = Object.keys(data[0]);
    const studentName = name;
    const csvContent =
      keys.join(separator) +
      "\n" +
      data
        .map(row => {
          return keys
            .map(k => {
              let cell = row[k];
              cell = cell.toString().replace(/"/g, '""');
              if (cell.search(/("|,|\n)/g) >= 0) {
                cell = `"${cell}"`;
              }
              return cell;
            })
            .join(separator);
        })
        .join("\n");

    //create a hidden variable which become a download function
    const hiddenElement = document.createElement("a");
    hiddenElement.href =
      "data:text/csvContent;charset=utf-8," + encodeURI(csvContent);
    hiddenElement.target = "_blank";
    hiddenElement.download = studentName + ".csv";
    hiddenElement.click();

  } else {
    alert("no data");
  }
}

function DataSectionForStudentSummary(props) {
  let delinquents;
  let boxes;

  if (props.delinquents) {
    delinquents = (
      <Delinquents
        title={props.delinquentTitle ? props.delinquentTitle : "delinquents"}
        students={props.delinquents}
      />
    );
  }

  if (props.data) {
    if (props.data.length != 0) {
      boxes = props.data.map(data => <DataBox key={data.footer} data={data} />);
  } else {
    boxes = <p>No data available</p>;
  }
} else {
  boxes = <p>No data available</p>;
}

return (
  <section className="data-section data-section-flex">
    <h2 className="section-label inline-block">
      {props.title}{' '}
      {!!props.dataToDownload &&
        <span className="glyphicon glyphicon-download-alt"
          onClick={() => handleClickDataToCSV(props.dataToDownload, props.name)}>
        </span>}
    </h2>
    <div className="data-container">{boxes}</div>
    {delinquents}
  </section>
);
}

export default DataSectionForStudentSummary;
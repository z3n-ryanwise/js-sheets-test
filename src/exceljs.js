import exceljs from "exceljs";

export const excelJSCreateSheet = async (filepath, data) => {
  console.log("in create");

  const workbook = new exceljs.Workbook();
  workbook.creator = "Autoportal SODA";

  data.forEach((sheet) => {
    const worksheet = workbook.addWorksheet(sheet.sheetName);
    // Freeze the first row and column
    worksheet.views = [{ state: "frozen", xSplit: 1, ySplit: 1 }];
    worksheet.addRow(sheet.headers)
    worksheet.getRow(1).font = {bold: true}
    worksheet.getColumn(2).width = 40
    worksheet.addRows(sheet.data)
    // const sheet = workbook.addWorksheet('My Sheet', {views:[{state: 'frozen', xSplit: 1, ySplit:1}]});
  });

  await workbook.xlsx.writeFile(filepath);
};

export const excelJSReadSheet = (filepath) => {
  console.log("In read");
};

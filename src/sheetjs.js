import XLSX from "xlsx";

export const sheetsJSCreateSheet = (filepath, data) => {
  console.log("in create");

  //transform data
  //required input format:
  // [
  //   {header: 'value', header2: 'value'},
  //   {header: 'value', header2: 'value'},
  // ]
  const output = data.map((sheet) => {
    const sheetData = sheet.data.map((row) => {
      let newRow = {};
      row.forEach((cell, index) => {
        // if (!cell) { cell = 'n/a' }
        newRow[sheet.headers[index]] = cell;
      });
      return newRow;
    });

    return { sheetName: sheet.sheetName, sheetData: sheetData };
  });

  // output spreadsheet
  const workbook = XLSX.utils.book_new();
  output.forEach((sheet) => {
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(sheet.sheetData),
      sheet.sheetName
    );
  });

  XLSX.writeFileXLSX(workbook, filepath, { compression: true });
};

export const sheetsJSReadSheet = (filepath) => {
  console.log('In read')

  const workbook = XLSX.readFile(filepath, {})
  console.log('Sheetnames:', workbook.SheetNames)
  // Output:
  // Sheetnames: [ 'page1', 'page2' ]
  console.log(workbook.Sheets['page1'])
  // Output:
  // {
  //   '!ref': 'A1:C4',
  //   A1: { t: 's', v: 'header1', h: 'header1', w: 'header1' },
  //   B1: { t: 's', v: 'header2', h: 'header2', w: 'header2' },
  //   C1: { t: 's', v: 'header3', h: 'header3', w: 'header3' },
  //   A2: { t: 's', v: 'h1-c1', h: 'h1-c1', w: 'h1-c1' },
  //   C2: { t: 'n', v: 3, w: '3' },
  //   A3: { t: 's', v: 'h1-c2', h: 'h1-c2', w: 'h1-c2' },
  //   C3: { t: 'n', v: 6, w: '6' },
  //   A4: { t: 's', v: 'h1-c3', h: 'h1-c3', w: 'h1-c3' },
  //   C4: { t: 'n', v: 9, w: '9' }
  // }
  
  console.log(XLSX.utils.sheet_to_json(workbook.Sheets['page1']))
  // Output:
  // [
  //   { header1: 'h1-c1', header3: 3 },
  //   { header1: 'h1-c2', header3: 6 },
  //   { header1: 'h1-c3', header3: 9 }
  // ]
  XLSX.utils
};

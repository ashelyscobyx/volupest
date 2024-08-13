let continuousFieldName = "sales";
let continuousAxisChannelDefError2 = { field: "revenue" };

let result = datum["" + continuousFieldName + "] + datum[" + continuousAxisChannelDefError2.field + "]";
console.log(result);
// This would output something like: datum["sales"] + datum["revenue"]

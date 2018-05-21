# object-mathematical-operator

実用性は薄いネタライブラリです
オブジェクトの四則演算を引数で記述できます

こういう風に使用します

var aObject = {paramA: 1, paramB: 2, paramC: 3, paramD: 4, paramE: 5, paramF: 6, paramAObjectOnly: 8};
var bObject = {paramA: 5, paramB: 6, paramC: 7, paramD: 8, paramE: 9, paramF: 10, paramBObjectOnly: 9};

var calcObject = aObject.mathematicalOperation(
  bObject,
  ["+", "paramA", "paramB", "paramAObjectOnly"],
  ["-", "paramC", "paramD", "paramBObjectOnly"],
  ["*", "paramE"],
  ["/", "paramF"]
);
cosole.log(calcObject);
/*
{
  paramA: 6,
  paramAObjectOnly: 8,
  paramB: 8,
  paramBObjectOnly: 9,
  paramC: -4,
  paramD: -4,
  paramE: 45,
  paramF: 0.6
}
*/

非破壊的関数なので実行結果を変数に格納します
第1引数：重ねるためのオブジェクト
第2引数以降：配列（0番目の値は四則演算の記号、以降は自由に計算したいパラメータ名を記述）
記載のないパラメーターは返すオブジェクトには含まれません
同一のパラメーターが指定された場合は後に記載されたものが優先されます
片方にしか存在しないパラメーターは計算されず、その値を利用します
各四則演算は自由に定義できます
・+：Object.prototype.plus
・-：Object.prototype.minus
・*：Object.prototype.times
・/：Object.prototype.division
var calcObject = aObject.mathematicalOperation(
  bObject,
  ["+", "paramA", "paramB", "paramAObjectOnly"],
  ["-", "paramC", "paramD", "paramBObjectOnly"],
  ["*", "paramE"],
  ["/", "paramF"]
);

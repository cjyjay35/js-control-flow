var testScore = 91;
switch (true) {
  case testScore >= 90 && testScore <= 100:
    console.log("A");
    break;
  case testScore >= 80 && testScore <= 89:
    console.log("B");
    break;
  case testScore >= 70 && testScore <= 79:
    console.log("C");
    break;
  case testScore >= 60 && testScore <= 69:
    console.log("D");
    break;
  case testScore >= 0 && testScore <= 59:
    console.log("F");
    break;
}

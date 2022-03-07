import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1: any = ""
  value2: any = ""
  result: any = ""
  resultstring: any = ""


  operator = "";
  equaloperator = ""
  setValue(v: number) {
    if (this.operator === "") {

      if (this.value1 === "") {
        this.value1 = v;
      }
      else {
        this.value1 = (this.value1 * 10) + v;
      }
    }

    else if (this.value1 !== "" && this.operator !== "") {

      if (this.value2 === "")

        this.value2 = v;

      else {
        this.value2 = (this.value2 * 10) + v;
      }
    }


  }

  setOperator(opr: string) {
    if (opr !== "=") {
      this.operator = opr;

    }

    else if (opr === "=") {
      this.equaloperator = opr;
      
     

      switch (this.operator) {


        case '+':
          this.result = this.value1 + this.value2;
         
          break;
        case '-':
          this.result = this.value1 - this.value2;
         
          break;
        case '*':
          this.result = this.value1 * this.value2;
         
          break;
        case '/':
          this.result = this.value1 / this.value2;
         
          break;
      }
      this.resultstring=this.value1.toString()+this.operator.toString()+this.value2.toString()+this.equaloperator.toString()+this.result.toString()

    }



  }


  clearInput() {
    this.value1 = ""
    this.value2 = ""
    this.result = ""
    this.operator = ""
    this.equaloperator = ""

  }
  constructor() {
    
    
   }

  ngOnInit(): void {
  }

}

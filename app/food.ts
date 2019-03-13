export class Food {
  constructor(public fName:string, public fCalories: number, public fVegan?: string) { }
 public displayAll(){
   console.log("food:" +this.fName + "calories:" +this.fCalories + "vegan:" +this.fCalories);
 }
}

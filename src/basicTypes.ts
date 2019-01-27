// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 10;

// String
let color: string = 'blue';

// Array, generic array type
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['number', 10];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Blue;

// any
let notSure: any = 4;
notSure = 'string';

// void
function warnUser(): void {
  console.log('This is my warning message');
}

// null, undefined
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
  throw new Error(message);
}

// object
declare function create(o: object | null): void;
create({prop: 0});

// type assertions
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
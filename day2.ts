function check(value: any){
    return value.join(" ");
}
let case1:any = [1,'data','3','result'];
console.log(check(case1));

console.log("");

let case2:any = ['Bejo','has','4','sport','car'];
console.log(check(case2));

/*
Array digunakan ketika kita ingin menambahkan item didalamnya,
Tuple digunakan ketika data yang ingin diinputkan telah memiliki format tipe data
Object digunakan ketika data yang diinputkan ingin memiliki nama untuk tiap datanya
*/
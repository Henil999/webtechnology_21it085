console.log("lab6 connected");
const name=document.getElementById('name');
const id=document.getElementById('id');
const CGPA1=document.getElementById('1stCGPA');
const CGPA2=document.getElementById('2stCGPA');
const CGPA3=document.getElementById('3stCGPA');
const detail=document.getElementById('detail')

class student{
    constructor(name,id,c1,c2,c3){
        this.name=name;
        this.id=id;
        this.CGPA1=c1;
        this.CGPA2=c2;
        this.CGPA3=c3;
        this.sgpa();
    }
    sgpa(){
        this.SGPA=(number(this.CGPA1)+number(this.CGPA2)+number(this.CGPA3))/3;
    }

}
 
function call(){
        // detail.innerText=name.value;
        
    let s1=new student(name.value,id.value,CGPA1.value,CGPA2.value,CGPA3.value);
    detail.innerText=`  name:${s1.name}\n
                        id:${s1.id}\n
                        CGPA1:${s1.CGPA1}\n
                        CGPA2:${s1.CGPA2}\n
                        CGPA1:${s1.CGPA3}\n
                        SGPA=${s1.SGPA}     `
}